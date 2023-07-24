
import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Category.css';

function Category() {
    return (
        <div>
           <Container>
      <Row>
        <Col>
          <div className="checkbox-list-frame"> 
            <Form>
              <div className="radio-item">
                <Form.Check type="radio" name="radioGroup" label="All" />
              </div>
              <div className="radio-item">
                <Form.Check type="radio" name="radioGroup" label="Computer" />
              </div>
              <div className="radio-item">
                <Form.Check type="radio" name="radioGroup" label="Music" />
              </div>
              <div className="radio-item">
                <Form.Check type="radio" name="radioGroup" label="Medical" />
              </div>
             
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
        </div>
    )
}
export default Category;