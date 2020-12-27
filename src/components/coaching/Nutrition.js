import React from "react"
import { NavLink } from "react-router-dom"
import "../../css/web/Nutrition.css"
import "../../css/mobile/NutritionMobile.css"

const Nutrition = (props) => {
  return (
    <>
      <h1>Nutrition</h1>
      <NavLink className="wellness-button" to="/coach/wellness">
        <p>
          Wellness <i class="arrow right"></i>
        </p>
      </NavLink>
      <NavLink className="back-to-fitness-button" to="/coach/fitness">
        <p>
          <i class="arrow left"></i>Fitness{" "}
        </p>
      </NavLink>
    </>
  )
}

export default Nutrition
