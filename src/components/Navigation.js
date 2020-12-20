import React from "react"
import * as ReactBootStrap from "react-bootstrap"
import "../css/web/Navigation.css";
// import "../css/mobile/HomeMobile.css"

class Navigation extends React.Component {
  render() {
    return (
      <>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="lg"
        //   bg="dark"
          variant="dark"
          className="navbar"
        >
          <ReactBootStrap.Navbar.Brand href="/">
            Home
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="#features">
                Features
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing">
                Pricing
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Dropdown"
                id="collasible-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">
                  Action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">
                  Another action
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">
                  Something
                </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">
                  Separated link
                </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href="/about-me">
                About Me
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={2} href="/fitness">
                Fitness
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={3} href="/nutrition">
                Nutrition
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={4} href="/wellness">
                Wellness
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={5} href="/motivation">
                Motivation
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link eventKey={6} href="/contact-me">
                Contact Me
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </>
    )
  }
}

export default Navigation
