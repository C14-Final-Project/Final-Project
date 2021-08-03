import * as React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


function Navbar1() {
  return(
   <>
   <div>
	<Navbar bg="dark" variant="dark" expand="sm">
  <Container>
    <Navbar.Brand href="#home">Perfomance</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#link">Location</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
        <Nav.Link href="#link">Register</Nav.Link>
       </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>
  </>
  );
}

export default Navbar1;