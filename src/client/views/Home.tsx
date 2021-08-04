import * as React from 'react';
// import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'


function Home() {
  return (
    <>
        <Card style={{ margin: "auto" }} className="row bg-dark text-white">
          <Card.Img style={{ width: "100%" }} className="opacity-5" src="https://tinyurl.com/5byketvw" alt="Card image" />
          <Card.ImgOverlay  >
            <Container style={{ width: "66%" }}  className='offset-2 pt-4 pb-4 bg-dark'>
              <Card.Title className="">Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Container>

          </Card.ImgOverlay>
        </Card>
        <div style={{ margin: "auto" }} className='bg-dark p-1 row'>

        </div>





    </>
  );
}

export default Home;