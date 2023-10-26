import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas/signupSchema';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navsign from './Navsign';
import '../styles/Forms.css'


const initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Forms() {
  const navigate = useNavigate()
  const link = ''

  useEffect(() => {
    const token = Cookies.get('TOKEN');
    if (token) {
      navigate('/')
    }
  }, [navigate])

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,

    onSubmit: (values, action) => {
      console.log(values)

      axios.post('http://localhost:5000/signup', {
        username: values.username,
        email: values.email,
        password: values.password,
        confirm_password: values.confirm_password,
        college: values.college

      }).then((res) => {
        if (res.data.code === 200) {
          alert('Signup Successfull')
          navigate('/signin')
        }
        if (res.data.code === 404) {
          alert('User already exist')
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
          <p>REGISTER</p>

          <form onSubmit={handleSubmit}>

            <div className='user-box'>
              <input type="name" autoComplete='off' name="username" id='name' value={values.username} onChange={handleChange} onBlur={handleBlur} required />
              {errors.username && touched.username ? (<p className='form-error'>{errors.username}</p>) : null}
              <label htmlFor='name'>username</label>
            </div>

            <div className='user-box'>
              <input type="text" autoComplete='off' name="email" id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} required />
              {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}
              <label htmlFor='email'>Email</label>
            </div>

            <div className='user-box'>
              <input type="password" autoComplete='off' name="password" id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} required />
              {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null}
              <label htmlFor='password'>Password</label>
            </div>

            <div className='user-box'>
              <input className='textbox' type="password" autoComplete='off' name="confirm_password" id='confirm_password' value={values.confirm_password} onChange={handleChange} onBlur={handleBlur} required />
              {errors.confirm_password && touched.confirm_password ? (<p className='form-error'>{errors.confirm_password}</p>) : null}
              <label htmlFor='confirm_password'>Confirm Password</label>
            </div>

            <a href={link} onClick={handleSubmit}>
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

export default Forms
