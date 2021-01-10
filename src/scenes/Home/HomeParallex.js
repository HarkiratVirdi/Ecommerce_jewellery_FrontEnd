import React from "react";
import ImageCenter from "../../images/joeyy_lee_oibaeuefpe_Hi6jF.jpg";
import ImageRight from "../../images/joeyy_lee_rskxe86fzw_Q9VuO.jpg";
import ImageLeft from "../../images/joeyy_lee_sz_brewpxr_riJns.jpg";

export default function HomeParallex() {
  return (
    <section className="home_parallex">
      <div className="home_parallex_images">
        <figure className="home_parallex_images_figure m-hide">
          <img src={ImageLeft} alt="" />
        </figure>
        <figure className="home_parallex_images_figure">
          <img src={ImageCenter} alt="" />
        </figure>
        <figure className="home_parallex_images_figure m-hide">
          <img src={ImageRight} alt="" />
        </figure>
      </div>
      <div className="home_parallex_content">
        <div className="heading-2 heading-2--white">
          Each Piece Tells a Story
        </div>
      </div>
    </section>
  );
}
