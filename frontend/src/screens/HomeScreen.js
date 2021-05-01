import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
// import products from "../products";
import Product from "../components/Product";

import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data);
    };
    //   setProducts(res.data);
    fetchProduct();
  }, []);
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
