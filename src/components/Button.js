import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, linkTo, onClick, style, placement }) => {
  const checkButtonStyle = style ? style : "";
  const checkPlacement = placement ? placement : "";

  return (
    <Link to={linkTo} className={checkPlacement}>
      <button className={`btn ${checkButtonStyle}`} onClick={onClick}>
        {children}
      </button>
    </Link>
  );
};

export default Button;
