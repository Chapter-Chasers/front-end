import React, { useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './quotesHero.css';
import Form from "react-bootstrap/Form";
import Swal from 'sweetalert2';
import Modal from 'react-bootstrap/Modal';
const QuotesHero = () => {

  //modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //emailsub
  const nameRef = useRef('');
  const emailRef = useRef('');
  // const handleButtonClick = async (e) => { e.preventDefault();
  //   const name = nameRef.current.value;
  //   const email = emailRef.current.value;
  //   try {
  //     const response = await fetch(`${process.env.REACT_APP_Google_URL}subscribe`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ name, email }),
  //     });
  //     if (response.status === 201) {
  //       alert('Subscription successful! Check your email.');
  //     } else {
  //       alert('An error occurred while subscribing.');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert('An error occurred while processing the request.');
  //   } }

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
        Swal.fire({
          // icon: "success",
          title: "Subscription successful! Check your email.",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
       
      } else {
        Swal.fire({
          // icon: "error",
          // title: "Oops...",
          text: "An error occurred while subscribing, Please fill in all the required fields.",
        });
   
      }
    } catch (error) {
      console.log(error);
      alert('An error occurred while processing the request.');
    }
  }


  //hero
  const h1Ref = useRef(null);
  const scrollToH1 = () => {
    h1Ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="hero-section">
      <Container>
        <Row className="vh-100">
          <Col className="d-flex flex-column align-items-center justify-content-center text-center">
            <h1 ref={h1Ref}>Inspiration Unleashed</h1>
            <p>Welcome to our enchanting world of quotes, where inspiration knows no bounds! Dive into a collection of timeless wisdom, thought-provoking insights, and motivational musings.</p>
            <div className='container d-flex ' style={{ justifyContent: "center" }}>
              <Button onClick={scrollToH1} id="hb" className="explore-btn mt-4">Explore Quotes</Button>
              <Button onClick={handleShow} id="hb" className="explore-btn mt-4" style={{ marginLeft: "10px" }}>Subscribe to our Daily Quote</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subscribe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleSubmit}
            className="w-50"
            inline

          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label srOnly>Name <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                style={{ width: '200%' }}
                className="mr-3"

                ref={nameRef}

              />
              <Form.Label srOnly>Email address <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                style={{ width: '200%' }}
                className="mr-3"
                ref={emailRef}
              />

            </Form.Group>
            <Button
              // onClick={() => handleSubmit}
              type="submit"
              variant="dark"
              style={{ backgroundColor: "rgb(60, 64, 72)", marginLeft:'167%'}}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>

      </Modal>
    </section>
  );
};

export default QuotesHero;
