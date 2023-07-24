import React from "react";
import ShoppingCart from "./ShoppingCart";
import PaymentInfo from "./PaymentInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export default function Cart() {
  return (
<Container>
      <Row>
        <Col>
          <ShoppingCart />
        </Col>
        <Col>
          <PaymentInfo />
        </Col>
      </Row>
    </Container>
  );
}
