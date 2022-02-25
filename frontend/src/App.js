import "./App.css";
// import Header from "./components/Header";
// import { Container } from "react-bootstrap";
// import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "../src/screens/ProductScreen";
import CartScreen from "../src/screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import Test from "./components/Test";
import Header from "./components/Header";
import UserEditScreen from "./screens/USerEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import MainFooter from "./components/MainFooter";
import NewProductScreen from "./screens/NewProductScreen";
import LandingScreen from "./screens/LandingScreen";
import RecomScreen from "./screens/RecomScreen";
import DashboardScreen from "./screens/DashboardScreen";
import TopProductsScreen from "./screens/TopProductsScreen";
import ReviewScreen from "./screens/ReviewScreen";
import Page1 from "./screens/Page1/index";
import LandingHomeScreen from "./screens/LandingHomeScreen";
const App = () => {
  return (
    <Router>
      <main>
        {/* <Container> */}
        <Route path="/" component={LandingScreen} exact />
        {/* <Header /> */}
        <Route path="/topProducts" component={TopProductsScreen} />
        <Route path="/Reviews" component={ReviewScreen} />
        <Route path="/recommendations" component={RecomScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/dashboard" component={DashboardScreen} />
        <Route path="/test" component={Test} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path="/payment" component={PaymentScreen} />
        <Route path="/placeorder" component={PlaceOrderScreen} />
        <Route path="/order/:id" component={OrderScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={ProfileScreen} />
        <Route path="/admin/userlist" component={UserListScreen} />
        <Route path="/admin/user/:id/edit" component={UserEditScreen} />
        <Route path="/admin/productlist" component={ProductListScreen} />
        <Route path="/admin/product/new" component={NewProductScreen} />
        <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        <Route path="/admin/orderlist" component={OrderListScreen} />
        <Route path="/search/:keyword" component={HomeScreen} />
        <Route path="/home" component={HomeScreen} exact />
        <Route path="/page1" component={Page1} />
        {/* </Container> */}
        <MainFooter />
      </main>
      {/* <MainFooter /> */}
      <Route path="/LandingScreen" component={LandingScreen} exact />
      <Route path="/LandingHomeScreen" component={LandingHomeScreen} exact />
    </Router>
  );
};

export default App;
