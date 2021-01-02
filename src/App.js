import React from "react";
import Nav from "./components/Nav.js";
import Loading from "./components/Loading";
import Home from "./components/pages/Home";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./sass/main.scss";

function App() {
  return (
    <HashRouter>
      <Loading />
      <div className="grid-container">
        <Nav />
        <Home />
      </div>
    </HashRouter>
  );
}

export default App;
