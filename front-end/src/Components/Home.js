import React from "react"
import Navbar from "./Navbar"
import { useNavigate } from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    navigate("/")
    return (
        <>
            <Navbar />


            <div className="bg"></div>

            <div>djdddjdjjjjjjjjj</div>
        </>
    )
}

export default Home