import React from "react";
import Button from "./Button";
import FormField from "./FormField";

export default function SignUp() {
  return (
    <section className="sign_up">
      <div className="sign_up_heading heading-3 heading-3--white">
        Sign Up for our newsletter to receive offers.
      </div>
      <form action="" className="sign_up_form">
        <input type="email" placeholder="Email Address" />
        <Button placement="sign_up_btn" style="btn--white">
          Sign Up
        </Button>
      </form>
    </section>
  );
}
