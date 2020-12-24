import React from "react";
import { NavLink } from "react-router-dom"
import "../../css/web/Motivation.css";
import "../../css/mobile/MotivationMobile.css"

const Motivation = (props) => {
  return (
  <>
  <h1>Motivation</h1>
  <NavLink className="contact-button" to="/contact-me">
      <p>Contact Me <i class="arrow right"></i></p>
      </NavLink>
      <NavLink className="back-to-wellness-button" to="/wellness">
        <p><i class="arrow left"></i>Wellness </p>
      </NavLink>
  </>
    )
};

export default Motivation;
