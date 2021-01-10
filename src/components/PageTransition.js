import React from "react";

const blackScreen = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
  },
};

const InitialTransition = () => {
  return (
    <div className="initialTransition">
      <div
        className="initialTransition__container"
        initial="initial"
        animate="animate"
        variants={blackScreen}
      ></div>
    </div>
  );
};

export default InitialTransition;
