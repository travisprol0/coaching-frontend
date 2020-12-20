import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Fitness from "./components/Fitness";
import Nutrition from "./components/Nutrition";
import Wellness from "./components/Wellness";
import Motivation from "./components/Motivation";
import Contact from "./components/Contact";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/fitness" component={Fitness} />
          <Route exact path="/nutrition" component={Nutrition} />
          <Route exact path="/wellness" component={Wellness} />
          <Route exact path="/motivation" component={Motivation} />
          <Route exact path="/contact-me" component={Contact} />
        </Router>
      </div>
    );
  }
}

export default App;
