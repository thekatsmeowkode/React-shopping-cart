import { Navbar, Nav } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Cart } from "./Cart";
import fonts from "./fonts.css";

export function NavbarComponent() {
  const cart = useContext(CartContext);
  const itemsCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar expand="sm" variant="dark" bg="dark">
      <Navbar.Brand
        style={{ color: "white", padding: "1rem", fontSize: "30px" }}
        className="header-brand"
        href="/"
      >
        The Confectionary
      </Navbar.Brand>
      <Nav.Link
        style={{ fontSize: "16px", color: "white", marginLeft: "10px" }}
        href="/"
      >
        Home
      </Nav.Link>
      <Nav.Link
        style={{ fontSize: "16px", color: "white", marginLeft: "10px" }}
        href="/Shop"
      >
        Shop
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse
        style={{ padding: "1rem" }}
        className="justify-content-end"
      >
        <Cart itemCount={itemsCount} itemsCurrentlyInCart={cart.items}></Cart>
      </Navbar.Collapse>
    </Navbar>
  );
}
