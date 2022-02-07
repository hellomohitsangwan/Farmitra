import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";
import cartBackground from "../assets/cartBackground.svg"
import "./Screen.css";
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
  //match is to get routes in linked
  //location is to get query params in link
  //history is to redirect to a link
  const productId = match.params.id;

  // location.qty it gives me ?qty=1
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
      history.push("/cart");
    }
    console.log(qty);
  }, [dispatch, productId, qty, history]);
  console.log(cartItems);
  return (
    <div>
    <div className="cart-background"><img src={cartBackground} alt="" /></div>
      <Row>
        <Col md={8}>
          <h1 className="cart-title">Your Shopping cart</h1>
          <div className="green-underline"></div>
          <div className="black-underline"></div>
          {cartItems.length === 0 ? (
            <Message children="Your cart is empty">
              <Link to="/home">Go Back</Link>
            </Message>
          ) : (

              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item>
                    <Row>
                      <Col md={2}>
                        <Image
                          src={item.images[0].url}
                          fluid
                          rounder
                          className="cart-image"
                        />
                      </Col>
                      <Col md={3}>
                        <Link
                          to={`/product/${item.product}`}
                          className="cart-product-title"
                        >
                          {item.name}
                        </Link>
                      </Col>
                      <div className="cart-status">
                      <Col md={2}>
                        <span className="cart-price">Price : </span>₹
                        {item.price}
                        <span className="cart-kg">/kg</span>
                      </Col>
                      <Col>
                        <p>
                          <span className="cart-price">Status : </span> In Stock
                        </p>
                      </Col>
                      <Col md={2}>
                        <span className="cart-price">Quantity : </span>
                        <Form.Control
                          as="select"
                          value={item.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((c) => (
                            <option value={c + 1} Key={c + 1}>
                              {c + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => removeFromCartHandler(item.product)}
                          className="cart-remove"
                        >
                          <p className="remove">Remove</p>
                        </Button>
                      </Col>
                      </div>
                    </Row>
                    <div className="black-underline"></div>
                  </ListGroup.Item>
                  
                ))}
              </ListGroup>
          )}
          
        </Col>
        <Col md={4}>
          <Card className="checkout-card">
          <div className="checkout-title">
            <p>Price Details</p>
          </div>
          <div className="checkout-underline"></div>
            <ListGroup variant="flush">
            <div className="gap"></div>
              <ListGroup.Item>
                <p className="subtotal">
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </p>
                <div className="total-amount">
                <span className="total">Total amount : </span> ₹{" "}
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
                  </div>
              </ListGroup.Item>
              <div className="gap"></div>
              <div className="checkout-underline"></div>
              
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn btn-block checkout-btn"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed To Checkout
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartScreen;
