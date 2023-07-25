import React from "react";
import ShoppingCart from "./ShoppingCart";
import PaymentInfo from "./paymenttest";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Cart() {
  return (
<Container className="cartCon">
      <Row>
        <Col>
          {/* <ShoppingCart /> */}
          <ShoppingCart/>
        </Col>
        <Col>
          <PaymentInfo />
        </Col>
      </Row>
    </Container>
  );
}
