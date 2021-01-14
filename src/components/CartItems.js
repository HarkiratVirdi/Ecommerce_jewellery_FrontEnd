import React from "react";

const CartItems = ({ product }) => {
  return (
    <div className="cartitems">
      <div className="cartitems__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="cartitems__content">
        <div className="cartitems__name heading-5 ">
          {product.name} / {product.price}
        </div>
        <div className="cartitems__qty">
          <div className="cartitems__dec">-</div>
          <div className="cartitems__qty--number">{product.qty}</div>
          <div className="cartitems__inc">+</div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
