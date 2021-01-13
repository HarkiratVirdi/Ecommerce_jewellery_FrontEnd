import React from "react";
import ImageReveal from "../../components/ImageReveal";
import ImageCenter from "../../images/joeyy_lee_oibaeuefpe_Hi6jF.jpg";
import ImageRight from "../../images/joeyy_lee_rskxe86fzw_Q9VuO.jpg";
import ImageLeft from "../../images/joeyy_lee_sz_brewpxr_riJns.jpg";

export default function HomeParallex() {
  return (
    <section className="home_parallex">
      <div className="home_parallex_images">
        <ImageReveal col="2/span 2" row="1/4" imgSrc={ImageLeft} alt="" />

        <ImageReveal
          classes="m-hide"
          col="5/span 2"
          row="3/6"
          imgSrc={ImageCenter}
          alt=""
        />

        <ImageReveal
          imgSrc={ImageRight}
          col="8/span 2"
          row="1/4"
          classes="m-hide"
          alt=""
        />
      </div>
      <div className="home_parallex_content">
        <div className="heading-2 heading-2--black">
          Each Piece Tells a Story
        </div>
      </div>
    </section>
  );
}
