import React, { useEffect, useRef } from "react";
import ImageFull from "../../images/fullPageEdited.jpg";
import ImageHalf from "../../images/joeyy_lee_7tdqxrc8hh_TjQPx.jpg";
import gsap from "gsap";

const HomeImage = () => {
  let Image2 = useRef(null);
  let homeImage = useRef(null);
  useEffect(() => {
    gsap.to(
      Image2,
      {
        scrollTrigger: {
          trigger: Image2,
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: true,
        },
        y: -20,
      },
      []
    );

    gsap.to(
      homeImage,
      {
        scrollTrigger: {
          trigger: homeImage,
          start: "top center",
          toggleActions: "restart pause reverse pause",
          scrub: true,
        },
        transform: "matrix(1.15,0,0,1.15,0, 0)",
      },
      []
    );
  });

  return (
    <section
      className="Home_image"
      ref={(el) => {
        homeImage = el;
      }}
    >
      <div className="Home_image_img">
        <img
          ref={(el) => {
            Image2 = el;
          }}
          src={ImageHalf}
          alt=""
        />
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
