import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { demoUser, register } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Spinner from "../../components/Spinner";

const Register = ({ history, location }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(register(name, email, password));
  };

  return (
    <form className="login_form" onSubmit={onSubmitHandler}>
      <div className="heading-4 heading-4--white">Login</div>
      {loading && <Spinner />}
      {error && !loading ? <Message>{error}</Message> : ""}
      <input
        className="form_field"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Name"
      />
      <input
        className="form_field"
        type="email"
        value={email}
        onChange={(e) => {
          setemail(e.target.value);
        }}
        placeholder="Email"
      />
      <input
        className="form_field"
        type="password"
        value={password}
        onChange={(e) => {
          setpassword(e.target.value);
        }}
        placeholder="Password"
      />

      <button className="btn btn--white" type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
