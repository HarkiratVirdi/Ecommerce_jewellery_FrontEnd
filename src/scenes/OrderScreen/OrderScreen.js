import React, { useEffect, useState } from "react";
import Loader from "../../components/Loading";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetails, payOrder } from "../../actions/orderAction";
import { Link } from "react-router-dom";
import { ORDER_PAY_RESET } from "../../constants/orderConstants";
import Message from "../../components/Message";
import { PayPalButton } from "react-paypal-button-v2";

const OrderScreen = ({ match, history }) => {
  const dispatch = useDispatch();
  const orderId = match.params.id;
  const user = useSelector((state) => state.userLogin);
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const { userInfo } = user;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const [sdkReady, setSdkReady] = useState(false);

  if (!loading) {
    //   Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };

    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [orderId, dispatch, successPay, order]);

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }
  return loading ? (
    <Loader />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <>
      <div className="orderInfo mt-l">
        <div className="orderInfo__1">
          <div className="orderInfo_shipping heading-4 heading-4--black">
            Shipping
            <hr />
            <div className="orderInfo_address">
              <div className="heading-5">
                <span className="text-bold">Address: </span>{" "}
                {order.shippingAddress.address}{" "}
              </div>
            </div>
          </div>
          <div className="orderInfo_items heading-4 heading-4--black mt-m">
            Ordered Items
            <hr />
            <p>
              {order.isPaid ? (
                <Message>Paid On {order.paidAt}</Message>
              ) : (
                <Message>Not Paid</Message>
              )}
            </p>
            {order.orderItems.map((item, index) => (
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
            <span className="text-bold">Order ID: </span> {order._id}
          </div>
          <div className="heading-5">
            <span className="text-bold">Items: </span> ${order.itemsPrice}
          </div>
          <div className="heading-5">
            <span className="text-bold">Shipping Cost: </span>$
            {order.shippingPrice}
          </div>
          <div className="heading-5">
            <span className="text-bold">Tax: </span>${order.taxPrice}
          </div>
          <div className="heading-5">
            {" "}
            <span className="text-bold">Total: </span> ${order.totalPrice}
          </div>
          {!order.isPaid && (
            <div>
              {loadingPay && <Loader />}
              {!sdkReady ? (
                <Loader />
              ) : (
                <PayPalButton
                  amount={order.totalPrice}
                  onSuccess={successPaymentHandler}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OrderScreen;
