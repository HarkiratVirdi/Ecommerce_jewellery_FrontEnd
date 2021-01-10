import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Cart = ({ CartDisplay, setCartDisplay }) => {
  let cart_checkout = useRef(null);
  let cart = useRef(null);

  useEffect(() => {
    const runAnimation = () => {
      console.log("animation runnings");
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
  //   useRef(() => {
  //     if (mouseEnter) {
  //       gsap.to(cart_checkout, {
  //         background: "#2c2c2c !important",
  //         color: "#fff",
  //         duration: 1,
  //       });
  //     } else {
  //       gsap.to(cart_checkout, {
  //         background: "#fff",
  //         color: "#2c2c2c",
  //         duration: 1,
  //       });
  //     }
  //   }, [mouseEnter]);

  //   const onMouseEnter = () => {
  //     console.log("Mouse entered checkout");
  //     setmouseEnter(true);
  //   };

  return (
    <div ref={cart} className="cart">
      <div className="container">
        <h1 className="cart_heading">Cart</h1>
        <div
          onClick={() => setCartDisplay((prev) => !prev)}
          className={`cart_cross ${CartDisplay ? "cross_display" : ""} `}
        >
          x
        </div>
        {/* <div className="cart_cross"><a href=""></a></div> */}
        <div className="cart_container">
          <div className="cart_items">{/* <CartItems /> */}</div>
        </div>
      </div>

      <div className="cart_footer">
        <div className="cart_total">
          <h3>Total/ </h3>
        </div>
        <div className="cart_options">
          <Link className="cart_options--checkout">
            <label htmlFor="checkout">Checkout</label>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
