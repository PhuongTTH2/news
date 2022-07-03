import React, { useEffect } from "react";
import "./Modal.css";
import ReactDOM from 'react-dom';
import { Modal} from 'react-bootstrap'
import Recaptcha from 'react-recaptcha'
const ModalSignUp = ({ modalOpen , close, handleModalOpen }) => {
  const [openEmail, setOpenEmail] = React.useState(false)
  const [openUser, setOpenUser] = React.useState(false)
  const [email, setEmail] = React.useState('');
  const [captcha, setCaptcha] = React.useState(false);
  useEffect(() =>{
    if(modalOpen){
        setOpenEmail(true)
    }
  },[modalOpen])
  const handleEmail= () =>{
        //check mail
        setOpenEmail(false)
        setOpenUser(true)
  }
  const handleSignUp= () =>{
    if(captcha){
      alert('success')
    }else{
      alert('Please verify that you are a human!')
    }
  }
    const handleBack =()=>{
    setOpenEmail(true)
    setOpenUser(false)
    }
  const handleModalClose =(e)=>{
    setOpenEmail(false)
    setOpenUser(false)
    handleModalOpen(e)
  }  
  const recaptchaLoaded = () =>{

  }
  const verifyCallback = (response) =>{
    if(response){
      setCaptcha(true)
    }
  }
  return (
    openEmail ? (
    <Modal show={openEmail} onHide={handleModalClose} size="lg">
        <div class="Acct signup" id="signUp1st">
            <div class=" signup-content">
                <button type="button" class="close" onClick={() => { handleModalClose() }} >&times;</button>
                <div class="signup-header">
                    <a href="/" class="logo"><img src="img/logo.png"/></a>
                </div>
                <div class="signup-body">
                    <div class="form">
                        <p>
                        <input placeholder="EMAIL" 
                        name="email" 
                        onClick={(e) => setEmail(e.target.value)}
                        />

                        </p>
                        <button type="button" onClick= {() => handleEmail()} className="btn btn-default fs--12">
                            NEXT
                        </button>
                        <p>Already a Newligion?
                            <a onClick={() => { handleModalClose('Signin') }}  class="fw--700 pl--10 bright-blue pointerA" >
                                LOG IN
                            </a>
                        </p>
                        <p>By continuing, you agree to our <a href="/user-agreement">User Agreement</a> and <a href="/privacy">Privacy Policy</a></p>
                    </div>
                </div>
                    
                <div class="clearfix"></div>
            </div>
		</div>
    </Modal>
    ):(
        openUser ? (
        <Modal show={openUser} onHide={handleModalClose} size="lg">
            <div class="Acct signup" id="signUp2nd">
                  <div class="modal-content">
                    <div class="modal-header">
                      <a href="/" class="logo"><img src="img/logo.png"/></a>
                    </div>
                    <div class="modal-body">
                        <p><input placeholder="CHOOSE A USERNAME" oninput="this.className = ''" name="email"/></p>
                        <p><input placeholder="PASSWORD" oninput="this.className = ''" name="phone"/></p>
                            
                        <Recaptcha
                            sitekey="xxxxxxxxxxxxxxxxxxxx"
                            render="explicit"
                            onloadCallback={recaptchaLoaded}
                            verifyCallback={verifyCallback}
                          />
                    </div>
                    <div class="modal-footer"> 
                        <a onClick= {() => handleBack()}  class="bright-blue backLink" style={{ cursor:'pointer'}}>Back</a>

                        <a onClick= {() => handleSignUp()}  class="bright-blue fw--700 btn btn-default fs--12 signupLink">SIGN UP</a>
                        
                        <div class="clearfix"></div>
                    </div>
                  </div>
            </div>
        </Modal>
        ):("")
    )
   
  );
}

export default ModalSignUp;