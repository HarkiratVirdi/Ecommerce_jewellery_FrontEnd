import React from "react";
import { Link } from "react-router-dom";

const HeadingHover = ({ children }) => {
  return (
    <div className="heading_hover">
      <div className="heading-3 heading-3--stroke-gold">
        <Link href="/shop">{children}</Link>
      </div>
    </div>
  );
};

export default HeadingHover;
