import React from "react";
import { NavLink } from "react-router-dom"
import "../../css/web/Wellness.css";
import "../../css/mobile/WellnessMobile.css"

const Wellness = (props) => {
  return (
  <>
  <h1>Wellness</h1>
  <NavLink className="motivation-button" to="/motivation">
      <p>Motivation <i class="arrow right"></i></p>
      </NavLink>
      <NavLink className="back-to-nutrition-button" to="/nutrition">
        <p><i class="arrow left"></i>Nutrition </p>
      </NavLink>
  </>
    )
};

export default Wellness;
