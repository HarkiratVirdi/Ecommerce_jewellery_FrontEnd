import React from "react";
import hero_I_1 from "../../images/joeyy_lee_qzftqhqn7y_VdQsk.jpg";
import hero_I_2 from "../../images/joeyy_lee_s8sj8pmxpd_l2IND.jpg";
import hero_I_3 from "../../images/joeyy_lee_c2chydc76h_JIZjc.jpg";
import { motion } from "framer-motion";
import InitialTransition from "../../components/PageTransition";
import ImageReveal from "../../components/ImageReveal";

export default function Hero() {
  const transition = {
    initial: {
      opacity: 0,
      y: "50px",
    },
    animate: {
      opacity: 1,
      y: "0",
    },
    exit: {},
  };

  const duration = {
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <section className="hero">
      <h1 className="hero__heading">
        <span className="heading-1 heading-1--gold">Jewellery </span>
        <span className="heading-1">For The </span>
        <span className="heading-1 heading-1--gold">Modern </span>
        <span className="heading-1">Women</span>
      </h1>

      <div className="hero__images">
        {/* <img
          // animate={imageA}
          // initial={{ scale: 1 }}
          // exit={{ scale: 0.9 }}
          // transition={imageT}
          className="hero_image m-hide"
          src={hero_I_1}
          alt=""
        />

        <img
          // animate={imageA}
          // initial={{ scale: 1 }}
          // exit={{ scale: 0.9 }}
          // transition={imageT}
          className="hero_image"
          src={hero_I_2}
          alt=""
        />

        <motion.img
          animate={imageA}
          initial={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={imageT}
          className="hero_image m-hide"
          src={hero_I_3}
          alt=""
        /> */}
        <ImageReveal classes="m-hide" imgSrc={hero_I_1} col="1/3" row="2/6" />
        <ImageReveal classes="" imgSrc={hero_I_2} col="3/6" row="1/-1" />
        <ImageReveal classes="m-hide" imgSrc={hero_I_3} col="6/8" row="2/6" />
      </div>
    </section>
  );
}
