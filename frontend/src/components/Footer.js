import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./components.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import ButtonMailto from "./ButtonMailto";
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
                href="https://drive.google.com/file/d/1IipMat1g6YaFBiIuE8tgUzFItbd4_EUy/view?usp=sharing"
              >
                Terms and Conditions
              </a>{" "}
            </div>
            <div>
              <a
                target="blank"
                href="https://drive.google.com/file/d/1mu0bfrxuI5rHKtmKb6JISuUIyvrRTk1Q/view?usp=sharing"
              >
                Delievery Information
              </a>{" "}
            </div>
            <div>
              <a
                target="blank"
                href="https://drive.google.com/file/d/1WqOp_HyJ3hfndhH8SIASu_l4LI4QIwL3/view?usp=sharing"
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <a
                target="blank"
                href="https://drive.google.com/file/d/1FaSvNaCj9WMYLz0LeBlcWNtaCCWBGsrd/view?usp=sharing"
              >
                Refund and cancellation
              </a>
            </div>
            <div>
              <ButtonMailto
                label="International/Bulk orders "
                mailto="mailto:contactvedhut@gmail.com"
              />
            </div>
          </Col>
          <Col className="text-center , py-3">
            <p className="heading">Social links</p>
            <div>
              <InstagramIcon fontSize="small" />
              <a
                className="ml-2"
                target="blank"
                href="https://instagram.com/vedhut_?utm_medium=copy_link"
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
