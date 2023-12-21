import React from 'react'
import '../styles/LoginSignup.css';
import {Link} from 'react-router-dom';
const emailValidator = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const passwordValidator = (password) => {
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/;
  return passwordRegex.test(password);
};

function LoginSignup() {
  return (
    <div className='container'>
      <div classsName="header" id="header">
        <div className="text">Sign Up</div>
        <div classname="underline" id="underline"></div>
      </div>
      <div classname='inputs' id="inputs">
        <div className="input">
          <img src="person.png" alt=""></img>
          <input type="text" placeholder='Enter Your Name' required></input>
        </div>
        {/* <div className="input">
          <img src="phone.png" alt="phone"></img>
          <input type="text" placeholder='Enter Your Phone Number'></input>
        </div> */}
        <div className="input">
          <img src="email.png" alt=""></img>
          <input type="email" placeholder='Enter Your Mail'></input>
        </div>
        <div className="input">
          <img src="password.png" alt=""></img>
          <input type="password" placeholder='Enter Your Password'></input>
        </div>
      </div>
      {/* <div className="forgot-password">Forgot Password? <span>Click Here!</span></div> */}
      <div className="submitcontainer" id="submit-container">
      {/* <div className="submit" id="submit">Sign Up</div> */}
      <div className="button" id="button"><span><Link className='hello' to="/login1">Sign Up</Link></span></div>
      {/* <div id = "button" ><Link to="/">Sign Up</Link></div> */}
    </div>
    </div>
  )
}

export default LoginSignup;