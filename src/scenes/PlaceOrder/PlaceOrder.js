import React, { useEffect } from "react";
import CheckoutSteps from "../../components/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";

const PlaceOrder = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLogin);
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const { userInfo } = user;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    if (!shippingAddress) {
      history.push("/shipping");
    }
  }, [history, userInfo, shippingAddress]);

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
    </>
  );
};

export default PlaceOrder;
