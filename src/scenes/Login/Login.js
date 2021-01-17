import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { demoUser, login } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
import Spinner from "../../components/Spinner";

const Login = ({ history, location }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

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
    dispatch(login(email, password));
  };

  const SubmitDemoUser = () => {
    setemail("tira@gmail.com");
    setpassword("123456");
    dispatch(demoUser(email, password));
  };

  return (
    <form className="login_form" onSubmit={onSubmitHandler}>
      <div className="heading-4 heading-4--white">Login</div>
      {loading && <Spinner />}
      {error && !loading ? <Message>{error}</Message> : ""}
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
        Login
      </button>
      <button className="btn btn--white" type="submit" onClick={SubmitDemoUser}>
        Demo User
      </button>
      <div className="heading-5 heading-5--white">
        New User?{" "}
        <Link
          to={redirect ? `/register?redirect=${redirect}` : "/register"}
          className="heading-5--black"
        >
          Register
        </Link>{" "}
      </div>
    </form>
  );
};

export default Login;
