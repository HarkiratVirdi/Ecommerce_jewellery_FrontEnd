import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.js";
import Loading from "./components/Loading";
import Home from "./scenes/Home/Home";
import Shop from "./scenes/Shop/Shop";
import Login from "./scenes/Login/Login";
import Shipping from "./scenes/Shipping/Shipping";
import Logout from "./scenes/Logout/Logout";
import ItemPage from "./components/ItemPage.js";
import { Switch, Route, useLocation } from "react-router-dom";
import "./sass/main.scss";
import Payment from "./scenes/Payment/Payment.js";

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
            <Route path="/shipping" exact component={Shipping}></Route>
            <Route path="/payment" exact component={Payment}></Route>
            <Route exact path="/products/:id" component={ItemPage}></Route>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
