import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button ,OverlayTrigger,Tooltip} from "react-bootstrap";
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
  const handleCopyToClipboard = async (content) => {
    try {
      
      await navigator.clipboard.writeText(content);
    } catch (error) {
      
      console.log("Error copying to clipboard:", error);
    }
  };
  return (
    <>

    <QuotesHero />
      <Container>
        <Row>
          <Col md={2} className="category-column-quote" >
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
              {quotes.map((quote ,i) => (
                <Card key={i} style={{ width: "18rem" }} className="mt-4 card-quotes"> 
                  <Card.Body className="quotes-body">
                    <Card.Title className="quote-title">{quote.content}</Card.Title>
                    <Card.Text className="quote-text">Author: {quote.author} </Card.Text>
                    <OverlayTrigger
                      placement="bottom" 
                      overlay={<Tooltip id={`tooltip-copy-${i}`}>Copy to Clipboard</Tooltip>}
                    >
                    <Button onClick={() => handleCopyToClipboard(quote.content)} className="pi pi-copy copy-btn" variant="primary"></Button>
                    </OverlayTrigger>
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
