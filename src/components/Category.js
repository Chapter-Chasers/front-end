
import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Category.css';

function Category(props) {
  const [radioValue, setRadioValue] = useState('');
  const [data , setData] = useState([])

  async function handleRadioButtons(e) {
    console.log(e.target.value);
    // setRadioValue(e.target.value);
    switch (radioValue) {
      case 'All':

        await fetch(`http://localhost:3001/allBooks`)
          .then(
            (response) => (response.json())
          ).then((responseJson) => {
            console.log(responseJson);
            // setData(responseJson);
          }).catch(error => {
            alert(error);
          });
        break;

      case 'Computer':
          await fetch(`http://localhost:3001/searchCategory?cat=${radioValue}`)
          .then(
            (response) => (response.json())
          ).then((responseJson) => (
            setData(responseJson)
          )).catch(error => (
            alert(error)
          ));
        break;
      case 'Music':
        await fetch(`http://localhost:3001/searchCategory?cat=${radioValue}`)
        .then(
          (response) => (response.json())
        ).then((responseJson) => (
          setData(responseJson)
        )).catch(error => (
          alert(error)
        ));
        break;
      case 'Medical':
        await fetch(`http://localhost:3001/searchCategory?cat=${radioValue}`)
        .then(
          (response) => (response.json())
        ).then((responseJson) => (
          setData(responseJson)
        )).catch(error => (
          alert(error)
        ));
        break;

      default:
        break;
    }
    // await props.setSearchData(data);
    // return;
  }
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="checkbox-list-frame">
              <Form>
                <div className="radio-item">
                  <Form.Check onChange={(e) => { handleRadioButtons(e) }} checked={radioValue === 'All'} type="radio" name="radioGroup" label="All" />
                </div>
                <div className="radio-item">
                  <Form.Check onChange={(e) => { handleRadioButtons(e) }} checked={radioValue === 'Computer'} type="radio" name="radioGroup" label="Computer" />
                </div>
                <div className="radio-item">
                  <Form.Check onChange={(e) => { handleRadioButtons(e) }} checked={radioValue === 'Music'} type="radio" name="radioGroup" label="Music" />
                </div>
                <div className="radio-item">
                  <Form.Check onChange={(e) => { handleRadioButtons(e) }} checked={radioValue === 'Medical'} type="radio" name="radioGroup" label="Medical" />
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