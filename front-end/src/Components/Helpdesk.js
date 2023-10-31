import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Cookies from 'js-cookie';
import Navbar from "./Navbar"
import '../styles/Helpdesk.css'
import bgvideo from '../animation/9.webm'
import Footer from './Footer';


function Helpdesk() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = Cookies.get('TOKEN');
        if (!token) {
            navigate('/signin')
        }
    }, [navigate])
    return (
        <>
            <Navbar />
            <div className='helpdesk-body'>
                <video
                    autoPlay
                    loop
                    muted
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100vh",
                        left: "50%",
                        top: "50%",
                        objectFit: "cover",
                        transform: "translate(-50%,-50%)",
                        zIndex: "-1"
                    }}>
                    <source src={bgvideo} type='video/webm' />
                </video>
                <div className='helpdesk-box'>
                    <h2>For any queries contact</h2>
                    <h3>STAFF COORDINATORS</h3>
                    <h4>
                        Mr Roshan Suvaris - +91 966348843443<br /><br/>
                        Dr Jeevan Pinto - +91 9448952025<br />
                    </h4>
                    <h3>STUDENT COORDINATORS</h3>
                    <h4>
                        Ms Anvitha - +91 7892772583<br /><br/>
                        Ms Manasi  G - +91 8277050760<br />
                    </h4>
                    <h3>WEBSITE TEAM</h3>
                    <h4>
                        Mr Deeraj  S - +91 8088237969
                    </h4>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Helpdesk