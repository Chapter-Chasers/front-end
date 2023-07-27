import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./email.css";
import { Container } from "react-bootstrap";

function handleSubmit() {}

function Emailsub() {
  return (
    <section
      className="email_sub d-flex justify-content-center align-items-center"
      // Add the background color inline style here
    >
      <Container className="d-flex flex-column">
        {/* <h2 style={{color='rgb(234, 234, 234)'}}>Subscribe to our Daily Quote</h2> */}
        <h2 style={{ color: "rgb(234, 234, 234)" }}>
          Subscribe to our Daily Quote
        </h2>

        <Form
          onSubmit={() => handleSubmit}
          className="w-50"
          inline
          style={{ backgroundColor: "rgba(151, 254, 237, 0.6)" }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label srOnly>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              className="mr-3"
            />
            <Form.Label srOnly>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="mr-3"
            />
            <Button
              type="submit"
              variant="dark"
              style={{ backgroundColor: "rgb(60, 64, 72)" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </section>
  );
}

export default Emailsub;
