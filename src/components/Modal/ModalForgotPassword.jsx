// import "./Modal.css";
import { Modal } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';
const ModalForgotPassword = ({ modalOpen, close, handleModalOpen }) => {
  if (!modalOpen) {
    return null;
  }

  return (
    <Modal show={modalOpen} className="Acct" onHide={close} size="lg">
      <div className="modal-header">
        <a href="/" className="logo">
          <img alt="alt" src="img/logo.png" />
        </a>
      </div>
      <div className="modal-body">
        <p className="fs--20 fw--700">Recover your username</p>
        <p>
          Don't worry! You may have forgotten your username, but we can help you
          out. Enter your email address below and we'll email you your username.
        </p>
        <p>
          <input
            placeholder="EMAIL"
            onInput="this.className = ''"
            name="email"
          />
        </p>
        <button type="button" className="btn btn-default fs--12">
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
          <a
            onClick={() => {
              handleModalOpen("Signin");
            }}
            class="bright-blue fw--700 firstLink pointerA"
          >
            LOG IN
          </a>
          <a
            onClick={() => {
              handleModalOpen("SignUp");
            }}
            class="bright-blue fw--700 pointerA"
          >
            SIGN UP
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default ModalForgotPassword;
