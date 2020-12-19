import React from "react";
import { NavLink } from "react-router-dom";
import "../css/NavBar.css";

class NavBar extends React.Component {
  buttons = () => {
    if (this.props.location.pathname === "/contact") {
      return (
        <>
          <NavLink className="contact-me-nav-active" to="/contact">
            {" "}
            Contact Me!{" "}
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
            Contact Me!{" "}
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
                Contact Me!{" "}
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
    }
  };

  render() {
    return (
      <div className="main-div">
        {this.buttons()}
        {/* <NavLink className="contact-me-nav" to="/contact"> Contact Me! </NavLink>
                    <NavLink className="info-nav"to="/info"> Info </NavLink>
                    <NavLink className="home-nav"to="/"> Home </NavLink> */}
      </div>
    );
  }
}

export default NavBar;
