import React from 'react'
import { Card, Button, Form, Row, Col, Img } from 'react-bootstrap';
import {CartContext} from './CartContext'
import {useContext} from 'react'
import { productsArray } from './ProductsStore';
import ccs from '../imgs/chocolate-covered-strawberry.jpg'
import cc from '../imgs/chocolate-cup.jpg'
import csc from '../imgs/chocolate-sprinkle-chocolate.jpg'
import ct from '../imgs/chocolate-turtle.jpg'
import gdt from '../imgs/golden-drop-truffle.jpg'
import odt from '../imgs/orange-dreamsicle-truffle.jpg'
import pbb from '../imgs/peanut-butter-ball.jpg'
import rb from '../imgs/rum-ball.jpg'
import tct from '../imgs/toffee-cream-truffle.jpg'
import vsc from '../imgs/vanilla-stripe-chocolate.jpg'
import wcpc from '../imgs/white-chocolate-praline-cup.jpg'
import wct from '../imgs/white-chocolate-truffle.jpg'

export function ItemCard(props) {
    const item = props.product;
    const cart = useContext(CartContext);
    const itemQuantity = cart.getProductQuantity(item.id)

    return (
        <Card>
            <Card.Body>
                <Card.Img variant='top' src={item.image}/>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>${item.price}</Card.Text>
                {itemQuantity > 0 ? 
                <React.Fragment>
                    <Form as={Row}>
                        <Form.Label column='true' sm='6'>In Cart: {itemQuantity} </Form.Label>
                        <Col sm='6' >
                            <Button sm='6' onClick={() => {cart.add1ToCart(item.id)}} className='mx-2'>+</Button>
                            <Button sm='6' onClick={() => {cart.delete1FromCart(item.id)}} className='mx-2'>-</Button>
                        </Col>
                    </Form>
                    <Button variant='danger' onClick={() => cart.deleteItemFromCart(item.id)} className='my-2'> Remove From Cart</Button>
                </React.Fragment> : 
                <Button onClick={() => cart.add1ToCart(item.id)} variant='primary'>Add To Box</Button>}
            </Card.Body>
        </Card>
    )
}