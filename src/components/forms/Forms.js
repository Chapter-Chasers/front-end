import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Emailsub from '../emailsub/Emailsub';
import FB from '../Feedback/FB';

export default function Forms() {
  return (
    <Row>
      {/* <Col md={6}>
        <Emailsub />
      </Col> */}
      <Col >
        <FB />
      </Col>
    </Row>
  );
}
