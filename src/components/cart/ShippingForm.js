
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Swal from "sweetalert2";

function ShippingForm() {
    const [formData, setFormData] = useState(
     {
        fullName: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        contactNumber: "",
    }
    )
    function handleFormChange(e){
        const {name , value} = e.target;
        setFormData({
            ...formData , [name] : value
        });
    };


    function handleShippingConfirmation(){
        Swal.fire({
            icon: "success",
            title: "Shipping Details Confirmed",
            text: "Please proceed to payment.",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
    }
    return (
        <>
 <Container style={{ minHeight: "100vh" }}>
      <form>
        <Card style={{ maxWidth: "500px", width: "250%", padding: "20px", backgroundColor: "#3C4048" }}>
          <Card.Header as="h5">Shipping Information:</Card.Header>
          <Card.Body>
            <Card.Text>
              Full Name:
              <Form.Control
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleFormChange}
                placeholder="Enter your full name"
                required
              />
            </Card.Text>

            <Card.Text>
              Address:
              <Form.Control
                type="text"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                placeholder="Enter your address"
                required
              />
            </Card.Text>

            <Card.Text>
              City:
              <Form.Control
                type="text"
                name="city"
                value={formData.city}
                onChange={handleFormChange}
                placeholder="Enter your city"
                required
              />
            </Card.Text>

            <Card.Text>
              State:
              <Form.Control
                type="text"
                name="state"
                value={formData.state}
                onChange={handleFormChange}
                placeholder="Enter your state"
                required
              />
            </Card.Text>

            <Card.Text>
              Zip Code:
              <Form.Control
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleFormChange}
                placeholder="Enter your zip code"
                required
              />
            </Card.Text>

            <Card.Text>
              Contact Number:
              <Form.Control
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleFormChange}
                placeholder="Enter your contact number"
                required
              />
            </Card.Text>

            <Button style={{backgroundColor:"InactiveBorder"}} onClick={handleShippingConfirmation}>
              Confirm Shipping Details
            </Button>
          </Card.Body>
        </Card>
      </form>
    </Container>
        </>
    );

}
export default ShippingForm;