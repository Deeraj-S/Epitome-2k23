import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import Navsign from './Navsign';
import '../styles/Forms.css'
import axios from 'axios';
import { signInSchema } from '../schemas/signupSchema';

const initialValues = {
  email: "",
  password: "",
}

function Signin() {
  const navigate = useNavigate()
  const link = '';

  useEffect(() => {
    const token = localStorage.getItem('TOKEN')
    if (token) {
      navigate('/')
    }
  })

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signInSchema,

    onSubmit: (values) => {
      console.log(values)
      axios.post('http://localhost:5000/signin', {
        email: values.email,
        password: values.password
      }).then((res) => {
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
    }
  });

  return (
    <>
      <div className='login-body'>
        <Navsign />
        <div className='login-box'>
          <p>Login</p>


          <form onSubmit={handleSubmit} >
            <div className='user-box'>
              <input name="email" id='email' value={values.email} onChange={handleChange} required />
              {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}

              <label htmlFor='email'>Email</label>
            </div>
            <div className='user-box'>
              <input type="password" name="password" id='password' value={values.password} onChange={handleChange} required />
              {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null}
              <label htmlFor='password'>Password</label>
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

