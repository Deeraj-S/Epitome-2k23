import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Forms.css'
import Navsign from './Navsign';

function Form() {
  const navigate = useNavigate();
  navigate('/signup')
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirm] = useState("");
  const [College, setcollege] = useState("");

  const handleNameChange = (event) => {
    setname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmChange = (event) => {
    setConfirm(event.target.value);
  };

  const handleCollegeChange = (event) => {
    setcollege(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Comfirm password: ", confirmpass);
    console.log("College: ", College);

  };
  return (
    <>
      <div className='login-body'>
        <Navsign />

        <div className='login-box'>
          <p>REGISTER</p>

          <form onSubmit={handleSubmit}>
            <div className='user-box'>
              <input type="text" name="username" value={name} onChange={handleNameChange} required />
              <label>username</label>
            </div>
            <div className='user-box'>
              <input type="email" name="email" value={email} onChange={handleEmailChange} required />
              <label>Email</label>
            </div>
            <div className='user-box'>
              <input type="password" name="password" value={password} onChange={handlePasswordChange} required />
              <label>Password</label>
            </div>
            <div className='user-box'>
              <input type="password" name="password" value={confirmpass} onChange={handleConfirmChange} required />
              <label>Confirm Password</label>
            </div>
            <div className='user-box'>
              <input type="password" name="college" value={College} onChange={handleCollegeChange} required />
              <label>College name</label>
            </div>
            <a href='/' onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>

            <p>Already have an account? <sub> <a href='/Signin' className="a2">Sign in!</a></sub></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form
