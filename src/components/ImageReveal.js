import React, { useEffect, useRef } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap, TimelineLite, Power2, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin, CSSPlugin);

const ImageReveal = ({ imgSrc, classes, col, row }) => {
  const imageRef = useRef(null);
  const imageShow = CSSRulePlugin.getRule(".img-container:after");
  const imgContainer = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: imgContainer.current,
      start: "top center",
      toggleActions: "resume resume none none",
      onEnter: () => revealAnimation(),
      //   onLeave: () => console.log("leaving"),
      //   onEnterBack: () => console.log("on Enter back"),
      //   onLeaveBack: () => console.log("on leave back"),
      markers: true,
    });
  });

  const revealAnimation = () => {
    const tl = new TimelineLite();
    tl.to(".img-container", {
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
      .from(imageRef.current, {
        duration: 1.3,
        scale: 1.5,
        ease: Power2.easeInOut,
        delay: -1,
      });
  };

  return (
    <div
      ref={imgContainer}
      className={`img-container ${classes}`}
      style={{ gridColumn: `${col}`, gridRow: `${row}` }}
    >
      <img ref={imageRef} src={imgSrc} alt="" />
    </div>
  );
};

export default ImageReveal;
