import React from "react";
import hero_I_1 from "../../images/joeyy_lee_qzftqhqn7y_VdQsk.jpg";
import hero_I_2 from "../../images/joeyy_lee_s8sj8pmxpd_l2IND.jpg";
import hero_I_3 from "../../images/joeyy_lee_c2chydc76h_JIZjc.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <h1 className="hero__heading">
        <span className="heading-1">Handmade </span>
        <span className="heading-1 heading-1--white">Jewellery </span>
        <span className="heading-1">For The </span>
        <span className="heading-1 heading-1--white">Modern </span>
        <span className="heading-1">Women</span>
      </h1>

      <div className="hero__images">
        <img src={hero_I_1} alt="" />

        <img src={hero_I_2} alt="" />

        <img src={hero_I_3} alt="" />
      </div>
    </div>
  );
}
