import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info"

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" render={(props) => <Home />} />
          <Route exact path="/info" render={(props) => <Info />} />
        </Router>
        
      </div>
    );
  }
}

export default App;
