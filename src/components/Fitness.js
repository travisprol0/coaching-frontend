import React from "react";
import { NavLink } from "react-router-dom"
import "../css/web/Fitness.css";
import "../css/mobile/FitnessMobile.css"

const Fitness = (props) => {
  return (
  <>
  <h1>Fitness</h1>
  <NavLink className="nutrition-button" to="/nutrition">
      <p>Nutrition <i class="arrow right"></i></p>
      </NavLink>
      <NavLink className="back-to-about-me-button" to="/about-me">
        <p><i class="arrow left"></i>About Me </p>
      </NavLink>
  </>
    )
};

export default Fitness;
