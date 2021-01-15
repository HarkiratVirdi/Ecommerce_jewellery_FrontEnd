import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.js";
import Loading from "./components/Loading";
import Home from "./scenes/Home/Home";
import Shop from "./scenes/Shop/Shop";
import Login from "./scenes/Login/Login";
import {
  HashRouter,
  Switch,
  Route,
  useLocation,
  withRouter,
  useHistory,
} from "react-router-dom";
import "./sass/main.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ItemPage from "./components/ItemPage.js";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3750);
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid-container">
          <Nav />

          <Switch location={location} key={location.pathname}>
            <Route exact component={Home} path="/"></Route>
            <Route path="/shop" exact component={Shop}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route exact path="/products/:id" component={ItemPage}></Route>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
