 import React from "react";
import { NavLink } from "react-router-dom";
import "../css/web/NavBar.css";
import "../css/mobile/NavBarMobile.css";

class NavBar extends React.Component {
  buttons = () => {
    if (this.props.location.pathname === "/contact") {
      return (
        <>
          <NavLink className="contact-me-nav-active" to="/contact">
            {" "}
            Contact{" "}
          </NavLink>
          <NavLink className="recipes-nav" to="/recipes">
                {" "}
                Recipes{" "}
              </NavLink>
          <NavLink className="info-nav" to="/info">
            {" "}
            Info{" "}
          </NavLink>
          <NavLink className="home-nav" to="/">
            {" "}
            Home{" "}
          </NavLink>
        </>
      );
    } else if (this.props.location.pathname === "/info") {
      return (
        <>
          <NavLink className="contact-me-nav" to="/contact">
            {" "}
            Contact{" "}
          </NavLink>
          <NavLink className="recipes-nav" to="/recipes">
                {" "}
                Recipes{" "}
              </NavLink>
          <NavLink className="info-nav-active" to="/info">
            {" "}
            Info{" "}
          </NavLink>
          <NavLink className="home-nav" to="/">
            {" "}
            Home{" "}
          </NavLink>
        </>
      );
    } else if (this.props.location.pathname === "/") {
        return (
            <>
              <NavLink className="contact-me-nav" to="/contact">
                {" "}
                Contact{" "}
              </NavLink>
              <NavLink className="recipes-nav" to="/recipes">
                {" "}
                Recipes{" "}
              </NavLink>
              <NavLink className="info-nav" to="/info">
                {" "}
                Info{" "}
              </NavLink>
              <NavLink className="home-nav-active" to="/">
                {" "}
                Home{" "}
              </NavLink>
            </>
          );
    } else if (this.props.location.pathname === "/recipes") {
        return (
            <>
              <NavLink className="contact-me-nav" to="/contact">
                {" "}
                Contact{" "}
              </NavLink>
              <NavLink className="recipes-nav-active" to="/recipes">
                {" "}
                Recipes{" "}
              </NavLink>
              <NavLink className="info-nav" to="/info">
                {" "}
                Info{" "}
              </NavLink>
              <NavLink className="home-nav" to="/">
                {" "}
                Home{" "}
              </NavLink>
            </>
          );
    }
  };

  render() {
    return (
      <div className="main-div">
        {this.buttons()}
      </div>
    );
  }
}

export default NavBar;
