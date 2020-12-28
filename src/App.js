import React from "react";
import Nav from "./components/Nav.js";
import Home from "./components/pages/Home";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/main.scss";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Nav />
        <Home />
      </div>
    </Router>
  );
}

export default App;
