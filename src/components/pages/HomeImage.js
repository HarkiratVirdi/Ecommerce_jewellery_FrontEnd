import React from "react";
import ImageFull from "../../images/fullPageEdited.jpg";
import ImageHalf from "../../images/joeyy_lee_7tdqxrc8hh_TjQPx.jpg";

const HomeImage = () => {
  return (
    <section className="Home_image">
      <div className="Home_image_img">
        <img src={ImageHalf} alt="" />
      </div>
      <div className="Home_image_content">
        <div className="Home_image_content_heading heading-1 heading-1--white">
          Jewellery That Excites You
        </div>
      </div>
    </section>
  );
};

export default HomeImage;
