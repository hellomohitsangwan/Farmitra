import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
//redux files
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
const HomeScreen = () => {
  const productList = useSelector((state) => state.productList); //choose from whatever in our store
  const { loading, products, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error} />
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
