import * as React from "react";
// import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

function Home() {
  return (
    <>
      <Card className="bg-dark text-white d-flex justify-content-center align-items-center ">
        <Card.Img
          className=""
          src="https://i.postimg.cc/SN8kPx5K/edit.jpg"
          alt="Card image"
        />

        <Card.ImgOverlay className=" bg-dark ">
          <Container className="d-flex flex-column justify-content-center align-items-center">
            <Card.Title className="">Performance</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default Home;
