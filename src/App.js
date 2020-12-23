import React from "react";
import Nav from "./components/Nav.js";
import Hero from "./components/pages/Hero";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/main.scss";

function App() {
  return (
    <Router>
      <div className="grid-container">
        <Nav />
        <Hero />
      </div>
    </Router>
  );
}

export default App;
