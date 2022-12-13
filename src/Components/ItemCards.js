import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import {CartContext} from './CartContext'

function ItemCard(props) {
    const item = props.product;

    return (
        <Card>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant='primary'>Add To Box</Button>
            </Card.Body>
        </Card>
    )
}