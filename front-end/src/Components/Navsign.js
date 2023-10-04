import React, { Component } from "react"
import '../styles/NavbarStyles.css'
import logo from '../images/logo.png'

class Navsign extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>
                    <a href="/">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                </nav >
            </>
        )
    }
}

export default Navsign