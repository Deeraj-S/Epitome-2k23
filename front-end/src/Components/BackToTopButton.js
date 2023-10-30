import React from "react"
import { useEffect, useState } from "react"
import '../styles/BackToTop.css'

function BackToTopButton() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTopButton && (
                <button className="top-scroll" onClick={scrollUp}><i class="fa-solid fa-angle-up"></i></button>
            )}
        </>
    )
}

export default BackToTopButton