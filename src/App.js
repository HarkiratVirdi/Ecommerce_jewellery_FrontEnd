import React, { useEffect, useState } from "react";
import Nav from "./components/Nav.js";
import Loading from "./components/Loading";
import Home from "./scenes/Home/Home";
import Shop from "./scenes/Shop/Shop";
import {
  HashRouter,
  Switch,
  Route,
  useLocation,
  withRouter,
  useHistory,
} from "react-router-dom";
import "./sass/main.scss";
import { AnimatePresence } from "framer-motion";
import ItemPage from "./components/ItemPage.js";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3700);
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid-container">
          <Nav />
          {/* <AnimatePresence> */}
          <Switch location={location} key={location.pathname}>
            <Route exact component={Home} path="/"></Route>
            <Route path="/shop" exact component={Shop}></Route>
            <Route exact path="/products/:id" component={ItemPage}></Route>
          </Switch>
          {/* </AnimatePresence> */}
        </div>
      )}
    </>
  );
}

export default App;
