
import React, { useState, useEffect } from 'react';
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Swal from "sweetalert2";

import { Button } from 'primereact/button';
        

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
  function handleDelete(index) {
    const updatedQuotes = [...quotes];
    updatedQuotes.splice(index, 1);
    localStorage.setItem('quotes', JSON.stringify(updatedQuotes));
    setQuotes(updatedQuotes);
  }

  return (
    <>
    <hr
  style={{
    background: '#3C4048',
    color: '#3C4048',
    borderColor: '#3C4048',
    height: '3px',
  }}
/>

    <Button  style ={{backgroundColor: 'rgb(0, 171, 179)', marginLeft:'39%',marginTop:'25px',color: '#3C4048'}}className="card flex justify-content-center" onClick={handleShow} label="Add Quote" link />
      <Modal show={show} onHide={handleClose}   style ={{color: '#3C4048'}}>
        <Modal.Header closeButton>
          <Modal.Title>Add your Qoute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name <span style={{color:'red'}}>*</span></Form.Label>
              <Form.Control  style ={{backgroundColor:'#F5F5F5'}}
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
              <Form.Label>Quote <span style={{color:'red'}}>*</span></Form.Label>
              <Form.Control  style ={{backgroundColor:'#F5F5F5'}} as="textarea"
                placeholder="Your Quote.."
                value={quote}
                onChange={(event) => setQuote(event.target.value)}
                rows={3}
                required />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <div style={{ display: "flex", justifyContent: "center" }}>
        {/* <Button  style ={{backgroundColor:'rgb(0, 171, 179)', marginLeft:'39%',color: '#3C4048'}}  className="card flex flex-wrap justify-content-center" onClick={handleButtonClick} label="Add" severity="secondary" text />
        <Button    style ={{backgroundColor:'rgb(0, 171, 179)', marginLeft:'39%',color: '#3C4048'}} className="card flex flex-wrap justify-content-center" onClick={handleClose} label="Close" severity="secondary" text /> */}
 <Button
            variant="secondary"
            onClick={handleButtonClick}
            style={{ marginRight: "10px"  ,backgroundColor:'rgb(0, 171, 179)'}}
          >
            Add
          </Button>
          <Button variant="secondary" onClick={handleClose}
            style={{ backgroundColor:'rgb(0, 171, 179)'}}>
            Close
          </Button>
</div>
        </Modal.Footer>
      </Modal>

      <section>
        <Container className='d-flex flex-column'>
          <h2 style={{ color: '#3C4048', marginTop:'20px', marginBottom:'20px'}}>My Quotes</h2>

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
              <Card.Footer>
                <Button className='w-100' variant='danger' onClick={() => handleDelete(index)}>Delete</Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}


