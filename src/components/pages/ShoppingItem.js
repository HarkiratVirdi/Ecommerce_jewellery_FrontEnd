import React from "react";

export default function ShoppingItem({ imageSrc, children }) {
  // const checkPlacement = placement ? placement : "";
  const separateByComma = children.split(",");
  return (
    <div className={`shopping_item`}>
      <div className="shopping_item_image">
        <img src={imageSrc} alt="" />
      </div>
      <div className="shopping_item_content">
        <h5 className="shopping_item_content_name heading-5 heading-5-black">
          {separateByComma[0]}
        </h5>
        <h6 className="shopping_item_content_price heading-6 heading-6-black">
          {separateByComma[1]}
        </h6>
      </div>
    </div>
  );
}
