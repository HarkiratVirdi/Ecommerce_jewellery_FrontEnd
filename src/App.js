import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.js";
import Loading from "./components/Loading";
import Home from "./scenes/Home/Home";
import Shop from "./scenes/Shop/Shop";
import Login from "./scenes/Login/Login";
import Checkout from "./scenes/Checkout/Checkout";
import Logout from "./scenes/Logout/Logout";
import ItemPage from "./components/ItemPage.js";
import { Switch, Route, useLocation } from "react-router-dom";
import "./sass/main.scss";

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
            <Route path="/logout" exact component={Logout}></Route>
            <Route path="/checkout" exact component={Checkout}></Route>
            <Route exact path="/products/:id" component={ItemPage}></Route>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
