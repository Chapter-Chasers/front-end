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
            console.log(data);
            setQuote(data.content);
        } catch (error) {
            console.log('Error fetching quote:', error);
        }
    };

    return (
        <Carousel>
            <Carousel.Item>
                <div className="carousel-content">
                    <p>{quote}</p>
                </div>
            </Carousel.Item>
            {/* Add more Carousel items if needed */}
        </Carousel>
    );
};

export default CarouselWithQuote;
