import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./components.css";
const Product = ({ product }) => {
  return (
    <div className="card p-3 rounded">
      <img
        className="card-img-top mx-auto"
        src={product.images[0].url}
        alt="image"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">
          <Link to={`/product/${product._id}`}>{product.name}</Link>
        </h5>
        <div className="ratings mt-auto">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </div>
        <p className="card-text">₹{product.price}</p>
        <Link
          to={`/product/${product._id}`}
          id="view_btn"
          className="btn btn-block"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Product;
