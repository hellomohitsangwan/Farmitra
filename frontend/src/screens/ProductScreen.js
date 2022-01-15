import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProductDetails } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const submitHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };
  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger" children={error} />
      ) : (
        <Row>
          <Col sm={12} md={6}>
            <Carousel pause="hover">
              {product?.product?.images &&
                product?.product?.images.map((image) => (
                  <Carousel.Item key={image.public_id}>
                    <img
                      className="d-block w-100 product-images"
                      src={image.url}
                      alt={product?.product?.title}
                    />
                  </Carousel.Item>
                ))}
            </Carousel>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>{product?.product?.name}</h2>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                <Rating
                  value={product?.product?.rating}
                  text={`${product?.product?.numReviews} reviews`}
                />
              </ListGroup.Item> */}{" "}
              <ListGroup.Item>Price: ₹ {product?.product?.price} </ListGroup.Item>
              <ListGroup.Item>
                Description: {product?.product?.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price</Col>
                    <Col>
                      <strong>₹{product?.product?.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      {product?.product?.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product?.product?.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Quantity</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product?.product?.countInStock).keys()].map((c) => (
                            <option value={c + 1} Key={c + 1}>
                              {c + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={submitHandler}
                    className="btn-block"
                    type="button"
                    disabled={product?.product?.countInStock === 0}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <p>{product?.user?.name}</p>
            <p>{product?.user?.email}</p>
            <p>{product?.user?.createdAt}</p>
            <p>{product?.user?.updatedAt}</p>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;