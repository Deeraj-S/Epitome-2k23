import React from "react"
import '../styles/GoToEvent.css'
import { useNavigate } from "react-router-dom"
function GoToEventButton() {
    const navigate = useNavigate('')

    const goToEvent = () => {
        navigate('/Events')

    }
    return (
        <>
            <button className="goto-event" onClick={goToEvent}><i className="fa-solid fa-arrow-left"></i></button>

        </>
    )
}

export default GoToEventButton