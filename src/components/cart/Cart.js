import React from "react";
import ShoppingCart from "./ShoppingCart";
import PaymentInfo from "./paymenttest";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

export default function Cart() {
  return ( 
     <Container className="cartCon">
    <div>
      <ShoppingCart />
      <Card style={{margin: '0 auto'}}>
        <Card.Header>
          <Nav.Item>
          {/* margin-left: '3.5rem' */}
            <Nav.Link href="/payment">Continue to Payment</Nav.Link>
          </Nav.Item>
        </Card.Header>
      </Card>
    </div>
  </Container>
  );
}
