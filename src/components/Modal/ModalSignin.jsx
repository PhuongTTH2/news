import React from "react";
// import "./Modal.css";

import { Modal} from 'react-bootstrap'
import axiosClient from "api/rest/axiosClient";
import { useNavigate } from 'react-router'
import { pathName } from 'constants/index'
const ModalSignin = ({ modalOpen , close, handleModalOpen }) => {

  const navigate = useNavigate();
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (e) => {
    // const {data} = await axiosClient.post('login', {
    //     username, password
    // }, {withCredentials: true});
    localStorage.setItem("accessToken", true)
    handleModalOpen()
    navigate(pathName.LOUNGE)
   }
   const handleLogout = async (e) => {
    localStorage.removeItem("accessToken")
    navigate(pathName.HOME)

   }
   
  if (!modalOpen) {
    return null;
  }
  return (
    <Modal show={modalOpen} onHide={close} size="lg">
    <div className="Acct">
        <div className="modal-content">
          <div className="modal-header" >
              <a href="/" className="logo">
                  <img alt="alt" src="img/logo.png"/>
              </a>
          </div>
          <div className="modal-body"
          //  style={{ marginLeft:20 }}
           >
              <p>
                  <input
                      placeholder="USERNAME"
                      onInput="this.className = ''"
                      name="username"
                      onChange={e => setUserName(e.target.value)}
                  />
              </p>
              <p>
                  <input
                      placeholder="PASSWORD"
                      onInput="this.className = ''"
                      name="password"
                      onChange={e => setPassword(e.target.value)}
                  />
              </p>
              <button type="button" onClick= {() => handleSubmit()}className="btn btn-default fs--12">
                  SIGN IN
              </button>
              <button type="button" onClick= {() => handleLogout()}className="btn btn-default fs--12">
                  OUT
              </button>
              <div className="login-signup-links">
                <a onClick={() => { handleModalOpen('ForgotUsername') }}  style={{ color:'#00aeef', cursor: 'pointer'}}>
                    Forgot username
                </a>
                <a onClick={() => { handleModalOpen('ForgotPassword') }}  style={{color:'#00aeef ', cursor: 'pointer'}}>
                    Forgot password
                </a>
              </div>
              <p>
                  New to Newligion?{" "}
                  <a onClick={() => { handleModalOpen('SignUp') }}  style={{ color:'#00aeef', cursor: 'pointer'}}>
                      Sign Up
                  </a>
                  .
              </p>
          </div>
        </div>
     </div>
    </Modal>
  );
}

export default ModalSignin;