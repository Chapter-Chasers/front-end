import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./email.css";
import { Container } from "react-bootstrap";

function handleSubmit() {}

function Emailsub() {
  return (
    <section className="email_sub d-flex justify-content-center align-items-center">
      <Container className="d-flex flex-column">
        <h2>Subscribe to our Daily Qoute</h2>
        <Form onSubmit={() => handleSubmit} className="w-50">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              className="mb-3"
            />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="mb-3"
            />
            <Button type="submit" variant="dark">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </section>
  );
}
export default Emailsub;
