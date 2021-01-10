import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loading = () => {
  let bigLogo = useRef(null);
  let overlay = useRef(null);
  let loadingScreen = useRef(null);

  const elements = [".hero_image", "."];
  //   let loadingDone = false;
  useEffect(() => {
    // const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    // tl.to(txt.current, { y: "15%", duration: 1 });
    // tl.to(slider.current, { y: "-100%", duration: 1.4, delay: 0.5 });
    // tl.to(loading.current, { y: "-100%", duration: 0.8 }, "-=1.1");
    // loadingDone = true;
    //--------------------loading-------
    let tl = gsap.timeline();
    tl.to(bigLogo, { duration: 2, color: "#fff" });
    tl.to(overlay, { duration: 1.6, y: "-100vh", ease: "power3.inOut" });
    tl.to(overlay, { display: "none" });
    tl.to(loadingScreen, { display: "none" });
  }, []);

  return (
    // <div className="loading" ref={loading}>
    //   <div className="loading__text">
    //     <div className="loading__hide">
    //       <span className="loading__text" ref={txt}>
    //         TIRA
    //       </span>
    //     </div>
    //   </div>
    //   <div ref={slider} className="loading__slider"></div>
    // </div>

    <div
      className="loading"
      ref={(el) => {
        loadingScreen = el;
      }}
    >
      <div
        className="loading__overlay"
        ref={(el) => {
          overlay = el;
        }}
      >
        <div className="loading__logo">
          <h1
            className="loading__big_logo"
            ref={(el) => {
              bigLogo = el;
            }}
          >
            TIRA
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
