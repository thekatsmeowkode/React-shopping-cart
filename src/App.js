
import './App.css';
import {Route, Routes, Link} from 'react-router-dom'
import React from 'react';
import {Cart} from './Components/Cart'
import {Shop} from './Components/Shop'
import {Home} from './Components/Home'
import {Checkout} from './Components/Checkout'
import {NavbarComponent} from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';


function App() {
  return (
    <React.Fragment>
      <Container>
      <NavbarComponent></NavbarComponent>
      </Container>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/cart'>Cart</Link></li>
          <li><Link to='/checkout'>Checkout</Link></li>
        </ul>
      </nav>
    <Routes>
      <Route path = '/' element={<Home/>} />
      <Route path = '/shop' element = {<Shop /> } />
      <Route path = '/cart' element = {<Cart />} />
      <Route path = '/checkout' element = {<Checkout/>}/>
    </Routes>
    </React.Fragment>
  );
}

export default App;
