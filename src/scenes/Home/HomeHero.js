import React from "react";
import hero_I_1 from "../../images/joeyy_lee_qzftqhqn7y_VdQsk.jpg";
import hero_I_2 from "../../images/joeyy_lee_s8sj8pmxpd_l2IND.jpg";
import hero_I_3 from "../../images/joeyy_lee_c2chydc76h_JIZjc.jpg";
import { motion } from "framer-motion";
import InitialTransition from "../../components/PageTransition";

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

  const imageT = {
    duration: 1,
    ease: "easeInOut",
    delayChildren: 0.4,
  };

  const imageA = {
    scale: 0.9,
    duration: 2,
    ease: "easeIn",
  };

  return (
    <section className="hero">
      <motion.h1
        initial="initial"
        animate="animate"
        exit="exit"
        transition={duration}
        variants={transition}
        className="hero__heading"
      >
        <span className="heading-1">Handmade </span>
        <span className="heading-1 heading-1--gold">Jewellery </span>
        <span className="heading-1">For The </span>
        <span className="heading-1 heading-1--gold">Modern </span>
        <span className="heading-1">Women</span>
      </motion.h1>

      <motion.div transition={imageT} className="hero__images">
        <motion.img
          animate={imageA}
          initial={{ scale: 1 }}
          className="hero_image m-hide"
          src={hero_I_1}
          alt=""
        />

        <motion.img
          animate={imageA}
          initial={{ scale: 1 }}
          className="hero_image"
          src={hero_I_2}
          alt=""
        />

        <motion.img
          animate={imageA}
          initial={{ scale: 1 }}
          className="hero_image m-hide"
          src={hero_I_3}
          alt=""
        />
      </motion.div>
    </section>
  );
}
