import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import "../../css/web/Navigation.css";

class CoachNavigation extends React.Component {
  render() {
    return (
      <div className="navbar-div">
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="lg"
          //   bg="dark"
          variant="dark"
          className="navbar"
        >
          <ReactBootStrap.Navbar.Brand href="/">
            Christiana Alicante
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            
            <ReactBootStrap.Nav className="mr-auto"></ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href="/coach">
                Home
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="/coach/about-me">
                About Me
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={2} href="/coach/fitness">
                Fitness
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={3} href="/coach/nutrition">
                Nutrition
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={4} href="/coach/wellness">
                Wellness
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={5} href="/coach/motivation">
                Motivation
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={6} href="/coach/contact-me">
                Contact Me
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}

export default CoachNavigation;
