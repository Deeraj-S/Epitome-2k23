import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import Navbar from "./Navbar"
import '../styles/ScheduleForms.css'
import Footer from './Footer';

function Schedule() {
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
            <div className="schedule-body">
                <div className='schedule-box'>
                    <h2>Schedule</h2>
                    <div className="schedule-iframe">
                        <iframe src="https://drive.google.com/file/d/17fwKuY3vwD4pHBxS_JCevWFybV-3URcB/preview" width="500" height="500" allow="autoplay" title='shedule'></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Schedule
