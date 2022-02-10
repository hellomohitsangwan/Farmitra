import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
//redux files
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../components/Slider";
import downArrow from "../assets/downArrow.svg";
import Footer from "../components/Footer";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const HomeScreen = ({ match }) => {
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const keyword = match.params.keyword;

  const productList = useSelector((state) => state.productList); //choose from whatever in our store
  const { loading, products, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);
  return (
    <>
      <Slider />
      <div className="allProducts-title">
        <p>All Products</p>
        <button className="btn" onClick={executeScroll}>
          <img src={downArrow} alt="" className="arrow" />
        </button>
        <div className="ref" ref={myRef}></div>
        <div className="gap1"></div>
      </div>
      {products?.length !== 0 ? (
        <div className="latest">
          <p className="latest-product">Latest Products</p>
          <div className="underline1"></div>
        </div>
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
