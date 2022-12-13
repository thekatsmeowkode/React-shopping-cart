import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {productsArray} from './ProductsStore.js'
import stylesheet from '../App.css'
import {ItemCard} from './ItemCards'
// import ccs from '../imgs/chocolate-covered-strawberry.jpg'
// import cc from '../imgs/chocolate-cup.jpg'
// import ct from '../imgs/chocolate-turtle.jpg'
// import gdt from '../imgs/golden-drop-truffle.jpg'
// import odt from '../imgs/orange-dreamsicle-truffle.jpg'
// import pbb from '../imgs/peanut-butter-ball.jpg'
// import rb from '../imgs/rum-ball.jpg'
// import tct from '../imgs/toffee-cream-truffle.jpg'
// import vsc from '../imgs/vanilla-stripe-chocolate.jpg'
// import wcpc from '../imgs/white-chocolate-praline-cup.jpg'
// import wct from '../imgs/white-chocolate-truffle.jpg'

export function Shop() {
    return (<React.Fragment>
        <Row xs={1} md={4} className='rows'>
            {productsArray.map((product) => {
            return (
            <Col key={product.id} align='center'>
                <ItemCard product={product}></ItemCard>
            </Col>)})}
        </Row>
    </React.Fragment>)
}