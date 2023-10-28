import React from "react"
import "../styles/Media.css"

function Media() {
    return (
        <>
            <div className="centerdiv">

                <div className="media-holder"><a href="https://instagram.com" target="blank"><i class="fa-brands fa-instagram"></i></a></div>
                <div className="media-holder"><a href="https://youtube.com" target="blank"><i class="fa-brands fa-youtube" ></i></a></div>
                <div className="media-holder"><a href="mailto:sdeeraj2000@gmail.com" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope"></i></a></div>
            </div>

        </>
    )
}

export default Media