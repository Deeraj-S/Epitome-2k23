import React, { Component } from "react"
import logo from '../images/logo.png'
import '../styles/NavbarStyles.css'

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    componentDidMount() {
        document.body.addEventListener('click', this.handleBodyClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleBodyClick);
    }

    handleBodyClick = (event) => {
        const navbar = document.getElementById('navbar');
        const mobileIcon = document.getElementById('mobile');


        if (navbar && !navbar.contains(event.target) && !mobileIcon.contains(event.target)) {
            this.setState({ clicked: false });
            if (this.props.onToggleVisibility) {
                this.props.onToggleVisibility(false);
            }
        }
    };

    render() {
        return (

            <><div>
                <nav>
                    <a href="/">
                        <img src={logo} alt="logo" className="logo" />
                    </a>
                    <div className="content" id="content">
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/About" >General rules</a></li>
                            <li><a href="/Registration">Registration</a></li>
                            <li ><a href="/Events" >Events</a></li>
                            <li><a href="/Schedule">Schedule</a></li>
                            <li><a href="/Help-Desk">Help desk</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i onClick={this.props.onToggleVisibility} id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav >
            </div>
            </>
        )
    }
}

export default Navbar