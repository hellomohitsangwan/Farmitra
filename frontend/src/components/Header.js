import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userActions";
import logo from "../images/logo1.svg"
import cart from "../assets/cart.svg"
import "../assets/navbar.css"
import dropdown from "../assets/dropdown.svg"
import { useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
    {location.pathname==='/' ? null : 
    <nav className='navbar'>
      <div className="nav-center">
        <Link to='/home'>
          <img src={logo} alt="logo" className = "logo"/>
        </Link>
        <ul className='nav-links'>
          <li><Link to='/'>About us</Link></li>
          <li><Link to='/topProducts'>Trending Products</Link></li>
          {/* <li><Link to='/about'>About</Link></li> */}
          {/* <li><Link to='/login'>SignIn</Link></li> */}
          {userInfo ? (
            <div className="info">
              <button className='info-button'>Hi! {userInfo.name.split(" ")[0]} <img src={dropdown} alt="" /></button>
                <ul>
                  <li><Link to='/profile'>Profile</Link></li>
                  <li><p onClick={logoutHandler} className='logout'>Logout</p></li>
                </ul>
            </div>
          ):(
            <Link to="/login">SignIn</Link>
          )}
          {userInfo && userInfo.isAdmin &&(
            <div>
              <Link to='/dashboard'>Dashboard</Link>
              {/* <br />
              <Link to="/admin/productlist">My Products</Link>
              <br />
              <Link to="/admin/orderList">Orders</Link> */}
            </div>
          )}
          <li><Link to="/cart"><img src={cart} alt="" width={"48px"} /></Link></li>
        </ul>
      </div>
    </nav>
    }
    </>
    
  );
};

export default Header;




// const Header = () => {
//   const dispatch = useDispatch();

//   const userLogin = useSelector((state) => state.userLogin);
//   const { userInfo } = userLogin;

//   const logoutHandler = () => {
//     dispatch(logout());
//   };
//   return (
//     <header>
//       <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
//         <Container>
//           {/* {" "} */}
//           <Link to="/">
//             <img className="img-responsive mr-4" src={logo} alt="logo"></img>
//           </Link>
//           <LinkContainer to="/">
//             <Navbar.Brand>VedHut</Navbar.Brand>
//           </LinkContainer>{" "}
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <div className="col-12 col-md-6  mt-md-0 ml-auto mr-auto">
//               <Route
//                 render={({ history }) => <SearchBox history={history} />}
//               />
//             </div>
//             <Nav className="ml-auto">
//               {/* <LinkContainer to="/wishlist">
//                 {/* {" "} */}
//               {/* <Nav.Link>Wishlist</Nav.Link>
//               </LinkContainer> */}
//               <LinkContainer to="/cart">
//                 {/* {" "}/ */}
//                 <Nav.Link>
//                   {/* {" "} */}
//                   <i className="fas fa-shopping-cart"></i> Cart
//                 </Nav.Link>
//               </LinkContainer>
//               {userInfo ? (
//                 <NavDropdown title={userInfo.name} id="username">
//                   <LinkContainer to="/profile">
//                     <NavDropdown.Item>Profile</NavDropdown.Item>
//                   </LinkContainer>
//                   <NavDropdown.Item onClick={logoutHandler}>
//                     Logout
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               ) : (
//                 <LinkContainer to="/login">
//                   {/* {" "} */}
//                   <Nav.Link>
//                     {/* {" "} */}
//                     <i className="fas fa-user"></i> Sign-in
//                   </Nav.Link>
//                 </LinkContainer>
//               )}
//               {userInfo && userInfo.isAdmin && (
//                 <NavDropdown title="Admin panel" id="adminmenu">
//                   <LinkContainer to="/admin/userlist">
//                     <NavDropdown.Item>Users</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to="/admin/productlist">
//                     <NavDropdown.Item>Products</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to="/admin/orderlist">
//                     <NavDropdown.Item>Orders</NavDropdown.Item>
//                   </LinkContainer>
//                 </NavDropdown>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;
