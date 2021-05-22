import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";
import axios from "axios";
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const res = await axios.get("/api/products");
    if (res.status === 500) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: "check your network connection",
      });
      return;
    }
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: res.data });
    console.log(res);
  } catch (err) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.status === 500
          ? "check your network connection"
          : err.response && err.response.status !== 500
          ? err.response.data.message
          : "check your network connection",
      // credits < 30 ? "freshman" : credits <= 59 ? "sophomore"
      // err.response && err.response.data.message
      //   ? err.response.data.message
      //   : "check your network connection"
      //   ? err.response.status === 500
      //   : "check your network connection",
    });
  }
};
export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
