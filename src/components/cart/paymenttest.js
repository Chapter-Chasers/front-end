import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Cart.css";
import Swal from "sweetalert2";

export default function PaymentTest() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleButtonClick = (event) => {
    event.preventDefault();
    const { cardNumber, expirationDate, cvv } = formData;
    
    if (cardNumber && expirationDate && cvv) {
      // Form is valid, show success alert
      Swal.fire({
        icon: 'success',
        title: 'Thanks For Shopping ^^',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    } else {
      // Form is incomplete, show error alert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all the required fields.',
      });
    }
  };

  return (
    <>
      <form>
        <Card style={{ height: "50vh", width: "70vh" }}>
          <Card.Header as="h5">Payment Information:</Card.Header>
          <Card.Body>
            <Card.Title>Please Enter Your Card Information</Card.Title>

            <Card.Text>
              Card Number:
              <Form.Control
                type="number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleFormChange}
                placeholder="please enter your card number"
                required
              />
            </Card.Text>

            <Card.Text>
              Expiration Date:
              <Form.Control
                type="date"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleFormChange}
                placeholder="expiration date"
                required
              />
            </Card.Text>

            <Card.Text>
              CVV:
              <Form.Control
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleFormChange}
                placeholder="Please enter your CVV"
                pattern="[0-9]{3,4}" // Rg_Ex for only 3 or 4 digit numbers
                title="Please enter a valid CVV (3 or 4 digits)"
                required
              />
            </Card.Text>

            <Button variant="primary" onClick={handleButtonClick} type="submit">
              Submit
            </Button>
          </Card.Body>
        </Card>
      </form>
    </>
  );
}
