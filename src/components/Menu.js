import React, { useState } from "react";
import { Link } from "react-router-dom";
import blackGirl from "../images/BlackGirl_Comp.jpg";
import { useSelector, useDispatch } from "react-redux";
import image2 from "../images/joeyy_lee_7tdqxrc8hh_TjQPx.jpg";
import image3 from "../images/joeyy_lee_qzftqhqn7y_X40qL.jpg";
import image4 from "../images/joeyy_lee_c2chydc76h_JIZjc.jpg";

const Menu = ({ click, handleClick }) => {
  const [image, setimage] = useState(1);
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const onMouseOver = (index) => {
    console.log(index);
  };

  return (
    <div className={`menu ${click ? "open" : "close"}`}>
      <div className={`menu__image m-hide ${click ? "open" : "close"}`}>
        <img src={blackGirl} alt="" />
        {/* <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" /> */}
      </div>

      <div className={`menu__content ${click ? "open" : "close"}`}>
        <div className="menu__close" onClick={handleClick}>
          X
        </div>
        <ul className="menu__list">
          <li className="heading-3 menu__link">
            <Link onClick={handleClick} to="/">
              Home
            </Link>
          </li>
          <li className="heading-3 menu__link">
            <Link onClick={handleClick} to="/shop">
              Shop
            </Link>
          </li>
          <li className="heading-3 menu__link">
            <Link onClick={handleClick} to="/about">
              About
            </Link>
          </li>
          <li className="heading-3 menu__link">
            <Link onClick={handleClick} to={userInfo ? "/logout" : "/login"}>
              {userInfo ? `Logout (${userInfo.name.split(" ")[0]})` : "Login"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
