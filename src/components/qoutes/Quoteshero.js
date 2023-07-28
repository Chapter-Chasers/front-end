import React, {useRef} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './quotesHero.css'; 

const QuotesHero = () => {
    const h1Ref = useRef(null);

    const scrollToH1 = () => {
        h1Ref.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <section className="hero-section">
            <Container>
                <Row className="vh-100">
                    <Col className="d-flex flex-column align-items-center justify-content-center text-center">
                        <h1 ref={h1Ref}>Inspiration Unleashed</h1>
                        <p>Welcome to our enchanting world of quotes, where inspiration knows no bounds! Dive into a collection of timeless wisdom, thought-provoking insights, and motivational musings.</p>
                        <Button onClick={scrollToH1} className="explore-btn">Explore Quotes</Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default QuotesHero;
