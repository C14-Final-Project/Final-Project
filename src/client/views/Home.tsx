import * as React from "react";
// import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { nameProps } from "../utils/types";
import { useEffect, useState, useContext } from 'react'
import { userContext } from '../utils/userContext'
// import Image from 'react-bootstrap/Image'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { newUser } from "../utils/types"
import '../utils/Register.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { logUser } from '../utils/types'

const Home = () => {

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const { propsObj, setPropsObj } = useContext(userContext)
  const [reg, setReg] = useState(false)
  const [log, setLog] = useState(false)
  const [next, setNext] = useState(false)
  const [context, setContext] = useState(false)
  const [email, setEmail] = useState(propsObj.email)
  const [username, setUsername] = useState(propsObj.username)
  const [password, setPassword] = useState('')
  const [profileType, setProfileType] = useState<string>(propsObj.profileType)
  const [auth, setAuth] = useState(propsObj.auth)
  const [prePost, setPrePost] = useState<newUser>({
    username: '',
    email: '',
    password: '',
    profileType: '',
  })
  const [prePostLog, setPrePostLog] = useState<logUser>({
    username: '',
    password: '',
  })
  const [authRegLogObjState, setAuthRegLogObjState] = useState({
    username: propsObj.username,
    profileType: propsObj.profileType,
    auth: true,
    invisible: '',
    invisible2: 'invisible',
    logout: 'Log Out',
    registerText: '',
    loginText: '',
  })

  const topCard = {
    position: 'absolute',
    top: '-1em',
    display: 'flex',
  }

  const bottomCard = {
    position: 'absolute',
    top: '15em',
    display: 'flex'
  }

  const joinContext = {
    register: true,
    loginText: 'Login',
    registerText: 'Register',
    auth: false,
  }


  useEffect(() => {
    if (context == true && auth == true) {
      setPropsObj(authRegLogObjState)
      postSessionLog()
      setContext(false)
    }
  }, [context])

  const onJoin = () => {
    setPropsObj(joinContext)
  }

  const newUser = () => {
    let preUser: newUser = {
      username: username,
      email: email,
      password: password,
      profileType: profileType
    };
    setPrePost(preUser)
    setAuth(true)
    setReg(true)
    setNext(true)
  }

  useEffect(() => {
    if (next == true && reg == true) {
      sendPostReg();
      setNext(false);
    }
  }, [prePost])

  const sendPostReg = async () => {
    if (auth == true && reg == true) {
      let res = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(prePost)
      });
      if (res.ok) {
        setAuthRegLogObjState(({
          username: username,
          profileType: profileType,
          auth: auth,
          invisible: '',
          invisible2: 'invisible',
          logout: 'Log Out',
          loginText: '',
          registerText: '',
        }))
        setPropsObj(authRegLogObjState)
        setContext(true)
      } else {
        setAuth(false)
      }
    }
  }

  const postSessionLog = async () => {
    if (propsObj.auth == true) {
      let res = await fetch(`/api/session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          auth: true,
          profileType: profileType
        })
      });
      if (res.ok) {
        setUsername(username)
        setProfileType(profileType)
      } else {
        console.log('uh oh');
      }
    }
  }

  const Login = () => {
    let logUser: logUser = {
      username: username,
      password: password
    };
    setPrePostLog(logUser)
    getUserProfile()
    setLog(true)
    setNext(true)
  }

  const sendGetLog = async () => {
    if (log == true) {
      setLog(false)
      setAuth(true)
      let res = await fetch(`/api/login/username=${username}&password=${password}`)
      let logRes = await res.json()
      if (logRes == true) {
        setAuthRegLogObjState(({
          username: username,
          profileType: profileType,
          auth: true,
          invisible: '',
          invisible2: 'invisible',
          logout: 'Log Out',
          loginText: '',
          registerText: '',
        }))
        setPropsObj(authRegLogObjState)
        setContext(true)
      } else {
        
      }
    }
  }

  const getUserProfile = () => {
    (async () => {
      let res = await fetch(`/api/users/get/${username}`);
      let getUserProfileType = await res.json();
      setProfileType(getUserProfileType);
    })();
  }

  useEffect(() => {
    if (next == true && log == true) {
      sendGetLog()
      setNext(false);
    }
  }, [profileType])

  if (propsObj.register == undefined && propsObj.login == undefined) {
    return (
      <div className="bg-dark">
        <Card className="bg-dark text-white d-flex justify-content-center align-items-center ">
          <Card.Img
            className=""
            src="https://i.postimg.cc/SN8kPx5K/edit.jpg"
            alt="Card image"
          />
           <Card.ImgOverlay style={topCard} className="m-5 ">
            <Container className="text-left">
              <Card.Title className="text-center">
              <h1 style={{ fontSize: '500%' }}><i><b>Performance</b></i></h1>
              </Card.Title>
              
            </Container>
            
          </Card.ImgOverlay>
          
          
          <Card.ImgOverlay style={bottomCard} className=" bg-black ">
            <Container className="">
              <Card.Title className="Justify-content-center text-center align-items-center">
              <h4>Performance Alpha 1.0 </h4>
              </Card.Title>
              <Card.Text className='text-left' style={{ fontSize: '125%' }}>
                
                &nbsp;&nbsp;&nbsp;&nbsp;Welcome to the newest platform to connect performance artists and venues. 
                Anyone who has ever endeavored to play an instrument or performed music live, has at one point or another experienced the difficulty of finding and booking an appropriate venue. 
                Performance aims to alleviate this inherent problem while also increasing potential revenue, brand exposure, and propagating future bookings for both venues and artists. 
                Performance is a platform where independent artists and local venues can connect and collaborate. Performance is designed to allow artists to network with venues in order to maximize their exposure locally, regionally, nationally — wherever they want. 
                At the same time, Performance gives venues of all shapes and sizes the ability to book independent artists online in a quick and easy process that mutually benefits both parties. Whether it be corporate events, county fairs, birthdays, or house shows and parties - Performance is the platform for you!
              </Card.Text>
              {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
              <div className='row'>
                <div className='col-5'></div>
                <Button className='col-2' onClick={() => onJoin()} variant="warning">Join Today!</Button>
                <div className='col-5'></div>
              </div>
              
            </Container>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
  if (propsObj.register == true) {
    return (
      <div className="bg-dark">
        <Card className="bg-dark text-white d-flex justify-content-center align-items-center ">
          <Card.Img
            className=""
            src="https://i.postimg.cc/SN8kPx5K/edit.jpg"
            alt="Card image"
          />

          <Card.ImgOverlay className=" bg-dark ">
            <Container className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title className="mb-3">Performance</Card.Title>
              <Card.Text>
                <Form noValidate>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="5"
                      controlId="validationCustomUsername"
                    >
                      <Form.Label>Username</Form.Label>
                      <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      as={Col}
                      md="7"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        aria-describedby="inputGroupPrepend"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        required
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                      as={Col}
                      md="5"
                    >
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        aria-describedby="inputGroupPrepend"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId='selector' as={Col}>
                      <Form.Label>Profile Type</Form.Label>
                      <Form className='row'>
                        <Button id='artist' onClick={() => setProfileType('artist')} className='btn btn-dark border-white text-white mb-3'>Artist</Button>
                        <Button id='venue' onClick={() => setProfileType('venue')} className='btn btn-dark border-white text-white'>Venue</Button>
                      </Form>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3 ml-3"></Row>

                  <Button onClick={() => newUser()} className="btn-dark border-white text-white">
                    Submit form
                  </Button>
                </Form>
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Container>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  } if (propsObj.login == true) {
    return (
      <div className="bg-dark">
        <Card className="bg-dark text-white d-flex justify-content-center align-items-center ">
          <Card.Img
            className=""
            src="https://i.postimg.cc/SN8kPx5K/edit.jpg"
            alt="Card image"
          />

          <Card.ImgOverlay className=" bg-dark ">
            <Container className="text-center">
              <Card.Title className="Justify-content-center align-items-center">
                Performance
              </Card.Title>
              <Form>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>User Name</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password"
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={() => Login()} variant="primary" >
                  Submit
                </Button>
              </Form>
            </Container>
          </Card.ImgOverlay>
        </Card>
      </div>
    )
  }
}

export default Home





