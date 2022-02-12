import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import "./Screen.css"
const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const [paymentMethod, setPaymentMethod] = useState("");
  const [isdisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // if (!userInfo) {
  //   history.push("/login");
  // }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);
  useEffect(() => {
    if (paymentMethod === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [paymentMethod]);
  return (
    <FormContainer>
      <CheckoutSteps step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Methods</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="Razor pay/net banking"
              id="razorpay"
              name="paymentMethod"
              value="razorpay"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
            {/* //for addding second method */}
            <Form.Check
              type="radio"
              label="Cash on delievery"
              id="cod"
              name="paymentMethod"
              value="Cash on delievery"
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button className="cont" type="submit" variant="primary" disabled={isdisabled}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
