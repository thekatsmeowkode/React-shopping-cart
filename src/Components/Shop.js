import React from "react";
import { Row, Col, CardGroup } from "react-bootstrap";
import { productsArray } from "./ProductsStore.js";
import { ItemCard } from "./ItemCards";

export function Shop() {
  return (
      <CardGroup className='m-3'>
        <Row xs={1} sm={4} md={6} className="rows" >
          {productsArray.map((product) => {
            return (
              <Col key={product.id} align="center" className='m-3'>
                <ItemCard product={product} itemName={product.name}></ItemCard>
              </Col>
            );
          })}
        </Row>
      </CardGroup>
  );
}
