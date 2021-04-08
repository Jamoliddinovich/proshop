import {Navbar,Nav,Container} from "react-bootstrap"
import React from 'react'

const header = ()=> {
    return (
        <>
           <Navbar bg="dark" expand="lg" variant="dark">
 <Container>
 <Navbar.Brand href="#home">ProShop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
      <Nav.Link href="#link"><i className="fas fa-user"></i> Sign in</Nav.Link>
    </Nav>
  </Navbar.Collapse>
 </Container>
</Navbar>  
        </>
    )
}

export default header
