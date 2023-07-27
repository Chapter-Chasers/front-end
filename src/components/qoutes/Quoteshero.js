import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './quotesHero.css'; 

const QuotesHero = () => {
    return (
        <section className="hero-section">
            <Container>
                <Row className="align-items-center">
                    <Col className='d-flex flex-column align-items-center'>
                        <h1>Inspiration Unleashed</h1>
                        <p>Welcome to our enchanting world of quotes, where inspiration knows no bounds! Dive into a collection of timeless wisdom, thought-provoking insights, and motivational musings.</p>
                        <Button className="explore-btn">Explore Quotes</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default QuotesHero;
