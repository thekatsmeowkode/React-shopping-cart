import {Button, Container, Navbar} from 'react-bootstrap'
import {useState, useContext} from 'react'
import {CartContext} from './CartContext'
import {Cart} from './Cart'
import CardHeader from 'react-bootstrap/esm/CardHeader'

export function NavbarComponent() {
    const cart = useContext(CartContext)
    const itemsCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <Navbar expand='sm'>
            <Navbar.Brand href='/'>Candy Shop</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Cart itemCount={itemsCount} itemsCurrentlyInCart={cart.items} ></Cart>
            </Navbar.Collapse>
        </Navbar>
    )
}