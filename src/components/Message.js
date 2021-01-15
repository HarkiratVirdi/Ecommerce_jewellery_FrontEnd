import React from "react";

const Message = ({ children }) => {
  return (
    <div
      style={{ background: "#e7b07c", padding: "1rem" }}
      className="heading-4 heading-4--white"
    >
      {children}
    </div>
  );
};

export default Message;
