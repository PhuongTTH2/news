import React from "react";
import { Modal } from "react-bootstrap";
import axiosClient from "api/rest/axiosClient";
import { useNavigate } from "react-router";
import { pathName } from "constants/index";

const ModalSignin = ({ modalOpen, close, handleModalOpen }) => {
  const navigate = useNavigate();
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (e) => {
    const data = await axiosClient.post("/api/login", {
      username,
      password,
    });
    if (data) {
      localStorage.setItem("accessToken", data.token);
      handleModalOpen();
      navigate(pathName.LOUNGE);
      window.location.reload();
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
        <p>
          <input
            placeholder="USERNAME"
            name="username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </p>
        <p>
          <input
            placeholder="PASSWORD"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <button
          type="button"
          onClick={() => handleSubmit()}
          className="btn btn-default fs--12"
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
