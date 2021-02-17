import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../constants/userConstants";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_RESET,
  ORDER_DETAILS_RESET,
} from "../constants/orderConstants";
import { CART_RESET } from "../constants/cartConstants";

export const demoUser = (email, password) => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  const config = { headers: { "Content-Type": "application/json" } };

  const { data } = await axios.post(
    "/api/users/login",
    { email, password },
    config
  );
  dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
};

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItem");
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("paymentMethod");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: CART_RESET });
  dispatch({ type: ORDER_CREATE_RESET });
  dispatch({ type: ORDER_DETAILS_RESET });
};
