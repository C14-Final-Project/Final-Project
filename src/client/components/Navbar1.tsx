import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { nameProps } from '../utils/types';
import { userContext } from '../utils/userContext'


const Navbar1 = (props: nameProps) => {

  const [location, setLocation] = useState<string>()
  const [processing, setProcessing] = useState({city: "Your", state: "Area"})
  const [comma, setComma] = useState({comma: ""})

  const authFunc = () => {
    if (props.auth == true) {
      setUsername(props.username)
    }
  }

  const {username, setUsername} = useContext(userContext)

  const getLocation = async () => {
    try {
        const res = await fetch('https://geolocation-db.com/json/');
        const userLocation = await res.json();
        setProcessing(userLocation);
        setComma({comma: ","})
        authFunc()
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
        <Navbar style={{ margin: "auto" }}  className='sticky-top row' bg="dark" variant="dark" expand="sm">
          <Container>
          <NavLink style={{ textDecoration: "none" }} to={`/`} className='link' activeClassName="active"><Navbar.Brand className="nav-link" href="#home"><i><b>Performance</b></i></Navbar.Brand></NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#link">Login</Nav.Link>
                <NavLink style={{ textDecoration: "none" }} to={'/register'} className='link' activeClassName="active"><a className="nav-link" href="">Register</a></NavLink>
                <NavLink style={{ textDecoration: "none" }} to={`/${location}`} className='link' activeClassName="active"><a className="nav-link" href="">{processing.city}{comma.comma} {processing.state}</a></NavLink>
                <NavLink style={{ textDecoration: "none" }} to={`/users/${username}`} className='link' activeClassName="active"><a className="nav-link" href="">{username}</a></NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default Navbar1;