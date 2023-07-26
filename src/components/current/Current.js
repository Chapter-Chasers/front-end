import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../cardCss/card.css';
import Button from "react-bootstrap/Button";
import { Badge, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Current() {
    const [currentBook, setCurrentBook] = useState([]);

    const url = process.env.REACT_APP_Google_URL;

    async function getCurrentBook() {
        await fetch(`${url}getBook/current`).then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error('Something went wrong');
        }).then((responseJson) => {
          setCurrentBook(responseJson);
        }).catch((error) => {
            alert('fromCurrent' + error);
        });
    }

    async function updateState(id, state) {
        await fetch(`${url}update/${state}/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
  
        }).then((response) => {
            if (response.status === 200) {
                alert("Updated sucessfully");
                handleDelete(id);
            }
        }).catch((error) => {
            alert(error);
        });
    }

    async function handleDelete(bookId) {
        await fetch(`${url}delete/${bookId}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            if (response.status === 204) {
                alert('Book deleted sucessfully');
            }
            getCurrentBook();
        }).catch((error) => {
            alert((error));
        });
    }

    useEffect(() => {
      getCurrentBook()
    }, [updateState])


    return (
        <>
            {currentBook?.map((obj, i) => (
                <Card key={i} className="modern-card border-0" style={{ width: '18rem', minHeight: '20rem' }}>
                    {/* <Link to={`/bookDetails/${obj.id}`}> */}
                    <div className="image-container">
                        <Card.Img variant="top" className="card-image" src={obj?.image} />
                    </div>
                    {/* </Link> */}
                    <Card.Body>
                        <Card.Title>
                            <Container>
                                <h4>{obj?.title}</h4>
                            </Container>
                        </Card.Title>
                        <Card.Text>
                            <Container>
                                <h5 className="author-name">
                                    Author:{' '}

                                    <Badge className="ms-2" bg="success">
                                        {obj?.author}
                                    </Badge>

                                </h5>
                            </Container>
                        </Card.Text>
                        <div className="container d-flex">

                            <h6>
                                <Badge bg="secondary">{obj?.category}</Badge>
                            </h6>

                        </div>
                        <Container className="d-flex flex-wrap">
                            <Button onClick={() => { updateState(obj.id, 'favorite') }} className="mb-3 mx-1 btn-sm" variant="primary">
                                Move to Favorite
                            </Button>
                            <Button onClick={() => { updateState(obj.id, 'finished') }} className="mb-3 mx-1 btn-sm" variant="primary">
                                Move to Finished
                            </Button>
                            <Button onClick={() => { handleDelete(obj.id) }} className="mb-3 mx-1 btn-sm" variant="primary">
                                delete
                            </Button>
                            <Button className="mb-3 mx-1 btn-sm" variant="primary">
                                Cart
                            </Button>
                        </Container>
                    </Card.Body>
                </Card>
            ))

            }

        </>
    );
}