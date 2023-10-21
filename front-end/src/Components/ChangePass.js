import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/Forms.css'

function ChangePass() {
    const navigate = useNavigate()
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log(otp, password)
        /*axios.post('http://localhost:5000/submit-otp',
            {
                otp: otp,
                password: password,
            })
            .then(res => {
                console.log(res.data)
                if (res.data.code === 200) {
                    navigate('/signin')
                    alert('Password Updated.')
                } else {
                    alert('server err / wrong OTP')
                }
            }).catch(err => {
                console.log(err)
            })*/
    }
    const handleOtpChange = (event) => {
        setOtp(event.target.value);
    };

    const handlepassChange = (event) => {
        setPassword(event.target.value);
    };


    return (
        <div className='login-body'>
            <div className='login-box'>
                <p>Forget password</p>

                <form onSubmit={handleSubmit}>
                    <div className='user-box'>
                        <input type="text" name="otp" value={otp} onChange={handleOtpChange} required />
                        <label>OTP</label>
                    </div>
                    <div className='user-box'>
                        <input type="password" name="password" value={password} onChange={handlepassChange} required />
                        <label>NEW PASSWORD</label>
                    </div>
                    <a href='./SignIn' onClick={handleSubmit}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Change Password
                    </a>
                </form>
            </div>
        </div>
    )
}

export default ChangePass