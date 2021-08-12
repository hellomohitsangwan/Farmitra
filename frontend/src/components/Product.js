import React from "react";
import { Card, CardImg } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./components.css";
const Product = ({ product }) => {
  return (
    // <Card className="my-3 p-3 rounded">
    //   <Link to={`/product/${product._id}`}>
    //     <Card.Img src={product.image} variant="top" />
    //   </Link>
    //   <Card.Body>
    //     <Link to={`/product/${product._id}`}>
    //       <Card.Title as="div">
    //         <strong>{product.name}</strong>
    //       </Card.Title>
    //     </Link>
    //     <Card.Text as="div">
    //       <Rating value={product.rating} text={`${product.numReviews}`} />
    //     </Card.Text>
    //     <Card.Text as="h3">₹{product.price}</Card.Text>
    //     <Link
    //       to={`/product/${product._id}`}
    //       id="view_btn"
    //       className="btn btn-block"
    //     >
    //       View Details
    //     </Link>
    //   </Card.Body>
    // </Card>
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
        {/* <div className="ratings mt-auto">
          <div className="rating-outer">
            <div
              className="rating-inner"
              style={{ width: `${(product.ratings / 5) * 100}%` }}
            ></div>
          </div>
          <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
        </div> */}
        <p className="card-text">${product.price}</p>
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
