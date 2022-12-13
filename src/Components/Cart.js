import React, {useState} from 'react'
import {Button, Offcanvas} from 'react-bootstrap'

export function Cart(props) {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    let itemCount = props.itemCount

    return (
    <React.Fragment>
        <Button variant='primary' onClick={handleShow}>
            Cart {itemCount}
        </Button>

        <Offcanvas placement='end' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Item Name</th>
                    <th>Quantity</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
                </Table>

                {props.itemsCurrentlyInCart.map((item) => <p key={item.id}>{item.id}</p>)}
            </Offcanvas.Body>
        </Offcanvas>
    </React.Fragment>)

}
