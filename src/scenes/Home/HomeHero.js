import React, { useEffect, useRef } from "react";
import hero_I_1 from "../../images/joeyy_lee_qzftqhqn7y_VdQsk.jpg";
import hero_I_2 from "../../images/joeyy_lee_s8sj8pmxpd_l2IND.jpg";
import hero_I_3 from "../../images/joeyy_lee_c2chydc76h_JIZjc.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap, TimelineLite, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useInView } from "react-intersection-observer";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin, CSSPlugin);

export default function Hero() {
  const imageShow = CSSRulePlugin.getRule(".hero__img-container:after");
  const [heroImages, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "0px",
  });

  useEffect(() => {
    // ScrollTrigger.create({
    //   trigger: imgContainer.current,
    //   start: "top center",
    //   toggleActions: "resume resume none none",
    //   onEnter: () => revealAnimation(),
    //   markers: true,
    // });
    if (inView) {
      revealAnimation();
    }
  }, [inView]);

  const revealAnimation = () => {
    const tl = new TimelineLite();
    tl.to(".hero__img-container", {
      duration: 0,
      visibility: "visible",
    })
      .fromTo(
        imageShow,
        { width: "100%" },
        {
          duration: 1.4,
          width: "0%",
          ease: Expo.easeInOut,
        }
      )
      .from(".hero__img-container img", {
        duration: 1.3,
        scale: 1.5,
        ease: Power2.easeInOut,
        delay: -1,
      });
  };

  return (
    <section className="hero">
      <h1 className="hero__heading">
        <span className="heading-1 heading-1--gold">Jewellery </span>
        <span className="heading-1">For The </span>
        <span className="heading-1 heading-1--gold">Modern </span>
        <span className="heading-1">Women</span>
      </h1>

      <div className="hero__images" ref={heroImages}>
        <div className="hero__img-container hero_IC1 m-hide">
          <img src={hero_I_1} alt="" />
        </div>
        <div className="hero__img-container hero_IC2">
          <img src={hero_I_2} alt="" />
        </div>
        <div className="hero__img-container hero_IC3 m-hide">
          <img src={hero_I_3} alt="" />
        </div>

        {/* <img className="hero_image" src={hero_I_2} alt="" />

        <img className="hero_image m-hide" src={hero_I_3} alt="" /> */}
      </div>
    </section>
  );
}
