import React, { Component } from "react"
import '../styles/NavbarStyles.css'
import logo from '../images/logo.png'

class Navsign extends Component {

    render() {
        return (
            <>
                <nav>
                    <img src={logo} alt="logo" className="logo" />
                </nav >
            </>
        )
    }
}

export default Navsign