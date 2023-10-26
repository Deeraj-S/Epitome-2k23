import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from "./Navbar"
import '../styles/About.css'


function Helpdesk() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
    })
    return (
        <>
            <Navbar />
            <div className='general-body'>
                <div className='general-box'>
                    <p>For any queries contact</p>
                    <h3>STAFF COORDINATORS</h3>
                    <h4>
                        Mr.Roshan Surasis +91 966348843443<br/>
                        Dr.Jeevan Pinto +91 9448952025<br/>
                    </h4>
                    <h3>STUDENT COORDINATORS</h3>
                    <h4>
                        Ms.Anvitha +91 7892772583<br/>
                        Ms.Manasi +91 8277050760<br/>
                    </h4>
                    <h3>WEBSITE TEAM</h3>
                    <h4>
                        Mr.Deeraj +91 8088237969
                    </h4>
                </div>
            </div>
        </>
    )
}
export default Helpdesk