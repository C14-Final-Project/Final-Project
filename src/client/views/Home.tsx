import * as React from 'react';
<<<<<<< HEAD
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
 

=======
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Home() {

  const [location, setLocation] = useState('')

  return (
    <>
      <div>
        <Image src="https://tinyurl.com/5byketvw" fluid />

        <div className="mask" >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Heading</h1>
              <h4 className="mb-3">Subheading</h4>
              <a className="btn btn-outline-light btn-lg" href="#!" role="button">Call to action</a>
            </div>
          </div>
        </div>
      </div>
>>>>>>> 27d46916b7e5b93a09379c7f541ef046423109bb


    </>
  );
}

export default Home;git 