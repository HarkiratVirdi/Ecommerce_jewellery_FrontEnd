import React from "react";
import Button from "../Button";
import ShowBracelet from "../../images/joeyy-lee-onU-LlrPs8I-unsplash.jpg";
import ShowBracelet2 from "../../images/showingbracelet2_com_c8tTp.jpg";

export default function Home_about() {
  return (
    <div className="H_about">
      <div className="H_about_heading heading-5">
        Tira is a Handmade jewellery that reflects elegance with the focus on
        the highest quantily of material used. All jewellery crafted in toronto,
        canada.
      </div>

      <div className="H_about_images">
        <img src={ShowBracelet} alt="" />
        <img src={ShowBracelet2} alt="" />
      </div>

      <Button placement="H_about_btn mt-s" linkTo={"/about"}>
        About
      </Button>
    </div>
  );
}
