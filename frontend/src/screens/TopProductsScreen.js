import React, { useState } from "react";
import "./Screen.css";
import axios from "axios";
import Product from "../components/Product";
import { Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import Loader from "../components/Loader";
import Footer from "../components/Footer";

const TopProductsScreen = () => {
  const [loading, setLoading] = useState(true);
  const [topProducts, setTopProducts] = useState([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/api/products/top`);
      setTopProducts(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  // fetchData();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {topProducts?.length !== 0 ? (
        <div className="latest">
          <p className="latest-product">Trending Products</p>
          <div className="underline1"></div>
          <div className="gap"></div>
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
      ) : (
        <Row className="mt-4">
          {topProducts.map((product) => (
            <Col key={product._id} xs={6} sm={6} md={4} lg={3} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
      <Footer/>
    </>
  );
};
export default TopProductsScreen;
