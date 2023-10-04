import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Signin_upStyles.css'

function SignUp() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpass, setconfirm] = useState('')
    const [college, setcollege] = useState('')
    navigate("/signup")
    /*const handleSubmit=() =>{
        console.log(email,password)
        axios.post('http://localhost:5000/signup',
        {
            email: email,
            password: password
        })
        .then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    }*/
    return (
        <div className="signbody">
            <h1 className="center"> Sign Up </h1>
            <div className="outcard">
                <p>
                    Name <input onChange={(e) => {
                        setName(e.target.value)
                    }}
                        value={name} className="inputs" type="text" /><br />

                    Email <input onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                        value={email} className="inputs" type="email" /><br />

                    Password <input onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                        value={password} className="inputs" type="password" /><br />

                    Confirm Password <input onChange={(e) => {
                        setconfirm(e.target.value)
                    }}
                        value={confirmpass} className="inputs" type="password" /><br />

                    College name <input onChange={(e) => {
                        setcollege(e.target.value)
                    }}
                        value={college} className="inputs" type="text" /><br />

                    <button
                        //onClick={handleSubmit}
                        className="btns"> SUBMIT </button>
                    <h4 className="btn1">Already register? Click on
                        <Link style={{ color: 'white' }}
                            to={'/SignIn'}> SIGN IN </Link> </h4>
                </p>
            </div>
        </div>
    )
}


export default SignUp