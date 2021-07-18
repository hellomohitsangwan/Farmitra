import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
} from "./reducers/productListReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailReducer,
  userupdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from "./reducers/userReducers";
import {
  ordeCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  productDelete: productDeleteReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  userUpdateProfie: userupdateProfileReducer,
  orderCreate: ordeCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderMyList: orderListMyReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
});
const cartItemsFromState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const shippingAddressFromStorage = localStorage.getItem("shippngAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : null;
// const userInfoFromState = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;
// var userInfoFromState;
// const getUserDetails = async () => {
//   const res = await axios.get("/api/gettokenstatus");
//   if (res.status === 200) {
//     userInfoFromState = res.body;
//   }
// };

// getUserDetails();
const initialState = {
  cart: {
    cartItems: cartItemsFromState,
    shippingAddress: shippingAddressFromStorage,
  },
  // userLogin: { userInfo: async () => {
  //   const res = await axios.get("/api/gettokenstatus");
  //   if (res.status === 200) {
  //     userInfo = res.body;
  //   } }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// set up a store subscription listener
// to store the users token in localStorage

// initialize current state from redux store for subscription comparison
// preventing undefined error
// let currentState = store.getState();

// store.subscribe(() => {
//   // keep track of the previous and current state to compare changes
//   let previousState = currentState;
//   currentState = store.getState();
//   // if the token changes set the value in localStorage and axios headers
//   if (previousState.auth.token !== currentState.auth.token) {
//     const token = currentState.auth.token;
//     setAuthToken(token);
//   }
// });

export default store;
