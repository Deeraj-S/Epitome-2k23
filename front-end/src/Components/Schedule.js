import '../styles/ScheduleForms.css'
import Footer from './Footer'
import Navbar from "./Navbar"

function Schedule() {

    return (
        <>
            <Navbar />
            <div className="schedule-body">
                <div className='schedule-box'>
                    <h2>Schedule</h2>
                    <div className="schedule-iframe">
                        <iframe src="https://drive.google.com/file/d/17jhcpILKnziQjAN7yVodYHnOIMD5d10K/preview" allow="autoplay" width="500px" height="500px" >
                        </iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Schedule
