import * as React from 'react';
// import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


function Home() {
  return(
   <>
<Card className="bg-dark text-white">
  <Card.Img className="opacity-5" src="https://tinyurl.com/5byketvw" alt="Card image" />
  <Card.ImgOverlay className="d-flex justify-content-center align-items-center bg-dark d-wrap h-25 w-50">
<Container className="">
    <Card.Title className="">Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
</Container>
  </Card.ImgOverlay>
</Card>
 



    </>
  );
}

export default Home;