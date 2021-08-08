import * as React from "react";
// import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'
function Login() {
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
                  <Form.Control type="text" />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}

export default Login;