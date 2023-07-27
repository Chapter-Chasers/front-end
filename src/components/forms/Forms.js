import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Emailsub from '../emailsub/Emailsub';
import FB from '../Feedback/FB';

export default function Forms() {
  return (
    <Row>
      <Col sm={12} md={6}>
        <Emailsub />
      </Col>
      <Col md={6}>
        <FB />
      </Col>
    </Row>
  );
}
