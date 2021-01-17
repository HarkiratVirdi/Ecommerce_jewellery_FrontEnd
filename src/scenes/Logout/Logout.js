import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Logout = ({ history }) => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(logout());

    history.push("/");
  }, [history, dispatch]);

  return <></>;
};

export default Logout;
