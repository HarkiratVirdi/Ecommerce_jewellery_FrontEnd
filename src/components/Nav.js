import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/tira_logo.png";
import Cart from "./Cart";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

const Nav = () => {
  const [click, setclick] = useState(false);
  const [CartDisplay, setCartDisplay] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };

  useEffect(() => {
    const openMenu = () => {};

    openMenu();
  }, [handleClick]);

  return (
    <nav className="navbar">
      <Menu />
      <ul className={click ? "navbar__menu" : "navbar__menu--hidden"}>
        <button onClick={handleClick} className="navbar__icon">
          <span></span>
          <span></span>
        </button>

        <li className="navbar__item">
          <NavLink className="navbar__link" to="/shop">
            Shop
          </NavLink>
        </li>

        <li className="navbar__item">
          <Link className="navbar__link" to="/about">
            About
          </Link>
        </li>

        <li className="navbar__item">
          <Link className="navbar__link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <Link to="/" className="navbar__logo">
        <img src={Logo} alt="" />
      </Link>

      <ul className={click ? "navbar__menu" : "navbar__menu--hidden"}>
        <li className="navbar__item">
          <Link className="navbar__link" to="/fr">
            FR
          </Link>
        </li>

        <li className="navbar__item">
          <Link className="navbar__link" to="/login">
            Login/Register
          </Link>
        </li>

        <li className="navbar__item cart__link">
          <Link
            onClick={() => {
              setCartDisplay((prev) => !prev);
            }}
            className="navbar__link"
          >
            Cart
          </Link>
        </li>
      </ul>
      <Cart CartDisplay={CartDisplay} setCartDisplay={setCartDisplay} />
    </nav>
  );
};

export default Nav;
