import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { useEffect } from "react"
import { forgotPassSchema } from "../schemas/signupSchema"
import axios from "axios"
import Cookies from 'js-cookie';
import Navsign from "./Navsign"
import '../styles/Forms.css'
import LoadingSpinner from "./LoadingSpinner"

const initialValues = {
    email: ""
}
function ForgotPass() {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState(false)
    const link = ''
    useEffect(() => {
        const token = Cookies.get('TOKEN');
        if (token) {
            navigate('/')
        }
    }, [navigate])

    const { values, touched, errors, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: forgotPassSchema,

        onSubmit: (values) => {
            setLoading(true)
            console.log(values)
            axios.post('http://localhost:5000/forgotpass', {
                email: values.email
            }).then((res) => {
                if (res.data.code === 200) {
                    alert("A OTP as been sent to your email")
                    navigate('/newpass')
                }
                if (res.data.code === 404) {
                    setMessage("Email does not exist")
                }
            }).catch((err) => {

            }).finally(() => {
                setLoading(false)
            })
        }
    });

    return (
        <>
            {loading && <LoadingSpinner />}
            <div className='login-body'>
                <Navsign />
                <div className='login-box'>
                    <p>Forgot password</p>
                    {message && <p className={message.includes('sent') ? 'success-message' : 'error-message'}>{message}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className='user-box'>
                            <input type="text" name="email" id="email" value={values.email} onChange={handleChange} required />
                            {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : null}
                            <label htmlFor="email">Email</label>
                        </div>
                        <a href={link} onClick={handleSubmit}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Send OTP
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPass