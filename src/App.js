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
import PlaceOrder from "./scenes/PlaceOrder/PlaceOrder.js";
import Contact from "./scenes/Contact/Contact";
import About from "./scenes/About/About.js";
import OrderScreen from "./scenes/OrderScreen/OrderScreen";
import Register from "./scenes/Register/Register.js";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3350);
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
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/placeorder" exact component={PlaceOrder}></Route>
            <Route path="/register" component={Register} exact />

            <Route path="/order/:id" exact component={OrderScreen}></Route>
            <Route exact path="/products/:id" component={ItemPage}></Route>
          </Switch>
        </div>
      )}
    </>
  );
}

export default App;
