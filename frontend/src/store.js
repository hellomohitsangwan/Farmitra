import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailReducer,
} from "./reducers/productListReducers";
import { cartReducer } from "./reducers/cartReducers";
import { userLoginReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});
const cartItemsFromState = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromState = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  cart: { cartItems: cartItemsFromState },
  userLogin: { userInfo: userInfoFromState },
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
