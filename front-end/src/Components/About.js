import React from 'react'
import Navbar from "./Navbar"
import '../styles/About.css'

function About() {
    return (
        <>
            <Navbar />
            <div className='general-body'>
                <div className='general-box'>
                    <p>GENERAL RULES</p>
                    <h4>
                        * The team must consist maximum of 15 member.<br /> * The registration fee will be 1500/- per team.<br /> * Only one team from one department.<br /> * College ID and permission letter from
                        Principal/HOD for each team is mandatory.<br />*  Accommodation will be arranged only on prior information for outstation colleges.<br /> * All events are considered for overall.
                        <br />* Participation points are considered.<br />* Judge’s decision will be final
                    </h4>
                </div>
            </div>
        </>
    )
}
export default About