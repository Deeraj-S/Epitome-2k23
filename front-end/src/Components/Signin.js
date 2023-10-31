import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signInSchema } from '../schemas/signupSchema';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navsign from './Navsign';
import '../styles/Forms.css'
import LoadingSpinner from './LoadingSpinner';

const initialValues = {
  email: "",
  password: "",
}
function Signin() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('');
  const link = '';

  useEffect(() => {
    const token = Cookies.get('TOKEN');
    if (token) {
      navigate('/')
    }

  }, [navigate])


  const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signInSchema,

    onSubmit: (values) => {
      setLoading(true)

      axios.post('http://localhost:5000/signin', {
        email: values.email,
        password: values.password
      }).then((res) => {

        if (res.data.code === 230) {
          navigate("/Admin")
        }

        else if (res.data.code === 200) {
          navigate('/')
          Cookies.set('TOKEN', res.data.token, { expires: new Date(Date.now() + 7200000) })
        }


        else if (res.data.code === 500) {
          setMessage("User Not Found")
        }
        else if (res.data.code === 404) {
          setMessage("Invalid Password")
        }


      }).catch((err) => {
        alert("Error")

      }).finally(() => {
        setLoading(false);
      })
    }
  });

  return (
    <>
      {loading && <LoadingSpinner />}

      <div className='login-body'>
        <Navsign />
        <div className='login-box'>
          <p>Login</p>
          {message && <p className={message.includes('sent') ? 'Success-message' : 'error-message'}>{message}</p>}


          <form onSubmit={handleSubmit} >
            <div className='user-box'>
              <input name="email" id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} required />
              {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}

              <label htmlFor='email'>Email</label>
            </div>
            <div className='user-box'>
              <input type="password" name="password" id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} required />
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

