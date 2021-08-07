import * as React from "react";
// import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { nameProps } from "../utils/types";
import { useEffect, useState, useContext } from 'react'
import { userContext } from "../utils/userContext"

const Home = (props: nameProps) => {

  const {username, setUsername} = useContext(userContext)

  const testfunc = () => {
    if (props.auth == true) {
      window.history.replaceState("data", "Title", "/");
      setUsername(props.username)
    }
  }

  useEffect(() => {
    testfunc()
  }, [])
  
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
            <Card.Text>
<<<<<<< HEAD
              Performance connects 
=======
              {props.profileType} {props.email} {props.username}
>>>>>>> fb42b70e9a624fb7e9aea58aaea3d7656026e5f2
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Home;
