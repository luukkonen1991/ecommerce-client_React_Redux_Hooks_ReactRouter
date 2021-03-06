import axios from "axios";

import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    user: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
    token: null,
    user: null,
  };
};

export const authSignIn = (email, password, callback) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    email: email,
    password: password,
  };
  axios
    .post("/api/v1/auth/login", authData)
    .then((response) => {
      console.log(response);
      dispatch(authSuccess(response.data.token, response.data.userId));
      localStorage.setItem("id", response.data.userId);
    })
    .then(callback)
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err.response.data.error));
    });
};

export const authRegister = (
  firstName,
  lastName,
  email,
  password,
  callback
) => (dispatch) => {
  dispatch(authStart());
  const authData = {
    firstName,
    lastName,
    email,
    password,
  };
  console.log(authData);
  axios
    .post("/api/v1/auth/register", authData)
    .then((response) => {
      console.log(response);
      dispatch(authSuccess(response.data.token, response.data.userId));
      localStorage.setItem("id", response.data.userId);
    })
    .then(callback)
    .catch((err) => {
      console.log(err);
      dispatch(authFail(err.response.data.error));
    });
};

export const authSignout = (callback) => {
  localStorage.removeItem("id");
  return (dispatch) => {
    axios
      .get("/api/v1/auth/logout")
      .then((response) => {
        dispatch(authLogout());
      })
      .then(callback);
  };
};
