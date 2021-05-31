import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_DELETE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstatnts";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  //getState is just toState of whatever reducer we want preset in our state
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_DELETE_ITEM,
    payload: id,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => async (dispatch, getState) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};
