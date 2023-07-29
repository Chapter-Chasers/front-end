import React, { useState, useEffect, useRef } from "react";
//import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";

import { Button } from "primereact/button";

export default function AddQuote() {
  const userQuote = useRef();
  const userName = useRef();

  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const [show, setShow] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSubmit();
    handleClose();
    //  console.log(userQuote.current.value + userName.current.value)
  };

  useEffect(() => {
    // Retrieve quotes from localStorage when the component mounts
    const savedQuotes =getId() || [];
    setQuotes(savedQuotes);
  }, []);

  const userId = sessionStorage.getItem("userId");
  const handleSubmit = async (event) => {
    if (name.trim() === "" || quote.trim() === "") {
      Swal.fire({
        text: "Please fill in all the required fields.",
      });
      return;
    }

    const newQuote = {
      name: name,
      quote: quote,
    };

    
    const n = userName.current.value
    const q = userQuote.current.value
    console.log(userId, n, q)
    let url = `${process.env.REACT_APP_Google_URL}addQuotes`;
    let response = await fetch(url, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: userId,
        author: n,
        qoute: q
      })
    })
    let recieved = await response.json;
    console.log(recieved)


    //local Storage
    const existingQuotes = JSON.parse(localStorage.getItem("quotes")) || [];
    const updatedQuotes = [...existingQuotes, newQuote];
    localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
    ////////////////

    Swal.fire({
      icon: "success",
      title: "Your Quote Added Successfully",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });


    const newUserQuote = { n, q };
    setName("");
    setQuote("");

    setQuotes(updatedQuotes);


  };

  async function getId(){
    let url = `${process.env.REACT_APP_Google_URL}getUserQuote/${userId}`;
    let response = await fetch(url,{
      method: 'GET',
      headers: {
          "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.status === 200) {
          alert('got userId');
      }
  }).catch((error) => {
      alert((error));
  });
  }

  
//   useEffect(() => {
//     getId()

// }, [])


  async function handleDelete(id) {
    let url = `${process.env.REACT_APP_Google_URL}deleteQuote/id`;
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
          "Content-Type": "application/json"
      }
  }).then((response) => {
      if (response.status === 204) {
          alert('Quote deleted sucessfully');
      }
  }).catch((error) => {
      alert((error));
  });
  }

  // function handleDelete(index) {
  //   //LocalStorage
  //   const updatedQuotes = [...quotes];
  //   updatedQuotes.splice(index, 1);
  //   localStorage.setItem("quotes", JSON.stringify(updatedQuotes));
  //   setQuotes(updatedQuotes);
  //   ///

  // }

  return (
    <>
      <hr
        style={{
          background: "#3C4048",
          color: "#3C4048",
          borderColor: "#3C4048",
          height: "3px",
        }}
      />

      {/* <Button
        style={{
          backgroundColor: "rgba(0, 171, 179, 0.3)",
          marginLeft: "39%",
          marginTop: "25px",
          color: "#3C4048",
        }}
        className="card flex justify-content-center"
        onClick={handleShow}
        label="Add Quote"
        link
      /> */}

      
<Container className="d-flex justify-content-center">
        <Button
          style={{
            backgroundColor: "rgba(0, 171, 179, 0.3)",
            color: "#3C4048",
            marginTop: "25px",
          }}
          className="card flex justify-content-center"
          onClick={handleShow}
          label="Add Quote"
          link
        />
      </Container>

      <Modal show={show} onHide={handleClose} style={{ color: "#3C4048" }}>
        <Modal.Header closeButton>
          <Modal.Title>Add your Qoute</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control ref={userName} style={{ backgroundColor: '#F5F5F5' }}
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1">
              <Form.Label>Quote <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control ref={userQuote} style={{ backgroundColor: '#F5F5F5' }} as="textarea"
                placeholder="Your Quote.."
                value={quote}
                onChange={(event) => setQuote(event.target.value)}
                rows={3}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="secondary"
              onClick={handleButtonClick}
              style={{ marginRight: "10px", backgroundColor: 'rgb(0, 171, 179)' }}
            >
              Add
            </Button>
            <Button variant="secondary" onClick={handleClose}
              style={{ backgroundColor: 'rgb(0, 171, 179)' }}>
              Close
            </Button>
          </div>

        </Modal.Footer>
      </Modal>

      <section>
        <Container className="d-flex flex-column">
          <h2
            style={{
              color: "#3C4048",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            My Quotes
          </h2>
        </Container>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {console.log(quotes)}
          {/* {quotes.map((quote, index) => (
            <Card key={index} style={{ width: "18rem", marginBottom: "20px" }}>
              <Card.Body>
                <Card.Title>{quote.quote}</Card.Title>
                <Card.Text>Author: {quote.name}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  className="w-100"
                  variant="danger"
                  onClick={() => handleDelete()}
                >
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          ))} */}
        </div>
      </section>
    </>




  );
}
