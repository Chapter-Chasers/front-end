import React from "react";
import Card from "react-bootstrap/Card";
// import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function paymenttest() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      {/* <Card style={{ width: '18rem' }}>
      <Card.Header>Payment Information:</Card.Header>
      <ListGroup variant="flush">
      <form className="payment-form">
         <ListGroup.Item> 
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" />
            </ListGroup.Item>
        <ListGroup.Item><label htmlFor="expiration">Expiration Date:</label>
            <input type="text" id="expiration" /></ListGroup.Item>
        <ListGroup.Item> <label htmlFor="cvv">CVV:</label><br/>
            <input type="text" id="cvv" /></ListGroup.Item>
               
        </form>
             <Button variant="-dark">Submit</Button>{' '}
      </ListGroup>
    </Card> */}

      {/* <Card className="payment-card">
      <Card.Header className="payment-card-header">Payment Information:</Card.Header>
      <Card.Body>
        <form className="payment-form">
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" />
          </div>
          <div className="form-group">
            <label htmlFor="expiration">Expiration Date:</label>
            <input type="text" id="expiration" />
          </div>
          <div className="form-group">
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" />
          </div>
          <button className="btn btn-dark">Submit</button>
        </form>
      </Card.Body>
    </Card> */}

      <form>
        <Card>
          <Card.Header as="h5">Payment Information:</Card.Header>
          <Card.Body>
            <Card.Title>Please Enter Your Card Information</Card.Title>

            <Card.Text>
              Card Number:
              <Form.Control
                type="number"
                placeholder="please enter your card number"
                required
              />
            </Card.Text>

            <Card.Text>
              Expiration Date:
              <Form.Control
                type="date"
                placeholder="expiration date"
                required
              />
            </Card.Text>

            <Card.Text>
              CVV:
              <Form.Control
                type="text"
                placeholder="Please enter your CkkkVV"
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
