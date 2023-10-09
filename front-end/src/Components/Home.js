import React from "react"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
import '../styles/Home.css'
import image from '../img2.png'


function Home() {
    const navigate = useNavigate();
    navigate("/")
    return (
        <>
            <Navbar />
            <div className="bg-image"></div>
            <div className="logo-image"><div className="logo-holder"><img src={image} alt="logo" className="img-logo" /></div></div>
            <div>
                <h1>EVENT POSTERS</h1>
                <div className="event-box">
                    <div className="box1"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                    <div className="box1"></div>
                </div>
            </div>
        </>
    )
}

export default Home