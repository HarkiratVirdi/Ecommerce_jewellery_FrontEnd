import React from "react";
import { Link } from "react-router-dom";

export default function ShoppingItem({ product }) {
  return (
    <div className={`shopping_item`}>
      <Link to={`/products/${product._id}`}>
        <div className="shopping_item_image">
          <img src={product.image} alt="" />
        </div>
      </Link>

      <div className="shopping_item_content">
        <Link to={`/products/${product.id}`}>
          <h5 className="shopping_item_content_name heading-5 heading-5-black">
            {product.name}
          </h5>
        </Link>
        <h6 className="shopping_item_content_price heading-6 heading-6-black">
          {`$${product.price}`}
        </h6>
      </div>
    </div>
  );
}
