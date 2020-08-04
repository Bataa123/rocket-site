import React from 'react';
// import { Link } from 'react-router-dom';
import './header.scss'

export const Header = () => {

    return (
        <div className="opacity">
            {/* <video autoPlay loop muted style={{position: 'absolute', width: '100vw', height: '100vh', objectFit: 'cover'}}>
                <source src={Video} type='video/mp4'></source>
            </video> */}
            <div className='logo'></div>
            <div className="firstLook">
                {/* <div style={{ textAlign: "center" }}>
                    <div className="linkButtons" onClick={() =>
                        document.getElementById('aboutUs').scrollIntoView({ behavior: "smooth" })
                    }>About Us</div>
                    <div className="linkButtons" onClick={() =>
                        document.getElementById('sponser').scrollIntoView({ behavior: "smooth" })
                    }>Sponser</div>
                    <div className="linkButtons" onClick={() =>
                        document.getElementById('donation').scrollIntoView({ behavior: "smooth" })
                    }>Donate</div>
                    <div className="linkButtons" onClick={() =>
                        document.getElementById('contact').scrollIntoView({ behavior: "smooth" })
                    }>Contact Us</div>
                    <Link className="linkButtons" to="/ourTeam">Our Team</Link>
                </div> */}
                <div className='firstRectangle'>20000M Above the <br /> Gobi desert</div>
            </div>
        </div>
    )
}

