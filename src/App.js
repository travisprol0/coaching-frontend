import "./css/App.css"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Recipes from "./components/Recipes"

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/contact-me" component={Contact} />
          <Route exact path="/recipes" component={Recipes} />
        </Router>
      </div>
    )
  }
}

export default App
