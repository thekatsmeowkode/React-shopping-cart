import React from 'react'
import {Row, Col, CardGroup} from 'react-bootstrap'
import {productsArray} from './ProductsStore.js'
import {ItemCard} from './ItemCards'

export function Shop() {
    return (<React.Fragment>
        <CardGroup>
        <Row xs={1} md={4} className='rows'>
            {productsArray.map((product) => {
            return (
            <Col key={product.id} align='center'>
                <ItemCard product={product} itemName={product.name}></ItemCard>
            </Col>)})}
        </Row>
        </CardGroup>
    </React.Fragment>)
}