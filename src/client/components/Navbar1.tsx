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
    register: true,
    loginText: 'Login',
    registerText: 'Register',
    auth: false,
  }

  const loginContext = {
    login: true,
    loginText: 'Login',
    registerText: 'Register',
    auth: false,
  }

  const homeContext = {
    loginText: 'Login',
    registerText: 'Register',
    auth: false,
  }

  const logoutContext = {
		invisible: 'invisible',
		invisible2: '',
		auth: false,
    loginText: 'Login',
    registerText: 'Register',
    username: '',
    profileType: '',
    email: '',
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

  const deleteSession = async () => {
    if (propsObj.auth == true) {
      let res = await fetch(`/api/session/0`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.ok) {
        setPropsObj(logoutContext)
        history.push('/')
      } else {
        console.log('uh oh');
      }
    }
  }

  const goRegister = () => {
    setPropsObj(registerContext)
    history.push('/')
  }

  const goLogin = () => {
    setPropsObj(loginContext)
    history.push('/')
  }

  const logOut = () => {
    deleteSession()
  }
  
  const goHome = () => {
    setPropsObj(homeContext)
    history.push('/')
  }

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    setLocationEventName(`${processing.city}${processing.state}`)
  }, [processing]);


  return (
    <>
        <Navbar style={{ margin: "auto" }}  className='sticky-top row' bg="dark" variant="dark" expand="sm">
          <Container>

          <NavLink style={{ textDecoration: "none" }} onClick={() => goHome()} to={`/`} className='link' activeClassName="active"><Navbar.Brand className="nav-link" href="#home"><i><b>Performance</b></i></Navbar.Brand></NavLink>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink style={{ textDecoration: "none" }} to={`/${locationEventName}`} className='link mt-2' activeClassName="active"><a className="nav-link" href="">{processing.city}{comma.comma} {processing.state}</a></NavLink>
                <NavLink style={{ textDecoration: "none" }} to={`/users/${propsObj.username}`} className={`${propsObj.invisible} link mt-2`} activeClassName="active"><a className="nav-link" href="">{propsObj.username}</a></NavLink>
                <Nav.Link onClick={() => logOut()} className={`${propsObj.invisible}  link`} ><a className="nav-link" href="">{propsObj.logout}</a></Nav.Link>
                <div style={{ width: '55vw' }}></div>
                <Nav.Link onClick={() => goLogin()} className={`${propsObj.invisible2} mt-2 `} href="">{propsObj.loginText}</Nav.Link>
                <Nav.Link onClick={() => goRegister()} className={`${propsObj.invisible2} link`} ><a className="nav-link" href="">{propsObj.registerText}</a></Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default Navbar1;