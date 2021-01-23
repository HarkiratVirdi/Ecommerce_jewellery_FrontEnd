import React, { useEffect, useState } from "react";

const Contact = () => {
  const [displayOrderNumber, setDisplayOrderNumber] = useState(false);

  useEffect(() => {
    console.log(displayOrderNumber);
  });

  return (
    <div className="contact">
      <div className="mb-s heading-3">Contact Us</div>

      <div className="contact__form">
        <form action="https://httpbin.org/post">
          <div className="field">
            <label for="name">Name</label>
            <input
              name="name"
              className="validate checkEmpty"
              id="name"
              type="text"
              required
            />
          </div>
          <div className="field">
            <label for="email">Email</label>
            <input
              id="email"
              className="checkEmpty"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="field">
            <label for="address">Address</label>
            <input
              className="checkEmpty"
              id="address"
              name="address"
              type="text"
              required
            />
          </div>

          <div className="field">
            <datalist id="city">
              <option value="Toronto" />
              <option value="Vancouver" />
              <option value="Brampton" />
              <option value="Calgary" />
              <option value="Montreal" />
              <option value="Winnipeg" />
              <option value="Regina" />
              <option value="Halifax" />
              <option value="Abbotsford" />
              <option value="Scarbrough" />
              <option value="Guelph" />
              <option value="Kitchner" />
              <option value="Missisaugga" />
            </datalist>
            <label for="city">City</label>
            <input
              className="checkEmpty"
              list="city"
              id="city"
              type="text"
              required
            />
          </div>

          <div className="field">
            <label for="postal">Postal Code</label>
            <input
              className="validate checkEmpty"
              name="postal"
              id="postal"
              type="text"
              required
            />
          </div>

          <div className="radio_fields">
            <div className="payment_form_field heading-5 heading-5--black">
              <label className="radio radio-gradient-gold">
                <span className="radio__input">
                  <input
                    type="radio"
                    name="radio"
                    checked
                    onClick={(e) => setDisplayOrderNumber(false)}
                  />
                  <span className="radio__control-gold"></span>
                </span>
                <span className="radio__label">Comment</span>
              </label>
            </div>

            <div className="payment_form_field heading-5 heading-5--black">
              <label className="radio radio-gradient-gold">
                <span className="radio__input">
                  <input
                    type="radio"
                    name="radio"
                    onClick={(e) => setDisplayOrderNumber(false)}
                  />
                  <span className="radio__control-gold"></span>
                </span>
                <span className="radio__label">Question</span>
              </label>
            </div>

            <div className="payment_form_field heading-5 heading-5--black">
              <label className="radio radio-gradient-gold">
                <span className="radio__input">
                  <input
                    type="radio"
                    name="radio"
                    onClick={(e) => setDisplayOrderNumber(true)}
                  />
                  <span className="radio__control-gold"></span>
                </span>
                <span className="radio__label">Order Problem</span>
              </label>
            </div>
          </div>
          <div className={`field ${displayOrderNumber ? "" : "d-none"}`}>
            <label for="orderNumber">Order Number</label>
            <input type="number" id="orderNumber" />
          </div>

          <div className="field">
            <label for="message">Message</label>
            <textarea
              className="validate"
              name="message"
              id="message"
              cols="25"
              rows="7"
            ></textarea>
          </div>

          <div className="field">
            <input
              type="hidden"
              id="myName"
              name="myName"
              value="Harkirat Singh Virdi"
            />
          </div>
          <input className="btn btn--gold" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
