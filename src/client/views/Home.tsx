import * as React from "react";
// import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { nameProps } from "../utils/types";
import { useEffect, useState, useContext } from 'react'
import { userContext } from '../utils/userContext'
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

const Home = () => {

 
  const { propsObj, setPropsObj } = useContext(userContext)
  const [usernameObj, setUsernameObj] = useState({
    username: propsObj.username
  })
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
  const [authRegObjState, setAuthRegObjState] = useState({
    username: propsObj.username,
    profileType: propsObj.profileType,
    auth: true,
    invisible: '',
    invisible2: 'invisible'
  })
  

  console.log(propsObj)


  useEffect(() => {
    if (context == true && auth == true) {
      setPropsObj(authRegObjState)
      setContext(false)
      
    }
    console.log('me?')
  }, [context])

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const newUser = () => {
    let preUser: newUser = {
      username: username,
      email: email,
      password: password,
      profileType: profileType
    };
    setPrePost(preUser)
    setAuth(true)
    setNext(true)
  }

  useEffect(() => {
    if (next == true) {
    sendPost();
    postSession();
    setNext(false);
    }
  }, [prePost])

  const sendPost = async () => {
    if (auth) {
      let res = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(prePost)
      });
      if (res.ok) {
        setAuthRegObjState(({
          username: username,
          profileType: profileType,
          auth: auth,
          invisible: '',
          invisible2: 'invisible'
        }))
        setPropsObj(authRegObjState)
        setContext(true)
      } else {
        setAuth(false)
      }
    }
  }

  const postSession = async () => {
    if (auth == true) {
      let res = await fetch(`/api/session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: prePost.username,
          auth: true,
          profileType: prePost.profileType
        })
      });
      if (res.ok) {
        console.log('yeah')
      } else {
        console.log('uh oh');
      }
    }
  }


  if (propsObj.register == undefined) {
    return (
      <div className="bg-dark">
        <Card className="bg-dark text-white d-flex justify-content-center align-items-center ">
          <Card.Img
            className=""
            src="https://i.postimg.cc/SN8kPx5K/edit.jpg"
            alt="Card image"
          />

          <Card.ImgOverlay className=" bg-black ">
            <Container className="text-center">
              <Card.Title className="Justify-content-center align-items-center">
                Performance
              </Card.Title>
              <Card.Text>
                {" "}
                {username} Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.{" "}
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
              <Button variant="warning">Register</Button>{" "}
              <Button variant="warning">Login</Button>{" "}
            </Container>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
  if (propsObj.register == true) {
    return (
      // <div className="bg-dark">
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
      // </div>
    );
  }
}

export default Home;
