import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./email.css";
import { Container } from "react-bootstrap";
import { useRef } from "react";

function Emailsub() {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    try {
      const response = await fetch(`${process.env.REACT_APP_Google_URL}subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });
      if (response.status === 201) {
        alert('Subscription successful! Check your email.');
      } else {
        alert('An error occurred while subscribing.');
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while processing the request.');
    }
  };
  return (
    <section className="email_sub d-flex justify-content-center align-items-center">
      <Container className="d-flex flex-column">
        <h2>Subscribe to our Daily Qoute</h2>
        <Form Form onSubmit={handleSubmit} className="w-50">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              className="mb-3"
              ref={nameRef}
            />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              className="mb-3"
              ref={emailRef}
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
