import "./css/App.css"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/Home"
import CoachNavigation from "./components/coaching/CoachNavigation"
import CoachingHome from "./components/coaching/CoachingHome"
import AboutMe from "./components/coaching/AboutMe"
import Fitness from "./components/coaching/Fitness"
import Nutrition from "./components/coaching/Nutrition"
import Wellness from "./components/coaching/Wellness"
import Motivation from "./components/coaching/Motivation"
import Contact from "./components/coaching/Contact"
import ActingHome from "./components/acting/ActingHome"

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/coach" component={CoachNavigation} />
          <Route exact path="/coach" component={CoachingHome} />
          <Route exact path="/coach/about-me" component={AboutMe} />
          <Route exact path="/coach/fitness" component={Fitness} />
          <Route exact path="/coach/nutrition" component={Nutrition} />
          <Route exact path="/coach/wellness" component={Wellness} />
          <Route exact path="/coach/motivation" component={Motivation} />
          <Route exact path="/coach/contact-me" component={Contact} />
          <Route exact path="/actor" component={ActingHome} />
        </Router>
      </div>
    )
  }
}

export default App
