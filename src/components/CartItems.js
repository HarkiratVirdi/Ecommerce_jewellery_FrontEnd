import React, { useState } from "react";
import { removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const CartItems = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const Decrement = () => {
    if (quantity <= 1) {
      //   console.log(cartState.cartItems.product);
      //   console.log(cartState.cartItems);
      //   console.log(product);
      dispatch(removeFromCart(product.product));
    } else {
      setQuantity(quantity - 1);
    }
  };
  const Increment = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="cartitems">
      <div className="cartitems__image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="cartitems__content">
        <div className="cartitems__name heading-5 ">
          {product.name} / ${product.price}
        </div>
        <div className="cartitems__qty">
          <div className="heading-4 cartitems__dec" onClick={Decrement}>
            -
          </div>
          <div className="heading-4 cartitems__qty--number">{quantity}</div>
          <div className="heading-4 cartitems__inc" onClick={Increment}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
