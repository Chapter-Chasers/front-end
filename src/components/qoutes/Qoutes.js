import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';



const Quotes = () => {
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
        <>
         <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>quote</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{quote}</td>
        </tr>
      </tbody>
    </Table>

    <Card style={{ width: '18rem', height: '25vh'}}>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        {quote}
        </Card.Text>
      </Card.Body>
    </Card>

        </>
        // <Carousel>
        //     <Carousel.Item>
        //         <div className="carousel-content">
        //             <p>{quote}</p>
        //         </div>
        //     </Carousel.Item>
        // </Carousel>
    );
};

export default Quotes;
