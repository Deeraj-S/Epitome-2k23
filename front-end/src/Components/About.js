import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from "./Navbar"
import '../styles/About.css'


function About() {
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
                    <p>GENERAL RULES</p>
                    <h4>
                        * The team must consist maximum of 15 member.<br /> * The registration fee will be 1500/- per team.<br /> * Only one team from one department.<br /> * College ID and permission letter from
                        Principal/HOD for each team is mandatory.<br />*  Accommodation will be arranged only on prior information for outstation colleges.<br /> * All events are considered for overall.
                        <br />* Participation points are considered.<br />* Judge’s decision will be final. <br/> *Participants involved in Time Wrap, Mind Mines, IT Pharaoh, and Flash Forward are prohibited from participating in any other event.
                    </h4>
                </div>
            </div>
        </>
    )
}
export default About