import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function paymenttest() {
  return (
<Card style={{ width: '18rem' }}>
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
    </Card>
  );
}
