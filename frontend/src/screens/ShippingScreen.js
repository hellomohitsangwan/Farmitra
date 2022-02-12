import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import "./Screen.css"
import Footer from "../components/Footer"
const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ address, city, postalCode, country, state })
    );
    history.push("/payment");
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);
  return (
    <>
    <FormContainer>
      <CheckoutSteps step1 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mb-3"
          ></Form.Control>
        </Form.Group>{" "}
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mb-3"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter your state name"
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="mb-3"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalCode">
          <Form.Label>Pincode</Form.Label>
          <Form.Control
            type="postalCode"
            placeholder="enter your pincode here"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="mb-3"
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mb-3"
          ></Form.Control>
        </Form.Group>
        <Button className="my-2" type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
    <div className="gap"></div>
    <div className="gap"></div>
    <div className="gap"></div>
    <Footer/>
    </>
  );
};

export default ShippingScreen;
