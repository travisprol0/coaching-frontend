import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="enter-acting">
        <NavLink className="enter-acting-button" to="/actor">
          {" "}
          Enter Acting Site
        </NavLink>
      </div>
      <div className="enter-coaching">
        <NavLink className="enter-coaching-button" to="/coach">
          {" "}
          Enter Coaching Site
        </NavLink>
      </div>
    </>
  );
};

export default Home;
