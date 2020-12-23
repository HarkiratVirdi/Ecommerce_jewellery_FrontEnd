import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => {
    setclick(!click);
  };

  return (
    <nav className="navbar">
      <ul className={click ? "navbar__menu" : "navbar__menu--hidden"}>
        <div className="navbar__icon">
          <div
            className={click ? "navbar__icon__cross" : "navbar__icon__menu"}
          ></div>
        </div>
        <li className="navbar__item">
          <Link className="navbar__link" to="/">
            Home
          </Link>
        </li>

        <li className="navbar__item">
          <Link className="navbar__link" to="/shop">
            Shop
          </Link>
        </li>

        <li className="navbar__item">
          <Link className="navbar__link" to="/about">
            About
          </Link>
        </li>
      </ul>

      <Link to="/" className="navbar__logo">
        TIRA
      </Link>

      <ul className={click ? "navbar__menu" : "navbar__menu--hidden"}>
        <li className="navbar__item">
          <Link className="navbar__link" to="/contact">
            Contact
          </Link>
        </li>

        <li className="navbar__item">
          <Link className="navbar__link" to="/fr">
            FR
          </Link>
        </li>

        <li className="navbar__item cart__link">
          <Link className="navbar__link ">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
