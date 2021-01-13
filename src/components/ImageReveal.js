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




  return (
   
  );
};

export default ImageReveal;
