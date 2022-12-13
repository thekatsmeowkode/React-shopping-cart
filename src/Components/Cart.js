import React, { useState, useContext } from "react";
import { getProductName } from "./ProductsStore.js";
import { Button, Offcanvas, Table } from "react-bootstrap";
import {CartContext} from './CartContext'

export function Cart(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useContext(CartContext)
  let itemCount = props.itemCount;
  let itemsCurrentlyInCart = props.itemsCurrentlyInCart

  return (
    <React.Fragment>
      <Button variant="primary" onClick={handleShow}>
        Cart {itemCount}
      </Button>

      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
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
                  <td >{cart.getNumericItemQuantity(item.id)}</td>
                  <td >{getProductName(item.id)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
}
