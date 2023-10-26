import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import Navbar from "./Navbar"
import '../styles/ScheduleForms.css'

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
                        <iframe src="https://drive.google.com/file/d/17jhcpILKnziQjAN7yVodYHnOIMD5d10K/preview" allow="autoplay" width="500px" height="500px" title='Schedule'>
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schedule
