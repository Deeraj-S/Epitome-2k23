import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { changePassSchema } from "../schemas/signupSchema"
import axios from "axios"
import Cookies from 'js-cookie';
import Navsign from "./Navsign"
import '../styles/Forms.css'
import LoadingSpinner from "./LoadingSpinner"

const initialValues = {
    otp: "",
    password: "",
}

function ChangePass() {
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
        validationSchema: changePassSchema,
        onSubmit: (values) => {
            setLoading(true)
            console.log(values)
            axios.post('http://localhost:5000/changepass', {
                otp: values.otp,
                password: values.password,
            }).then((res) => {
                if (res.data.code === 200) {
                    alert("Password Updated Successfully")
                    navigate('/signin')
                }
                if (res.data.code === 404) {
                    setMessage("Invalid OTP")
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
                    <p>Forget password</p>
                    {message && <p className={message.includes('sent') ? 'success-message' : 'error-message'}>{message}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className='user-box'>
                            <input type="text" name="otp" id='otp' value={values.otp} onChange={handleChange} required />
                            {errors.otp && touched.otp ? (<p className="form-error">{errors.otp}</p>) : null}
                            <label htmlFor="otp">OTP</label>
                        </div>
                        <div className='user-box'>
                            <input type="password" name="password" id="password" value={values.password} onChange={handleChange} required />
                            {errors.password && touched.password ? (<p className="form-error">{errors.password}</p>) : null}
                            <label htmlFor="password">NEW PASSWORD</label>
                        </div>
                        <a href={link} onClick={handleSubmit}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Change Password
                        </a>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ChangePass