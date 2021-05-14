import axios from "axios";
import {
  USER_LOGOUT,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(USER_LOGIN_REQUEST);
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
