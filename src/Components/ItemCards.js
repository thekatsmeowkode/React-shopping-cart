import React from 'react'
import { Card, Button, Form, Row, Col, Img } from 'react-bootstrap';
import {CartContext} from './CartContext'
import {useContext} from 'react'

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
                <>
                    <Form as={Row}>
                        <Form.Label column='true' sm='6'>In Cart: {itemQuantity} </Form.Label>
                        <Col sm='6' >
                            <Button sm='6' onClick={() => {cart.add1ToCart(item.id)}} className='mx-2'>+</Button>
                            <Button sm='6' onClick={() => {cart.delete1FromCart(item.id)}} className='mx-2'>-</Button>
                        </Col>
                    </Form>
                    <Button variant='danger' onClick={() => cart.deleteItemFromCart(item.id)} className='my-2'> Remove From Cart</Button>
                </> : 
                <Button onClick={() => cart.add1ToCart(item.id)} variant='primary'>Add To Box</Button>}
            </Card.Body>
        </Card>
    )
}