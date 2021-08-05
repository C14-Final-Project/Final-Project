import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


function Navbar1() {

  const [location, setLocation] = useState<string>()
  const [processing, setProcessing] = useState({city: "Your", state: "Area"})
  const [comma, setComma] = useState({comma: ""})

  const getLocation = async () => {
    try {
        const res = await fetch('https://geolocation-db.com/json/');
        const userLocation = await res.json();
        setProcessing(userLocation);
        setComma({comma: ","})
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
      getLocation();
  }, []);

  useEffect(() => {
    setLocation(`${processing.city}${processing.state}`)
  }, [processing]);


  return (
    <>
        <Navbar style={{ margin: "auto" }}  className='row' bg="dark" variant="dark" expand="sm">
          <Container>
          <NavLink style={{ textDecoration: "none" }} to={`/`} className='link' activeClassName="active"><Navbar.Brand className="nav-link" href="#home">Perfomance</Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#link">Login</Nav.Link>
                <Nav.Link href="#link">Register</Nav.Link>
                <NavLink style={{ textDecoration: "none" }} to={`/${location}`} className='link' activeClassName="active"><a className="nav-link" href="#">{processing.city}{comma.comma} {processing.state}</a></NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default Navbar1;