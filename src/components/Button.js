import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, linkTo, onClick, style, placement }) => {
  const checkButtonStyle = style ? style : "";
  const checkPlacement = placement ? placement : "";

  return (
    <Link to={linkTo} className={checkPlacement}>
      <div className={`btn ${checkButtonStyle}`} onClick={onClick}>
        {children}
      </div>
    </Link>
  );
};

export default Button;
