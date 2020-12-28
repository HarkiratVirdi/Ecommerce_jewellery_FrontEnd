import React, { Fragment } from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeImage from "./HomeImage";
import HomeParallex from "./HomeParallex";
import HomeCarousel from "./HomeCarousel";
import HomeFeatured from "./HomeFeatured";
import SignUp from "../SignUp";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeImage />
      <HomeParallex />
      <HomeFeatured />
      <SignUp />
    </>
  );
}
