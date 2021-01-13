import React, { useRef, useEffect } from "react";
import ImageCenter from "../../images/joeyy_lee_oibaeuefpe_Hi6jF.jpg";
import ImageRight from "../../images/joeyy_lee_rskxe86fzw_Q9VuO.jpg";
import ImageLeft from "../../images/joeyy_lee_sz_brewpxr_riJns.jpg";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap, TimelineLite, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin, CSSPlugin);
export default function HomeParallex() {
  const imageShow = CSSRulePlugin.getRule(".parallex__img-container:after");

  const [homeParallex, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (inView) {
      revealAnimation();
    }
  }, [inView]);

  const revealAnimation = () => {
    const tl = new TimelineLite();
    tl.to(".parallex__img-container", {
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
      .from(".parallex__img-container img", {
        duration: 1.3,
        scale: 1.5,
        ease: Power2.easeInOut,
        delay: -1,
      });
  };

  return (
    <section className="home_parallex">
      <div className="home_parallex_images" ref={homeParallex}>
        <div className="parallex__img-container parallex_IC1 m-hide">
          <img src={ImageLeft} alt="" />
        </div>
        <div className="parallex__img-container parallex_IC2">
          <img src={ImageCenter} alt="" />
        </div>
        <div className="parallex__img-container parallex_IC3 m-hide">
          <img src={ImageRight} alt="" />
        </div>
      </div>
      <div className="home_parallex_content">
        <div className="heading-2 heading-2--black">
          Each Piece Tells a Story
        </div>
      </div>
    </section>
  );
}
