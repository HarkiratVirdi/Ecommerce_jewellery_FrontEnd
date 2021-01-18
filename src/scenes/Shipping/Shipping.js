import React, { useEffect, useState } from "react";
import CheckoutSteps from "../../components/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../../actions/cartActions";

const Shipping = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userLogin);
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const { userInfo } = user;
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [history, userInfo]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <>
      <CheckoutSteps step1 step2 />
      <div className="shipping">
        <form className="form" onSubmit={SubmitHandler}>
          <div className="form_field heading-5 heading-5--white">
            <label htmlFor="Address" className="form_label">
              Address
            </label>
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              className="form_input"
              placeholder="Enter Address"
            />
          </div>
          <div className="form_field heading-5 heading-5--white">
            <label htmlFor="city" className="form_label">
              City
            </label>
            <input
              type="text"
              className="form_input"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              placeholder="Enter City"
            />
          </div>
          <div className="form_field heading-5 heading-5--white">
            <label htmlFor="postalCode" className="form_label">
              Postal Code
            </label>
            <input
              type="text"
              className="form_input"
              onChange={(e) => setPostalCode(e.target.value)}
              value={postalCode}
              placeholder="Enter Postal Code"
            />
          </div>
          <div className="form_field heading-5 heading-5--white">
            <label htmlFor="city" className="form_label">
              Country
            </label>
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              className="form_input"
              placeholder="Enter Country"
            />
          </div>

          <button type="submit" className="btn btn--white mt-s">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Shipping;
