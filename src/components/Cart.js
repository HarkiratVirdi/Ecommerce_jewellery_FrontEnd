import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../actions/cartActions";

const Cart = ({ CartDisplay, setCartDisplay }) => {
  let cart = useRef(null);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const userLogin = useSelector((state) => state.userLogin);
  const { cartItems } = cartState;

  const { userInfo } = userLogin;

  useEffect(() => {
    const runAnimation = () => {
      // console.log(CartDisplay);
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

  useEffect(() => {
    console.log(quantity);
  }, [quantity, dispatch]);

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
            {cartItems.length > 0 ? (
              cartItems.map((cartitem) => {
                return (
                  <div className="cartitems">
                    <div className="cartitems__image">
                      <img src={cartitem.image} alt={cartitem.name} />
                    </div>
                    <div className="cartitems__content">
                      <div className="cartitems__name heading-5 ">
                        {cartitem.name} / ${cartitem.price}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="heading-3 heading-3--black">
                Please Add Some Items From The Shop
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="cart__footer">
        <div className="cart__total">
          <h3 className="heading-4 heading-4--white">
            Total/$
            {cartItems.length
              ? cartItems
                  .reduce((acc, item) => {
                    return acc + item.qty * item.price;
                  }, 0)
                  .toFixed(2)
              : "0"}
          </h3>
        </div>
        <div className="cart__options">
          <Button
            linkTo={userInfo ? "/checkout" : "/login"}
            disable={cartItems.length === 0}
            styling="btn--white"
            onClick={() => setCartDisplay((prev) => !prev)}
          >
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
