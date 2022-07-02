import React from "react";
// import "./Modal.css";
import ReactDOM from 'react-dom';
import { Modal} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
const ModalSignUp = ({ modalOpen , close,handleModalOpen }) => {

  if (!modalOpen) {
    return null;
  }

  return (
    <Modal show={modalOpen} onHide={close} size="lg">
        <div className=" Acct signup" >
            <div className="modal-content">
                <button type="button" className="close" data-dismiss="modal">
                    ×
                </button>
                <div className="signup-header">
                    <a href="/" className="logo">
                        <img alt="alt" src="img/logo.png"/>
                    </a>
                </div>
                <div className="signup-body">
                    <div className="form">
                        <p>
                            <input
                                placeholder="EMAIL"
                                onInput="this.className = ''"
                                name="email"
                            />
                        </p>
                        <a
                            href="/"
                            className="bright-blue fw--700 btn btn-default fs--12"
                            data-toggle="modal"
                            data-target="#signUp2nd"
                            data-dismiss="modal"
                        >
                            NEXT
                        </a>
                        <p>
                            Already a Newligion?{" "}
                            <a onClick={() => { handleModalOpen('Signin') }}  style={{ color:'#00aeef', cursor: 'pointer'}}>

                                LOG IN
                            </a>
                        </p>
                        <p>
                            By continuing, you agree to our <a href="/">User Agreement</a> and{" "}
                            <a href="/">Privacy Policy</a>
                        </p>
                    </div>
                </div>
            <div className="clearfix"/>
            </div>
        </div>
    </Modal>
  );
}

export default ModalSignUp;