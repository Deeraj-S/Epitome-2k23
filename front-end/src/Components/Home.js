import React from "react"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import image from '../img2.png'
import '../styles/Home.css'


function Home() {
    const timeWrap = useRef(null);
    const mindMines = useRef(null);
    const futureFlash = useRef(null);
    const turnTheTable = useRef(null);
    const chronoBeats = useRef(null);
    const setllar = useRef(null);
    const conunDrum = useRef(null);
    const itManager = useRef(null);
    const flashForward = useRef(null);
    const dumbCharades = useRef(null);
    const games = useRef(null);
    const paradox = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    }

    const navigate = useNavigate();
    navigate("/")





    return (
        <>
            <Navbar />
            <div className="bg-image">
                <div className="bg-text">
                    <p>EPITOME</p>
                </div>

            </div>
            <div className="logo-image"><div className="logo-holder"><img src={image} alt="logo" className="img-logo" /></div></div>
            <div className="event-bg">
                <h1>EVENTS</h1>
                <div className="event-buttons">
                    <button onClick={() => scrollToSection(timeWrap)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(mindMines)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(futureFlash)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(turnTheTable)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(chronoBeats)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(setllar)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(conunDrum)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(itManager)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(flashForward)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(dumbCharades)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(games)} className="btn1">Hello</button>
                    <button onClick={() => scrollToSection(paradox)} className="btn1">Hello</button>
                </div>
                <h1>EVENT POSTERS</h1>
                <div className="event-box">
                    <div ref={timeWrap} className="box1"></div>
                    <div ref={mindMines} className="box2"></div>
                    <div ref={futureFlash} className="box3"></div>
                    <div ref={turnTheTable} className="box4"></div>
                    <div ref={chronoBeats} className="box5"></div>
                    <div ref={setllar} className="box6"></div>
                    <div ref={conunDrum} className="box7"></div>
                    <div ref={itManager} className="box8"></div>
                    <div ref={flashForward} className="box9"></div>
                    <div ref={dumbCharades} className="box10"></div>
                    <div ref={games} className="box11"></div>
                    <div ref={paradox} className="box12"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home