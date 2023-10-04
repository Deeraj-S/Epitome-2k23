import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Signin_upStyles.css'
import Navsign from "./Navsign"

function SignIn() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    navigate("/signin")

    /*const handleSubmit=() =>{
        console.log(email,password)
        axios.post('http://localhost:5000/signin',
        {
            email: email,
            password: password
        })
        .then(res => {
            console.log(res.data)

            if (res.data.code === 500) {
                alert('User Not Found')
            }
            if (res.data.code === 404) {
                alert('Password is wrong')
            }
            if (res.data.code === 200) {
                // move to home
                navigate('/')
                localStorage.setItem('TOKEN', res.data.token)
                localStorage.setItem('EMAIL', res.data.email)
            }
        }).catch(err => {
            console.log(err)
        })
    }*/

    return (<div className="signbody">

        <Navsign />
        <h1 className="center"> SIGN IN </h1>
        <div className="outcard">
            <p>
                Email
                <input
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    value={email}
                    className="inputs"
                    type="email" /> <br /> <br />
                Password
                <input
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
                    className="inputs" type="password" /> <br /> <br />
                <Link style={{ textAlign: 'left', display: 'block', marginTop: '-20px', color: 'white' }}
                    to={'/forget-pass'}> Forget Password </Link>
                <button
                    //onClick={handleSubmit}
                    className="btns"> SUBMIT </button>
                <Link style={{ textAlign: 'center', display: 'block', marginTop: '5px', color: 'white' }}
                    to={'/signup'}> SIGN UP </Link>

            </p>
        </div>
    </div>
    )
}


export default SignIn