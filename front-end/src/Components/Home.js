import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import image from '../img2.png'
import '../styles/Home.css'
import { useState, useEffect, useRef } from "react"

function Home() {
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(true);
    const [height, setHeight] = useState(0);
    const [isDivVisible, setIsDivVisible] = useState(true);
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
    const events = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        const token = localStorage.getItem('TOKEN')
        if (!token) {
            navigate('/signin')
        }
    })

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    })

    const listenToScroll = () => {
        let heightToHideFrom = 330;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        setHeight(winScroll);

        if (winScroll > heightToHideFrom) {
            isVisible && setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    return (
        <>
            <Navbar onToggleVisibility={() => setIsDivVisible(!isDivVisible)} />
            <div className="bg-image">
                {
                    isVisible
                    &&
                    isDivVisible
                    &&
                    <div className="bg-text">
                        <p>EPITOME</p>
                    </div>
                }
            </div>
            <div className="logo-image"><div className="logo-holder"><img src={image} alt="logo" className="img-logo" /></div></div>
            <div className="event-bg" ref={events}>
                <h1>EVENTS</h1>
                <div className="event-buttons">
                    <button onClick={() => scrollToSection(timeWrap)} className="btn1">TIME WRAP</button>
                    <button onClick={() => scrollToSection(mindMines)} className="btn1">MIND MINES</button>
                    <button onClick={() => scrollToSection(futureFlash)} className="btn1">FUTURE FLASH</button>
                    <button onClick={() => scrollToSection(turnTheTable)} className="btn1">TURN THE TABLE</button>
                    <button onClick={() => scrollToSection(chronoBeats)} className="btn1">CHRONOBEATS</button>
                    <button onClick={() => scrollToSection(setllar)} className="btn1">SETLLAR</button>
                    <button onClick={() => scrollToSection(conunDrum)} className="btn1">CONUNDRUM</button>
                    <button onClick={() => scrollToSection(itManager)} className="btn1">IT PHARAOH</button>
                    <button onClick={() => scrollToSection(flashForward)} className="btn1">FLASH FORWARD</button>
                    <button onClick={() => scrollToSection(dumbCharades)} className="btn1">DUMB CHARADES</button>
                    <button onClick={() => scrollToSection(games)} className="btn1">WARLOADS</button>
                    <button onClick={() => scrollToSection(paradox)} className="btn1">PARADOX</button>
                </div>
                <h1>EVENT POSTERS</h1>
                <div className="event-box">
                    <Link to={'/event-rules/timeWrap'}><div ref={timeWrap} className="box1"></div></Link>
                    <Link to={'/event-rules/mindMines'}><div ref={mindMines} className="box2"></div></Link>
                    <Link to={'/event-rules/futureFlash'}><div ref={futureFlash} className="box3"></div></Link>
                    <Link to={'/event-rules/turnTheTable'}><div ref={turnTheTable} className="box4"></div></Link>
                    <Link to={'/event-rules/chronoBeats'}><div ref={chronoBeats} className="box5"></div></Link>
                    <Link to={'/event-rules/stellar'}><div ref={setllar} className="box6"></div></Link>
                    <Link to={'/event-rules/conunDrum'}><div ref={conunDrum} className="box7"></div></Link>
                    <Link to={'/event-rules/itManager'}><div ref={itManager} className="box8"></div></Link>
                    <Link to={'/event-rules/flashForward'}><div ref={flashForward} className="box9"></div></Link>
                    <Link to={'/event-rules/dumCharades'}><div ref={dumbCharades} className="box10"></div></Link>
                    <Link to={'/event-rules/games'}><div ref={games} className="box11"></div></Link>
                    <Link to={'/event-rules/paradox'}><div ref={paradox} className="box12"></div></Link>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home