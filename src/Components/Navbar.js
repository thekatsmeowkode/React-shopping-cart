import {Navbar} from 'react-bootstrap'
import {useContext} from 'react'
import {CartContext} from './CartContext'
import {Cart} from './Cart'
import goldFoil from '../imgs/gold-foil.jpg'

export function NavbarComponent() {
    const cart = useContext(CartContext)
    const itemsCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <Navbar expand='sm' style={{backgroundColor:'black', color:'white', fontSize:'3rem'}}>
            <Navbar.Brand style={{color:'white', padding: '1rem'}} href='/'>Candy Shop</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse style={{padding: '1rem'}} className='justify-content-end'>
                <Cart itemCount={itemsCount} itemsCurrentlyInCart={cart.items} ></Cart>
            </Navbar.Collapse>
        </Navbar>
    )
}