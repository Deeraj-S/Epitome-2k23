import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navsign from './Navsign';
import '../styles/Forms.css'
import axios from 'axios';


function Signin() {
  const navigate = useNavigate()
  const link = '';
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem('TOKEN')
    if (token) {
      navigate('/')
    }
  })

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    console.log("Email: ", email);
    console.log("Password: ", password);

    axios.post('http://localhost:5000/signin', {
      email: email,
      password: password
    })
      .then((res) => {
        if (res.data.code === 500) {
          alert('User Not Found')
        }
        if (res.data.code === 404) {
          alert('Invalid Password')
        }

        if (res.data.code === 200) {
          navigate('/')
          localStorage.setItem('TOKEN', res.data.token)
        }
      }).catch((err) => {

      })
  };


  return (
    <>
      <div className='login-body'>
        <Navsign />
        <div className='login-box'>
          <p>Login</p>

          <form onSubmit={handleSubmit} >
            <div className='user-box'>
              <input type="email" name="email" value={email} onChange={handleEmailChange} required />
              <label>Email</label>
            </div>
            <div className='user-box'>
              <input type="password" name="email" value={password} onChange={handlePasswordChange} required />
              <label>Password</label>
            </div>
            <a href='/forgotpass' className="a1"> Forget Password ?</a>
            <a href={link} onClick={handleSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>

            <p>Don't have an account? <sub> <a href='/SignUp' className="a2">Sign up!</a></sub></p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Signin

