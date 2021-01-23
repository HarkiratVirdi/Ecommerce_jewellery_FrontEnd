import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo heading-3 heading-3--white">TIRA</div>
      <div className="footer__left">
        <div className="footer__left--1">
          <ul className="footer__left--1-list">
            <h4 className="heading-5--white footer__link">Navigate</h4>
            <Link className="heading-5--white footer__link">Home</Link>
            <Link className="heading-5--white footer__link">Shop</Link>
            <Link className="heading-5--white footer__link">About</Link>
            <Link className="heading-5--white footer__link">Contact</Link>
            <Link className="heading-5--white footer__link">Login</Link>
          </ul>
        </div>
        <div className="footer__left--2">
          <ul className="footer__left--2-list">
            <h4 className="heading-5--white footer__link">Need Help?</h4>
            <Link className="heading-5--white footer__link">
              Customer Service
            </Link>
            <Link className="heading-5--white footer__link">Contact Us</Link>
            <Link className="heading-5--white footer__link">Question</Link>
            <Link className="heading-5--white footer__link">Store Locator</Link>
            <Link className="heading-5--white footer__link">Login</Link>
          </ul>
        </div>
        <div className="footer__left--3">
          <ul className="footer__left--3-list">
            <h4 className="heading-5--white footer__link">Social</h4>
            <Link className="heading-5--white footer__link">Instagram</Link>
            <Link className="heading-5--white footer__link">Facebook</Link>
            <Link className="heading-5--white footer__link">YouTube</Link>
            <Link className="heading-5--white footer__link">SnapChat</Link>
          </ul>
        </div>
        <div className="footer__left--4">
          <ul className="footer__left--4-list">
            <h4 className="heading-4--white footer__link">
              Terms & Conditions
            </h4>
            <Link className="heading-5--white footer__link">Return Policy</Link>
            <Link className="heading-5--white footer__link">
              Covid Policies
            </Link>
            <Link className="heading-5--white footer__link">
              Import & Export
            </Link>
            <Link className="heading-5--white footer__link">Terms</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
