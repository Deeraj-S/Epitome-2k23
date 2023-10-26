import React, { Component } from "react"
import '../styles/NavbarStyles.css'
import logo from '../images/logo.png'

class Navsign extends Component {
    render() {
        return (
            <>
                <nav>
                    <a href="/signin">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                </nav >
            </>
        )
    }
}

export default Navsign