import React from "react";
import { Modal } from "react-bootstrap";
import axiosClients from "api/rest/axiosClients";
import { useNavigate } from "react-router";
import { pathName } from "constants/index";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Controller, useForm } from 'react-hook-form'
import Alert from 'react-bootstrap/Alert'
import { useAppDispatch } from "app/hooks"
import { getAccountScopes } from "slices";
import {isEmpty} from 'lodash'
const ModalSignin = ({ modalOpen, close, handleModalOpen }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState("");
  const [show, setShow] = React.useState(false);
  const schema = yup.object().shape({
    username: yup.string().required('Username is required').min(6).label('Username'),
    password: yup.string().required('Password is required').min(6)
    .matches(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$&*])/, 'Password include at least one letter each for uppercase letters, lowercase letters, special characters and numbers')
    .label('Password'),
})
   // Get maintenance company from graphql api
   const defaultValues = {
    username:'',
    password:'',
}

  const form= useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  })
  const errors = form.formState.errors
  console.log(errors)
  const onSubmit = async (inputs) => {
    const data = await axiosClients.post("/auth/signin", {
      username:"jettest1",
      password:"Password123!2",
      // username:inputs.username,
      // password:inputs.password,
    })

    if(data.message ==="ok"){
    axiosClients.setLocalAccessToken = (data) =>{
      localStorage.setItem("access", JSON.stringify(data));
    }
    localStorage.setItem("accessToken", data.AccessToken);
    localStorage.setItem("username", "jettest1");
    localStorage.setItem("RefreshToken", data.RefreshToken);
    handleModalOpen();
    navigate(pathName.LOUNGE);
    window.location.reload();
    }else{
      setShow(true); 
      setErrorMessage(data.message)
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
      <div
        className="modal-body"
        //  style={{ marginLeft:20 }}
      >
        {
          show ? (<Alert variant="danger">{errorMessage}</Alert>):("")
        }
        <p className={`${ !isEmpty(errors?.username) ? "error-border" : ""}`}>
          <input
            placeholder="USERNAME"
            name="username"
            onChange={(e) => form.setValue("username", e.target.value)}
          />
          {errors.username && (
              <span className="error-login">
                {errors.username.message}
              </span>
          )}
        </p>
        <p className={`${ !isEmpty(errors?.password) ? "error-border" : ""}`}>
          <input 
            placeholder="PASSWORD"
            type="password"
            name="password"
            onChange={(e) => form.setValue("password", e.target.value)}
          />
          {errors.password && (
              <span className="error-login">
                {errors.password.message}
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
              handleModalOpen("ForgotUsername");
            }}
          >
            Forgot username
          </a>
          <a
            class="bright-blue  pointerA"
            onClick={() => {
              handleModalOpen("ForgotPassword");
            }}
          >
            Forgot password
          </a>
        </div>
        <p>
          New to Newligion?{" "}
          <a
            onClick={() => {
              handleModalOpen("SignUp");
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
