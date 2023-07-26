import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './email.css'
import { Container } from 'react-bootstrap';
import { useState } from 'react';


function Emailsub() {
 
    const [formData, setFormData] = useState({
      name: '',
      email: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e) => {
      console.log(formData);
      e.preventDefault();
    await fetch(`${process.env.REACT_APP_Google_URL}subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {response.json(); console.log(response);} )
        .then((result) => {
          alert("result.message");
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  
  




  return (
    <Container className='d-flex flex-column'>
      <h2>Subscribe to our Daily Quote</h2>
      <Form onSubmit={handleSubmit} className='w-50'>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Raze"
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
          <Button type='submit' variant="dark">Submit</Button>
        </Form.Group>
      </Form>
    </Container>
  );
}
export default Emailsub;


