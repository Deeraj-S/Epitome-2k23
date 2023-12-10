import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Cookies from 'js-cookie';
import Navbar from "./Navbar"
import '../styles/Helpdesk.css'
import Footer from './Footer';


function Helpdesk() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = Cookies.get('TOKEN');
        if (!token) {
            navigate('/signin')
        }
    }, [navigate])
    return (
        <>
            <Navbar />
            <div className='helpdesk-body'>
                <div className='helpdesk-box'>
                    <h2>For any queries contact</h2>
                    <h3>STAFF COORDINATORS</h3>
                    <h4>
                        Mr Roshan Suvaris - +91 966348843443 <i class="fa-solid fa-phone-flip"></i><br /><br />
                        Dr Jeevan Pinto - +91 9448952025 <i class="fa-solid fa-phone-flip"></i><br />
                    </h4>
                    <h3>STUDENT COORDINATORS</h3>
                    <h4>
                        Ms Anvitha - +91 7892772583 <i class="fa-solid fa-phone-flip"></i><br /><br />
                        Ms Manasi  G - +91 8277050760 <i class="fa-solid fa-phone-flip"></i><br />
                    </h4>
                    <h3>WEBSITE TEAM</h3>
                    <h4>
                        Mr Deeraj  S - +91 8088237969 <i class="fa-solid fa-phone-flip"></i>
                    </h4>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Helpdesk