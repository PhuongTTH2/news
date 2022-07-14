import React, { useEffect } from "react";
import { Modal } from "react-bootstrap";
import axiosClients from "api/rest/axiosClients";
import apiPosts from "api/rest/apiPosts";
import { useNavigate } from "react-router";
import { pathName } from "constants/index";
import { useAppDispatch } from "app/hooks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { isEmpty } from "lodash";
import { UserKey } from "constants/enum";
import { loginStart, loginSuccess } from "slices";
const ModalSignin = ({ modalOpen, close, handleModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [errorValidate, setErrorValidate] = React.useState("");
  const [show, setShow] = React.useState(false);
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(6)
      .label("Username"),
    password: yup
      .string()
      .required("Password is required")
      .min(6)
      .matches(
        /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$&*])/,
        "Password include at least one letter each for uppercase letters, lowercase letters, special characters and numbers"
      )
      .label("Password"),
  });
  // Get maintenance company from graphql api
  const defaultValues = {
    username: "",
    password: "",
  };

  const form = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  // const errors = form.formState.errors
  useEffect(() => {
    if (modalOpen) {
      setErrorValidate("");
      setErrorMessage("");
    }
  }, [modalOpen]);
  useEffect(() => {
    if (form.formState.errors) {
      setErrorValidate(form.formState.errors);
    }
  }, [form.formState.errors]);

  const onSubmit = async (inputs) => {
    dispatch(loginStart());
    const data = await axiosClients.post(apiPosts.signIn, {
      username: inputs.username,
      password: inputs.password,
    });

    if (data.message === "ok") {
      await dispatch(loginSuccess(data));
      handleModalOpen();
      navigate(pathName.LOUNGE);
      window.location.reload();
    } else {
      setShow(true);
      setErrorMessage(data.message);
    }
  };
  return (
    <Modal
      show={modalOpen}
      onHide={handleModalOpen}
      size="lg"
      className="Acct"
      style={{ maxWidth: "100%" }}
    >
      <div className="modal-header">
        <a href="/" className="logo">
          <img alt="alt" src="img/logo.png" />
        </a>
      </div>

      <div className="modal-body">
        {show ? (
          <>
            <div class="alert alert-danger alert-dismissible">
              <a
                onClick={() => setShow(false)}
                class="close"
                data-dismiss="alert"
                aria-label="close"
              >
                &times;
              </a>
              <strong> {errorMessage}</strong>
              <br />
            </div>
          </>
        ) : (
          ""
        )}
        <p
          className={`${
            !isEmpty(errorValidate?.username) ? "error-border" : ""
          }`}
        >
          <input
            placeholder="USERNAME"
            name="username"
            onChange={(e) => form.setValue("username", e.target.value)}
          />
          {errorValidate.username && (
            <span className="error-login">
              {errorValidate.username.message}
            </span>
          )}
        </p>
        <p
          className={`${
            !isEmpty(errorValidate?.password) ? "error-border" : ""
          }`}
        >
          <input
            placeholder="PASSWORD"
            type="password"
            name="password"
            onChange={(e) => form.setValue("password", e.target.value)}
          />
          {errorValidate.password && (
            <span className="error-login">
              {errorValidate.password.message}
            </span>
          )}
        </p>
        <button
          type="button"
          onClick={form.handleSubmit(onSubmit)}
          className="btn btn-default fs--12"
          disabled={form.formState.isSubmitting}
        >
          SIGN IN
        </button>
        <div className="login-signup-links">
          <a
            class="bright-blue firstLink pointerA "
            onClick={() => {
              handleModalOpen(UserKey.ForgotUsername);
            }}
          >
            Forgot username
          </a>
          <a
            class="bright-blue  pointerA"
            onClick={() => {
              handleModalOpen(UserKey.ForgotPassword);
            }}
          >
            Forgot password
          </a>
        </div>
        <p>
          New to Newligion?{" "}
          <a
            onClick={() => {
              handleModalOpen(UserKey.SignUp);
            }}
            class="bright-blue  pointerA "
          >
            Sign Up
          </a>
          .
        </p>
      </div>
    </Modal>
  );
};

export default ModalSignin;
