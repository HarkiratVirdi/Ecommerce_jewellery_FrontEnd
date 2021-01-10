import React, { useRef, useEffect } from "react";
import Button from "../../components/Button";
import ShowBracelet from "../../images/joeyy-lee-onU-LlrPs8I-unsplash.jpg";
import ShowBracelet2 from "../../images/showingbracelet2_com_c8tTp.jpg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home_about() {
  const animation = useAnimation();
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <section className="H_about">
      <motion.div
        ref={contentRef}
        animate={animation}
        initial="hidden"
        variants={{
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.6, 0.05, -0.01, 0.9] },
          },
          hidden: { opacity: 0, y: 72 },
        }}
        className="H_about_content"
      >
        <motion.div className="H_about_heading heading-4">
          Tira is a Handmade jewellery that reflects elegance with the focus on
          the highest quantily of material used. All jewellery crafted in
          Toronto, Canada.
        </motion.div>
        <Button placement="H_about_btn mt-s" linkTo={"/shop"}>
          shop
        </Button>
        {/* </Fade> */}
      </motion.div>
      <div className="H_about_images">
        <img src={ShowBracelet} alt="" />
        <img src={ShowBracelet2} alt="" />
      </div>
    </section>
  );
}
