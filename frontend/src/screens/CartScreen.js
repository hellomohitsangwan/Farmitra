import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import Message from "../components/Message";

const CartScreen = ({ match, location, history }) => {
  //macth is to get routes in linked
  //location is to get query params in link
  //history is to redirect to a link
  const productId = match.params.id;

  // location.qty it gives me ?qty=1
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
    console.log(qty);
  }, [dispatch, productId, qty]);
  return <div>cart</div>;
};

export default CartScreen;
