import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import { Link, Route } from "react-router-dom";
import SearchBox from "./SearchBox";
import logo from "../data/images/vh-logo.png";
import "./components.css";
const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <header>
      <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
        <Container>
          {/* {" "} */}
          <Link to="/">
            <img className="img-responsive mr-2" src={logo} alt="logo"></img>
          </Link>
          <LinkContainer to="/">
            <Navbar.Brand>Vedhut</Navbar.Brand>
          </LinkContainer>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="col-12 col-md-6  mt-md-0 ml-auto mr-auto">
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </div>
            <Nav className="ml-auto">
              {/* <LinkContainer to="/wishlist">
                {/* {" "} */}
              {/* <Nav.Link>Wishlist</Nav.Link>
              </LinkContainer> */}
              <LinkContainer to="/cart">
                {/* {" "}/ */}
                <Nav.Link>
                  {/* {" "} */}
                  <i className="fas fa-shopping-cart"></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  {/* {" "} */}
                  <Nav.Link>
                    {/* {" "} */}
                    <i className="fas fa-user"></i> Sign-in
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Admin panel" id="adminmenu">
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/productlist">
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
