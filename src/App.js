import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home";
import Info from "./components/Info"
import Contact from "./components/Contact"
import Recipes from "./components/Recipes"

class App extends React.Component {

  state = {
    path: "/"
  }

  pathfinder = (path) => {
    return path
  }

 
  render() {
    return (
      <div>
        <Router>
          <Route  path="/" component={NavBar} />
          <Route exact path="/" component={Home} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/recipes" component={Recipes} />
        </Router>
        
      </div>
    );
  }
}

export default App;
