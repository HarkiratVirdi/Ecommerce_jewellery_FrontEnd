import React from "react";
import HeadingHover from "../HeadingHover";
import bracelet1 from "../../images/comp_items/anchor_bracelet_for__LJ9p3.jpg";
import bracelet2 from "../../images/comp_items/anchor_bracelet_gold.jpg";
import bracelet3 from "../../images/comp_items/anchor_bracelet_mens.jpg";
import bangle1 from "../../images/comp_items/bangle_bracelet_with_37JWH.jpg";
import bangle2 from "../../images/comp_items/bangle_bracelet_with_vGwMY.jpg";
import bangle3 from "../../images/comp_items/simple-gold-bracelet.jpg";
import earrings1 from "../../images/comp_items/galaxy-earrings.jpg";
import earrings2 from "../../images/comp_items/guardian-angel-earrings.jpg";
import earrings3 from "../../images/comp_items/marble-stud-earrings.jpg";
import necklace1 from "../../images/comp_items/gold_bird_necklace.jpg";
import necklace2 from "../../images/comp_items/silver_origami_neckl_wsiVC.jpg";
import necklace3 from "../../images/comp_items/gold-layered-necklace.jpg";

export default function HomeItems() {
  const images = {
    bracelets: [bracelet1, bracelet2, bracelet3],
    bangles: [bangle1, bangle2, bangle3],
    Earrings: [earrings1, earrings2, earrings3],
    Necklace: [necklace1, necklace2, necklace3],
  };

  return (
    <section className="home_items">
      <div className="home_items__heading heading-3 heading-3--gold mb-m">
        Categories
      </div>
      <div className="home_items__headings">
        <HeadingHover>Bracelets</HeadingHover>
        <HeadingHover>Bangles</HeadingHover>
        <HeadingHover>Earrings</HeadingHover>
        <HeadingHover>Necklace</HeadingHover>
      </div>
      <div className="home_items__showImage">
        <img src={necklace1} alt="" />
      </div>
      <div className="home_items__showImage">
        <img src={bangle1} alt="" />
      </div>
    </section>
  );
}
