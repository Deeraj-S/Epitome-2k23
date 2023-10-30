import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../styles/About.css'
import bgvideo from '../animation/4.webm'

function About() {
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
            <div className='general-body'>
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
                <div className='general-box'>
                    <p>GENERAL RULES</p>
                    <h4>
                        * The team must consist maximum of 15 member.<br /> * The registration fee will be 1500/- per team.<br /> * Only one team from one College.<br /> * College ID and permission letter from
                        Principal/HOD for each team is mandatory.<br />*  Accommodation will be arranged only on prior information for outstation colleges.<br /> * All events are considered for overall.
                        <br />* Participation points are considered.<br />* Judge’s decision will be final. <br /> *Participants involved in Time Wrap, Mind Mines, IT Pharaoh, and Flash Forward are not allowed from participating in any other event.
                    </h4>
                </div>

            </div>
            <Footer />
        </>
    )
}
export default About