import React, { useEffect } from "react";
import CheckoutSteps from "../../components/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../../actions/orderAction";
import { Link } from "react-router-dom";
import Message from "../../components/Message";

const PlaceOrder = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLogin);
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const { userInfo } = user;

  cart.itemsPrice = cart.cartItems.reduce((acc, item) => {
    return acc + Number(item.price) * Number(item.qty);
  }, 0);

  cart.shippingPrice = Number(cart.itemsPrice > 100 ? 0 : 30);
  cart.taxPrice = Number(0.15 * cart.itemsPrice).toFixed(2);
  cart.totalPrice = Number(
    Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)
  );

  const orderCreate = useSelector((state) => state.orderCreate);
  const { success, error, order } = orderCreate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    if (!shippingAddress) {
      history.push("/shipping");
    }
  }, [userInfo, shippingAddress]);

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    //eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        taxPrice: cart.taxPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
        itemsPrice: cart.itemsPrice,
      })
    );
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="orderInfo mt-l">
        <div className="orderInfo__1">
          <div className="orderInfo_shipping heading-4 heading-4--black">
            Shipping
            <hr />
            <div className="orderInfo_address">
              <div className="heading-5">
                <span className="text-bold">Address: </span>{" "}
                {cart.shippingAddress.address}{" "}
              </div>
            </div>
          </div>
          <div className="orderInfo_items heading-4 heading-4--black mt-m">
            Ordered Items
            <hr />
            {cart.cartItems.map((item, index) => (
              <div className="items" key={index}>
                <Link to={`/products/${item.product}`}>
                  <img src={item.image} alt={item.name} />
                </Link>
                <div className="item_name heading-5 heading-5--black">
                  {item.name}
                </div>

                <div className="item_price heading-5 heading-5--black">
                  ${item.price} x {item.qty} = ${item.qty * item.price}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="orderInfo_summary heading-4 heading-4--black">
          Order Summary
          <hr />
          <div className="heading-5">
            <span className="text-bold">Items: </span> ${cart.itemsPrice}
          </div>
          <div className="heading-5">
            <span className="text-bold">Shipping Cost: </span>$
            {cart.shippingPrice}
          </div>
          <div className="heading-5">
            <span className="text-bold">Tax: </span>${cart.taxPrice}
          </div>
          <div className="heading-5">
            {" "}
            <span className="text-bold">Total: </span> ${cart.totalPrice}
          </div>
          {error && <Message>{error}</Message>}
          <button
            className="btn btn--black"
            disabled={cart.cartItems === 0}
            onClick={placeOrderHandler}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
