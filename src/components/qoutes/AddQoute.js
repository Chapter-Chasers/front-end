
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Swal from "sweetalert2";

export default function AddQuote() {
  const [name, setName] = useState('');
  const [quote, setQuote] = useState('');
  const [show, setShow] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSubmit();
    handleClose();
  };

  useEffect(() => {
    // Retrieve quotes from localStorage when the component mounts
    const savedQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
    setQuotes(savedQuotes);
  }, []);

  const handleSubmit = (event) => {
    if (name.trim() === '' || quote.trim() === '') {
      Swal.fire({
        text: 'Please fill in all the required fields.',
      });
      return; 
    }
    const newQuote = {
      name: name,
      quote: quote,
    };
    const existingQuotes = JSON.parse(localStorage.getItem('quotes')) || [];
    const updatedQuotes = [...existingQuotes, newQuote];
    localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
    Swal.fire({
      icon: 'success',
      title: 'Your Quote Added Successfully',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
    setName('');
    setQuote('');
    
    setQuotes(updatedQuotes);
  };


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Quote
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your Qoute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Quote</Form.Label>
              <Form.Control as="textarea"
                placeholder="Your Quote.."
                value={quote}
                onChange={(event) => setQuote(event.target.value)}
                rows={3} 
                required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleButtonClick} type='submit' variant="dark">
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <section>
        <Container className='d-flex flex-column'>
          <h2>My Quotes</h2>

        </Container>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {quotes.map((quote, index) => (
            <Card key={index} style={{ width: "18rem", marginBottom: "20px" }}>
              <Card.Body>
                <Card.Title>{quote.quote}</Card.Title>
                <Card.Text>Author: {quote.name}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}


