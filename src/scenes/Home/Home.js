import React, { Fragment } from "react";
import HomeHero from "./HomeHero";
import HomeAbout from "./HomeAbout";
import HomeImage from "./HomeImage";
import HomeParallex from "./HomeParallex";
import HomeFeatured from "./HomeFeatured";
import SignUp from "../../components/SignUp";
import HomeItems from "./HomeItems";
import Footer from "../../components/Footer";

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
      <Footer />
    </>
  );
}
