import React from "react";
import { Link } from "react-router-dom";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="checkout heading-6">
      <div className="checkout_step">
        {step1 ? (
          <Link to="/login">Sign In</Link>
        ) : (
          <Link style={{ color: "#888" }} disabled>
            Sign In
          </Link>
        )}
      </div>
      <div className="checkout_step">
        {step2 ? (
          <Link to="/shipping">Shipping</Link>
        ) : (
          <Link style={{ color: "#888" }} disabled>
            Shipping
          </Link>
        )}
      </div>
      <div className="checkout_step">
        {step3 ? (
          <Link to="/payment">Payment</Link>
        ) : (
          <Link style={{ color: "#888" }} disabled>
            Payment
          </Link>
        )}
      </div>
      <div className="checkout_step">
        {step4 ? (
          <Link to="/placeorder">Place Order</Link>
        ) : (
          <Link style={{ color: "#888" }} disabled>
            Place Order
          </Link>
        )}
      </div>
    </div>
  );
};

export default CheckoutSteps;
