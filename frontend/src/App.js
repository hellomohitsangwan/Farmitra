import "./App.css";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductScreen from "../src/screens/ProductScreen";
import CartScreen from "../src/screens/CartScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-4">
        {/* <Header /> */}
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        </Container>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
