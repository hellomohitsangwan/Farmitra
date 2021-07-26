import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./components.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center , py-3">Copyright Ganga &copy;</Col>
          <Col className="text-center , py-3">
            <p className="heading">Customer service</p>
            <a
              target="blank"
              href="https://hellomohitsangwan.github.io/ms/projects.html"
            >
              go
            </a>
            <p>dwdsd</p>
            <p>dwdsd</p>
          </Col>
          <Col className="text-center , py-3">Copyright Ganga &copy;</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
