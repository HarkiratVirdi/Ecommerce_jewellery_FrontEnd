import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../images/tira_logo.png";
import Cart from "./Cart";
import Menu from "./Menu";
import { AnimatePresence } from "framer-motion";

const Nav = () => {
  const [click, setclick] = useState(false);
  const [CartDisplay, setCartDisplay] = useState(false);
  const [scroll, setscroll] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };

  useEffect(() => {
    const openMenu = () => {};

    openMenu();

    window.addEventListener("scroll", () => {
      if (window.scrollY >= 30) {
        setscroll(true);
      } else {
        setscroll(false);
      }
    });
  }, [handleClick]);

  return (
    <nav className="navbar">
      <Menu click={click} handleClick={handleClick} />
      <ul className="navbar__list">
        <li className={`navbar__item d-block ${scroll ? "s-show" : "s-show"}`}>
          <button
            onClick={handleClick}
            className={`navbar__icon ${scroll ? "s-show" : "s-show"}`}
          >
            <span></span>
            <span></span>
          </button>
        </li>

        <li className={`navbar__item ${scroll ? "s-hide" : "s-show"}`}>
          <NavLink className="navbar__link" to="/shop">
            Shop
          </NavLink>
        </li>

        <li className={`navbar__item ${scroll ? "s-hide" : "s-show"}`}>
          <Link className="navbar__link" to="/about">
            About
          </Link>
        </li>
      </ul>

      <Link to="/" className={`navbar__logo ${scroll ? "s-hide" : "s-show"}`}>
        <img src={Logo} alt="" />
      </Link>

      <ul className="navbar__list--2">
        <li className={`navbar__item ${scroll ? "s-hide" : "s-show"}`}>
          <Link className="navbar__link" to="/contact">
            Contact
          </Link>
        </li>

        <li className={`navbar__item ${scroll ? "s-hide" : "s-show"}`}>
          <Link className="navbar__link" to="/login">
            Login
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
