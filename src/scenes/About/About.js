import React, { useEffect } from "react";
import About_I_1 from "../../images/joeyy_lee_s5n17pzcb0_g3l4b.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap, TimelineLite, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useInView } from "react-intersection-observer";
gsap.registerPlugin(CSSRulePlugin, CSSPlugin);

const About = () => {
  const imageShow = CSSRulePlugin.getRule(".about__img-container:after");

  useEffect(() => {
    const revealAnimation = () => {
      const tl = new TimelineLite();
      tl.to(".about__img-container", {
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
        .from(".about__img-container img", {
          duration: 1.3,
          scale: 1.5,
          ease: Power2.easeInOut,
          delay: -1,
        });
    };
    revealAnimation();
  }, []);

  return (
    <div className="about">
      <div className="about_content heading-4 heading-4--white">
        Tira is a Handmade jewellery that reflects elegance with the focus on
        the highest quantily of material used. All jewellery crafted in Toronto,
        Canada.
      </div>
      <div className="about_img_1">
        <div className="about__img-container">
          <img src={About_I_1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
