import React, { useState, useContext } from "react";
import { getProductName } from "./ProductsStore.js";
import { Button, Offcanvas, Table, Container } from "react-bootstrap";
import { CartContext } from "./CartContext";
import fonts from "./fonts.css";

export function Cart(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useContext(CartContext);
  let itemCount = props.itemCount;
  let itemsCurrentlyInCart = props.itemsCurrentlyInCart;

  return (
    <React.Fragment>
      <Button variant="info" onClick={handleShow}>
        Cart {itemCount}
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{fontSize: '50px'}} bsPrefix="header">Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Item Name</th>
              </tr>
            </thead>
            <tbody>
              {itemsCurrentlyInCart.map((item) => (
                <tr key={item.id}>
                  <td>{cart.getNumericItemQuantity(item.id)}</td>
                  <td>{getProductName(item.id)}</td>
                  <td>
                    {" "}
                    <Button variant='danger' onClick={() => cart.deleteItemFromCart(item.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Container>
            <p>Cart Total: {cart.getTotal()} </p>
            <Button variant='info' onClick={() => {cart.emptyCart()}}>Check Out</Button>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}
