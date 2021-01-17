import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  disable,
  children,
  linkTo,
  type,
  onClick,
  styling,
  placement,
}) => {
  const checkButtonStyle = styling ? styling : "";
  const checkType = type ? type : "";
  const checkDisable = disable ? disable : "false";
  const checkPlacement = placement ? placement : "";

  return (
    <Link to={linkTo} className={checkPlacement}>
      <button
        disabled={disable}
        type={checkType}
        className={`btn ${checkButtonStyle}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
