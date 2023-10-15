import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/Forms.css'

function ForgotPass() {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const handleSubmit = () => {
        console.log(email)
        /*axios.post('http://localhost:5000/send-otp',
            {
                email: email,
            })*/
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className='login-body'>
            <div className='login-box'>
                <p>Forgot password</p>

                <form onSubmit={handleSubmit}>
                    <div className='user-box'>
                        <input type="email" name="email" value={email} onChange={handleEmailChange} required />
                        <label>Email</label>
                    </div>
                    <a href='./newpass' onClick={handleSubmit}>
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