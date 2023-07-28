import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddQuote from "./AddQoute";
import Card from "react-bootstrap/Card";
import QoutesCategorey from "./QoutesCategorey";
import Emailsub from "../emailsub/Emailsub";
import "./qoutes.css";
import QuotesHero from "./Quoteshero";

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

    <QuotesHero />
      <Container>
        <Row>
          <Col md={2} className="category-column" style={{ height: "66vh", marginTop: '35px', width: '35vh'}}>
            <QoutesCategorey setSearchData={setQuotes} />
          </Col>

          <Col md={9} style={{marginTop:"15px"}} >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {quotes.map((quote) => (
                <Card key={quote._id} style={{ width: "18rem" }} className="mt-4"> 
                  <Card.Body>
                    <Card.Title>{quote.content}</Card.Title>
                    <Card.Text>Author: {quote.author} </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
        <Container className="mb-15">
          <AddQuote />
        </Container>
     
      </Container>
    </>
  );
};

export default Quotes;
