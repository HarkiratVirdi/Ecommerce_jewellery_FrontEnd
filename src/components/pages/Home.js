import React, { Fragment } from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeImage from "./HomeImage";
import HomeParallex from "./HomeParallex";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeImage />
      <HomeParallex />
    </>
  );
}
