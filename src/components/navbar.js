import React from 'react'
import { Navbar,Nav,Form,} from 'react-bootstrap';
import Logo from '../images/Logo.png'
import { Link } from 'react-router-dom';
export default function Navbars(){

    return(
        <div ClassName="d-flex">

<Navbar bg="light" variant="light">
<img src={Logo} alt="Lezzoo" width="80px" height="70px"/>
    <Nav className="mr-auto">
      <Link to="/">Home</Link>
      <Link to="/Stores">Stores</Link>
      <Link to="/Discount">Discount</Link>
    </Nav>
    <span class="navbar-text">
     Admin Panel
    </span>
    <Form inline>
      
    </Form>
  </Navbar>
 
    </div>
    
    )

}