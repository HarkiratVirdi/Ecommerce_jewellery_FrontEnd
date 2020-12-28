import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, linkTo, onClick, style, placement }) => {
  const checkButtonStyle = style ? style : "";
  const checkPlacement = placement ? placement : "";

  return (
    <Link to={linkTo} className={checkPlacement}>
      <button className={`btn ${checkButtonStyle}`} onClick={onClick}>
        <label htmlFor="btn">{children}</label>
      </button>
    </Link>
  );
};

export default Button;
