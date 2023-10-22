import React from "react"
import { useNavigate } from "react-router-dom"
import '../styles/Forms.css'
import { useFormik } from "formik"
import { forgotPassSchema } from "../schemas/signupSchema"
import Navsign from "./Navsign"
import axios from "axios"

const initialValues = {
    email: ""
}

function ForgotPass() {
    const navigate = useNavigate()
    const link = ''
    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: forgotPassSchema,

        onSubmit: (values) => {
            console.log(values)
            axios.post('http://localhost:5000/forgotpass', {
                email: values.email
            }).then((res) => {
                if (res.data.code === 200) {
                    alert("A OTP as been sent to your email")
                    navigate('/newpass')
                }
                if (res.data.code === 500) {
                    alert("Email does not exist")
                }
            }).catch((err) => {

            })
        }
    });

    return (
        <div className='login-body'>
            <Navsign />
            <div className='login-box'>
                <p>Forgot password</p>

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
    )
}

export default ForgotPass