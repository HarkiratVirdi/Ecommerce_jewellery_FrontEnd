import React, { Fragment } from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeImage from "./HomeImage";
import HomeParallex from "./HomeParallex";
import HomeFeatured from "./HomeFeatured";
import SignUp from "../SignUp";
import HomeItems from "./HomeItems";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeImage />
      <HomeItems />
      <HomeParallex />
      <HomeFeatured />
      <SignUp />
    </>
  );
}
