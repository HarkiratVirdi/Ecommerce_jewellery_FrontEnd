import React, { useEffect, useState } from "react";
import CheckoutSteps from "../../components/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import {
  saveShippingAddress,
  savePaymentMethod,
} from "../../actions/cartActions";

const Payment = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLogin);
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const { userInfo } = user;
  const [payment, setPayment] = useState("Paypal");

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
    if (!shippingAddress) {
      history.push("/shipping");
    }
  }, [history, userInfo, shippingAddress]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(payment));
    history.push("/placeorder");
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <div className="payment">
        <form className="payment_form" onSubmit={SubmitHandler}>
          <div className="heading-4 heading-4--white">
            Select Payment Method
          </div>
          <div className="payment_form_field heading-5 heading-5--white">
            <label className="radio radio-gradient">
              <span className="radio__input">
                <input
                  type="radio"
                  name="radio"
                  checked
                  onChange={(e) => setPayment(e.target.value)}
                />
                <span className="radio__control"></span>
              </span>
              <span className="radio__label">PayPal</span>
            </label>
          </div>

          <button type="submit" className="btn btn--white mt-m">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
