import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import axiosClients from "api/rest/axiosClients";
import apiPosts from "api/rest/apiPosts";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { isEmpty } from "lodash";

const ModalForgotEmail = ({ modalOpen, close, handleModalOpen }) => {
  const [errorValidate, setErrorValidate] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [show, setShow] = useState(false);
  const schema = yup.object().shape({
    email: yup.string().required("Email is required").email().label("Email"),
  });

  const defaultValues = {
    email: "",
  };

  const form = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (form.formState.errors) {
      setErrorValidate(form.formState.errors);
    }
  }, [form.formState.errors]);

  const handleEmail = async (inputs) => {
    const data = await axiosClients.post(apiPosts.forgotPasswordInitiateEmail, {
      email: inputs.email,
    });
    if (data.message === "ok") {
      handleModalOpen();
    } else {
      setShow(true);
      setErrorEmail(data.message);
    }
  };
  return (
    <Modal show={modalOpen} className="Acct" onHide={close} size="lg">
      <div className="modal-header">
        <a href="/" className="logo">
          <img alt="alt" src="img/logo.png" />
        </a>
      </div>
      <div className="modal-body">
        {show ? (
          <>
            <div class="alert alert-danger alert-dismissible" >
              <span
                onClick={() => setShow(false)}
                class="close"
                data-dismiss="alert"
                aria-label="close"
                style={{ margin: "0px" }}
              >
                &times;
              </span>
              <strong> {errorEmail}</strong>
              <br />
            </div>
          </>
        ) : (
          ""
        )}
        <p className="fs--20 fw--700">Recover your email</p>
        <p>
          Don't worry! You may have forgotten your email, but we can help you
          out. Enter your email address below and we'll email you your email.
        </p>
        <p
          className={`${!isEmpty(errorValidate?.email) ? "error-border" : ""}`}
        >
          <input
            placeholder="EMAIL"
            name="email"
            onChange={(e) => form.setValue("email", e.target.value)}
          />
          {errorValidate.email && (
            <span className="error-login">{errorValidate.email.message}</span>
          )}
        </p>
        <button
          type="button"
          className="btn btn-default fs--12"
          onClick={form.handleSubmit(handleEmail)}
          disabled={form.formState.isSubmitting}
        >
          EMAIL ME
        </button>

        <p>
          If you are having trouble accessing your account, follow{" "}
          <a href="/" className="bright-blue">
            this link
          </a>
          .
        </p>
        <div className="login-signup-links">
          <span
            onClick={() => {
              handleModalOpen("Signin");
            }}
            class="bright-blue fw--700 firstLink pointerA"
          >
            LOG IN
          </span>
          <span
            onClick={() => {
              handleModalOpen("SignUp");
            }}
            class="bright-blue fw--700 pointerA"
          >
            SIGN UP
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default ModalForgotEmail;
