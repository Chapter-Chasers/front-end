import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './FB.css';
import Container from 'react-bootstrap/Container';

function FB() {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    fetch(`${process.env.REACT_APP_Google_URL}send-feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        alert('Thank you for your feedback!');
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <section className='email_sub d-flex justify-content-center align-items-center'>
      <Container className='d-flex flex-column'>
        <h2>Give Us Your Feedback!</h2>
        <Form onSubmit={handleSubmit} className='w-50'>
          <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='mb-3'
              placeholder='Your Name'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>Message:</Form.Label>
            <Form.Control
              as='textarea'
              name='message'
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className='mb-3'
              placeholder='Tell us whatever you want'
            />
          </Form.Group>
          <Button type='submit' variant='dark'>Submit</Button>
        </Form>
      </Container>
    </section>
  );
}

export default FB;