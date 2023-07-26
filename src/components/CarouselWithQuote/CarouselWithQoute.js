import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselWithQuote = () => {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_QOUTE_URL}`);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setQuote(data.content, data.author);

        } catch (error) {
            console.log('Error fetching quote:', error);
        }
    };
    const handleCarouselSelect = (selectedIndex, e) => {
        // When the user presses the arrow buttons, fetch a new quote and update the state
        fetchQuote();
      };
    return (
        <Carousel onSelect={handleCarouselSelect}>
            <Carousel.Item>
                <div className="carousel-content">
                    <p>{quote}</p>
                    <p>{quote.author}</p>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselWithQuote;
