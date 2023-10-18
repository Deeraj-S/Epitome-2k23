import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import '../styles/ScheduleForms.css'

function Schedule() {

    return (
        <div className="schedule-body">
            <div className="schedule-box">
                <h2>Schedule</h2>
                <div className="schedule-iframe">
                    <iframe src="https://drive.google.com/file/d/17jhcpILKnziQjAN7yVodYHnOIMD5d10K/preview" allow="autoplay"></iframe>

                </div>
            </div>
        </div>
    )
}

export default Schedule
