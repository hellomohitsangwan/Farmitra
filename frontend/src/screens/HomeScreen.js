import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";

// import axios from "axios";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
const HomeScreen = () => {
  const productList = useSelector((state) => state.productList); //choose from whatever in our store
  const { loading, products, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  // const products = [];
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading . . . .</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      {/* <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row> */}
    </>
  );
};

export default HomeScreen;
