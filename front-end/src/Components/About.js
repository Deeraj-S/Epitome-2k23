import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../styles/About.css'

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
                <div className='general-box'>
                    <p>GENERAL RULES</p>
                    <h4>
                        * The event will be held on 16th and 17th of November 2023.<br /><br />
                        * The team must consist maximum of 15 members.<br /><br /> * The registration fee will be 1500/- per team.<br /><br /> * Only one team from one department.<br /><br /> * College ID and permission letter from
                        Principal/HOD for each team is mandatory.<br /><br />*  Accommodation will be arranged only on prior information for outstation colleges.<br /><br /> * All events are considered for overall.
                        <br /><br />* Participation points are considered.<br /><br />* Judge’s decision will be final.</h4><h4 className="highlight" style={{ color: '#f86a6a', marginTop: '-0.8rem' }}>* Participants involved in Time Warp, Mind Mines, IT Pharaoh, Flash Forward and Conundrum are not allowed from participating in any other event.</h4>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default About