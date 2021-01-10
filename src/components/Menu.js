import React from "react";
import { Link } from "react-router-dom";
import blackGirl from "../images/BlackGirl_Comp.jpg";
import image2 from "../images/joeyy_lee_7tdqxrc8hh_TjQPx.jpg";
import image3 from "../images/joeyy_lee_qzftqhqn7y_X40qL.jpg";
import image4 from "../images/joeyy_lee_c2chydc76h_JIZjc.jpg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__image m-hide">
        <img src={blackGirl} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>

      <div className="menu__content">
        <div className="menu__close">X</div>
        <ul className="menu__list">
          <li className="heading-3">
            <Link to="/">Home</Link>
          </li>
          <li className="heading-3">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="heading-3">
            <Link to="/about">About</Link>
          </li>
          <li className="heading-3">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
