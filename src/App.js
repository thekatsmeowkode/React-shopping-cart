import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import { Cart } from "./Components/Cart";
import { Shop } from "./Components/Shop";
import { Home } from "./Components/Home";
import { Checkout } from "./Components/Checkout";
import { NavbarComponent } from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { CartMaker } from "./Components/CartContext";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <CartMaker>
        {/* <Container> */}
          <NavbarComponent></NavbarComponent>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </BrowserRouter>
        {/* </Container> */}
      </CartMaker>
    </React.Fragment>
  );
}

export default App;
