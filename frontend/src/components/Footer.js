import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./components.css";
import InstagramIcon from "@material-ui/icons/Instagram";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="mt-5">
          {/* <Col className="text-center , py-3">Copyright Vedhut &copy;</Col> */}
          <Col className="text-center , py-3">
            <p className="heading">Customer service</p>
            <div>
              <a
                target="blank"
                href="https://hellomohitsangwan.github.io/ms/projects.html"
              >
                Terms and technology
              </a>{" "}
            </div>
            <div>
              <a
                target="blank"
                href="https://hellomohitsangwan.github.io/ms/projects.html"
              >
                Delievery Information
              </a>{" "}
            </div>
            <div>
              <a
                target="blank"
                href="https://hellomohitsangwan.github.io/ms/projects.html"
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <a
                target="blank"
                href="https://hellomohitsangwan.github.io/ms/projects.html"
              >
                Refund and cancellation
              </a>
            </div>
          </Col>
          <Col className="text-center , py-3">
            <p className="heading">Social links</p>
            <div>
              <InstagramIcon fontSize="small" />
              <a
                className="ml-2"
                target="blank"
                href="https://hellomohitsangwan.github.io/ms/projects.html"
              >
                Instagram
              </a>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
