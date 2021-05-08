import axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstatnts";

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
