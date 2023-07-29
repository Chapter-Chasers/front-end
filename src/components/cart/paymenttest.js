import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
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
        icon: "success",
        title: "Thanks For Shopping ^^",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      // Form is incomplete, show error alert
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all the required fields.",
      });
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <form>
        <Card className="text-light" style={{ maxWidth: "500px", width: "100%", padding: "10px" , backgroundColor:"#3C4048"}}>
          <Card.Header as="h5">Payment Information:</Card.Header>
          <Card.Body >
            <Card.Title>Please Enter Your Card Information</Card.Title>

            <Card.Text>
              Card Number: <span style={{color:'red'}}>*</span>
              <Form.Control
                type="number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleFormChange}
                placeholder="Please enter your card number"
                required
              />
            </Card.Text>

            <Card.Text>
              Expiration Date: <span style={{color:'red'}}>*</span>
              <Form.Control
                type="date"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleFormChange}
                placeholder="Expiration date"
                required
              />
            </Card.Text>

            <Card.Text>
              CVV: <span style={{color:'red'}}>*</span>
              <Form.Control
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleFormChange}
                placeholder="Please enter your CVV"
                pattern="[0-9]{3,4}" // Regex for only 3 or 4 digit numbers
                title="Please enter a valid CVV (3 or 4 digits)"
                required
              />
            </Card.Text>

            <Button style={{backgroundColor:"InactiveBorder", marginLeft:'33%'}} onClick={handleButtonClick} type="submit">
              Checkout
            </Button>
          </Card.Body>
        </Card>
      </form>
    </Container>
  );
}
