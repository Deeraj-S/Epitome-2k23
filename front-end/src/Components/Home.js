import React from "react"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"
import '../styles/Home.css'

function Home() {
    const navigate = useNavigate();
    navigate("/")
    return (
        <>
            <Navbar />
            <div className="bg"></div>

        </>
    )
}

export default Home