import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Button from "../components/Button";
import CartItems from "../components/CartItems";
import { useSelector, useDispatch } from "react-redux";

const Cart = ({ CartDisplay, setCartDisplay }) => {
  let cart_checkout = useRef(null);
  let cart = useRef(null);

  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const { cartItems } = cartState;

  console.log(cartItems);
  useEffect(() => {
    const runAnimation = () => {
      console.log(CartDisplay);
      if (CartDisplay) {
        gsap.to(cart.current, {
          duration: 0.7,
          ease: "power2.inOut",
          clipPath: "inset(0 0 0% 0)",
        });
      } else {
        gsap.to(cart.current, {
          duration: 0.7,
          ease: "power3.inOut",
          clipPath: "inset(0 0 100% 0)",
        });
      }
    };
    runAnimation();
  }, [CartDisplay]);

  return (
    <div ref={cart} className="cart">
      <div className="cart_container_80 container-80">
        <h1 className="cart__heading heading-3--black heading-3">Cart</h1>
        <div
          onClick={() => setCartDisplay((prev) => !prev)}
          className={`cart__cross ${CartDisplay ? "cross__display" : ""}`}
        >
          x
        </div>
        {/* <div className="cart_cross"><a href=""></a></div> */}
        <div className="cart__container">
          <div className="cart__items">
            {cartItems.map((cartItem) => {
              return <CartItems product={cartItem} />;
            })}
          </div>
        </div>
      </div>
      <div className="cart__footer">
        <div className="cart__total">
          <h3 className="heading-4 heading-4--white">Total/ </h3>
        </div>
        <div className="cart__options">
          <Button linkTo="/checkout" style="btn--white">
            Checkout
          </Button>

          {/* <Link className="cart__options--checkout">
            <label htmlFor="checkout">Checkout</label>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
