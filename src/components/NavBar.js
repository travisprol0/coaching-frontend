import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/NavBar.css";

const NavBar = () => {
    return (
        <div className="main-div">

                    <NavLink className="contact-me-nav" to="/contact"> Contact Me! </NavLink>
                    <NavLink className="info-nav"to="/info"> Info </NavLink>
                    <NavLink className="home-nav"to="/"> Home </NavLink>
        </div>
    )
}

export default NavBar