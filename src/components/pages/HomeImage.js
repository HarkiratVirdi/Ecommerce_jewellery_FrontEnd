import React from "react";
import ImageFull from "../../images/joeyy_lee_c2chydc76h_JIZjc.jpg";

const HomeImage = () => {
  return (
    <div className="Home_image">
      <div className="Home_image_img">
        <img src={ImageFull} alt="" />
      </div>
      <div className="Home_image_content">
        <div className="Home_image_content_heading heading-1">
          Jewellery That Excites You
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
