import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
        <Container>
          {/* {" "} */}
          <LinkContainer to="/">
            <Navbar.Brand>Ganga</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/wishlist">
                {/* {" "} */}
                <Nav.Link>Wishlist</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                {/* {" "}/ */}
                <Nav.Link>
                  {/* {" "} */}
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                {/* {" "} */}
                <Nav.Link>
                  {/* {" "} */}
                  <i className="fas fa-user"></i> Sign-in
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
