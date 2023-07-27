import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Badge, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function Finished() {
    const [finishedBook, setFinished] = useState([]);

    const url = process.env.REACT_APP_Google_URL;

    async function getFinishedBook() {
        await fetch(`${url}getBook/finished`).then((response) => {
            if (response.status === 200) {
                return response.json();
            }
            throw new Error('Something went wrong');
        }).then((responseJson) => {
            setFinished(responseJson);
        }).catch((error) => {
            alert('fromfinished' + error);
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
                alert('Movie deleted sucessfully');
            }
            getFinishedBook();
        }).catch((error) => {
            alert((error));
        });
    }

    useEffect(() => {
        getFinishedBook()
    }, [updateState])


    return (
        <>
            {finishedBook?.map((obj, i) => (
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
                            <Button onClick={() => { updateState(obj.id, 'current') }} className="mb-3 mx-1 btn-sm" variant="primary">
                                Move to current
                            </Button>
                            <Button onClick={() => { updateState(obj.id, 'favorite') }} className="mb-3 mx-1 btn-sm" variant="primary">
                                Move to Favorite
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

