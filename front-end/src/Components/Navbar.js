import React, { Component } from "react"
import './NavbarStyles.css'


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>
                    <a href="/">
                        {/*  <img src={logo} alt="logo" className="logo" />*/}
                    </a>
                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about" >General rules</a></li>
                            <li><a href="/">Registration</a></li>
                            <li><a href="/">Events</a></li>
                            <li><a href="/">Schedule</a></li>
                            <li><a href="/">Help desk</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav >
            </>
        )
    }
}

export default Navbar