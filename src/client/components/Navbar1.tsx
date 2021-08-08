import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { useEffect, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { nameProps } from '../utils/types';
import { userContext } from '../utils/userContext'
import { useHistory } from "react-router-dom"


const Navbar1 = () => {

  const history = useHistory()
  const [login, setLogin] = useState<string>('Login')
  const [register, setRegister] = useState<string>('Register')
  const [locationEventName, setLocationEventName] = useState<string>()
  const [processing, setProcessing] = useState({city: "Your", state: "Area"})
  const [comma, setComma] = useState({comma: ""})

  const {propsObj, setPropsObj} = useContext(userContext)

  const registerContext = {
    register: true
  }

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

  const authChecker = () => {
    if (propsObj.auth == true) {
      setRegister('')
      setLogin('')
    }
  }

  const goRegister = () => {
    setPropsObj(registerContext)
    history.push('/')
  }

  useEffect(() => {
      getLocation();
      authChecker();
  }, []);

  useEffect(() => {
    setLocationEventName(`${processing.city}${processing.state}`)
  }, [processing]);


  return (
    <>
        <Navbar style={{ margin: "auto" }}  className='sticky-top row' bg="dark" variant="dark" expand="sm">
          <Container>

          <NavLink style={{ textDecoration: "none" }} to={`/`} className='link' activeClassName="active"><Navbar.Brand className="nav-link" href="#home"><i><b>Performance</b></i></Navbar.Brand></NavLink>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink style={{ textDecoration: "none" }} to={`/${locationEventName}`} className='link mt-2' activeClassName="active"><a className="nav-link" href="">{processing.city}{comma.comma} {processing.state}</a></NavLink>
                <NavLink style={{ textDecoration: "none" }} to={`/users/${propsObj.username}`} className={`${propsObj.invisible} link mt-2`} activeClassName="active"><a className="nav-link" href="">{propsObj.username}</a></NavLink>
                <Nav.Link className={`${propsObj.invisible2} mt-2 me-2`} href="/Login">Login</Nav.Link>
                <Nav.Link onClick={() => goRegister()} className={`${propsObj.invisible2} ms-2 link`} style={{ textDecoration: "none" }} ><a className="nav-link" href="">Register</a></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default Navbar1;