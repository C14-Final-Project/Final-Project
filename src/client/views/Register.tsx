import * as React from "react";
// import Image from 'react-bootstrap/Image'
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Register() {
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
              <Form noValidate validated={} onSubmit={}>
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
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="" as={Col}>
                    <Form.Label>Select Account Type</Form.Label>

                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Works with selects"
                      
                    >
                      <Form.Select aria-label="Floating label select example" required>
                        <option>Open this select menu</option>
                        <option value="1">Artist</option>
                        <option value="2">Venue</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Row className="mb-3 ml-3"></Row>

                <Button className="bg-warning" type="submit">
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
}

export default Register;
