import React from "react"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    navigate("/")
    return (
        <>
            <Navbar />
            <div className="back"></div>
        </>
    )
}

export default Home