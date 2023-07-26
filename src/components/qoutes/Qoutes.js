import React, { useState, useEffect } from "react";
// import Table from 'react-bootstrap/Table';
import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import QoutesCategorey from "./QoutesCategorey";
// import "../Categorey/Category.css";
import "./qoutes.css";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchQuotes(selectedCategory);
  }, [selectedCategory]);

  const fetchQuotes = async (category) => {
    try {
      let apiUrl = process.env.REACT_APP_QOUTEPAGE_API_URL;
      if (category !== "All") {
        apiUrl += `?tags=${category}`;
      }
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      if (!Array.isArray(data.results)) {
        throw new Error("Invalid API response.");
      }
      setQuotes(data.results);
    } catch (error) {
      console.log("Error fetching quotes:", error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {/* <QoutesCategorey setSearchData={setQuotes} />
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {quotes.map((quote) => (
            <Card key={quote._id} style={{ width: '18rem', marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>{quote.content}</Card.Title>
                <Card.Text>Author: {quote.author} </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div> */}

      <Container >
        <Row>
          <Col md={3} className="category-column">
            <QoutesCategorey setSearchData={setQuotes} />
          </Col>

          <Col md={9}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {quotes.map((quote) => (
                <Card
                  key={quote._id}
                  style={{ width: "18rem", marginBottom: "20px" }}
                >
                  <Card.Body>
                    <Card.Title>{quote.content}</Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted">ID: {quote._id}</Card.Subtitle> */}
                    <Card.Text>Author: {quote.author} </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Quotes;