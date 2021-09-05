import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
//redux files
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const productList = useSelector((state) => state.productList); //choose from whatever in our store
  const { loading, products, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);
  return (
    <>
      {products?.length !== 0 ? (
        <h1>Latest Products</h1>
      ) : (
        !loading && (
          <>
            <h1 className="text-center , py-3">Sorry no results found !!</h1>
            <p className="text-center">
              please check your spelling or try searching for something else
            </p>
          </>
        )
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error} />
      ) : (
        <Row className="mt-4">
          {products.map((product) => (
            <Col key={product._id} xs={6} sm={6} md={4} lg={3} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <Footer />
    </>
  );
};

export default HomeScreen;
