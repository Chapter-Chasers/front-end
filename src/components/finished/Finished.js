import React, { useEffect, useState, useRef } from "react";
// import '../cardCss/card.css';
import Button from "react-bootstrap/Button";
import { Badge, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Messages } from 'primereact/messages';
import { useMountEffect } from 'primereact/hooks';
import Swal from 'sweetalert2';
import './Finished.css'


export default function Finished() {
    const [finishedBook, setFinished] = useState([]);
    const msgs = useRef(null);
    const userId = sessionStorage.getItem("userId");
    useMountEffect(() => {
        msgs.current.show(
            { sticky: true, severity: 'info', summary: 'Info', detail: 'No Data Found', closable: false }
        );
    });
    const url = process.env.REACT_APP_Google_URL;

    async function getFinishedBook() {
        await fetch(`${url}getBook/finished/${userId}`).then((response) => {
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
            if (response.status === 202) {
                getFinishedBook();
                Swal.fire({
                    icon: 'success',
                    text: 'Book updated successfully',
                });
            }
        }).catch((error) => {
            alert(error);
        });
    }

    async function handleDelete(bookId) {
        Swal.fire({
            title: 'Are you sure?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${url}delete/${bookId}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => {
                    if (response.status === 204) {
                        getFinishedBook();
                        Swal.fire({
                            icon: 'success',
                            text: 'Book deleted successfully',
                        });
                    }
                }).catch((error) => {
                    alert(error);
                });
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire({
                    text: 'Your book is safe from deletion',
                });
            }
        });
    }

    async function handleAddToCart(obj) {
        const storedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

        const book = {
            id: obj.id,
            name: obj.title,
            price: obj.price
        };
        storedItems.push(book);

        localStorage.setItem("cartItems", JSON.stringify(storedItems));
        Swal.fire({
            icon: 'success',
            text: 'Book added to cart successfully',
        });
    }

    useEffect(() => {
        getFinishedBook()

    }, [])

    return (
        <>
            {finishedBook.length === 0 ? <Container>
                <div className="mt-5" style={{ minHeight: "75vh" }}>
                    <Messages ref={msgs} />
                </div>
            </Container> :
                <Container className="d-flex flex-row justify-content-center mt-5 gap-4">
                    <div className="card-container">
                        {finishedBook?.map((obj, i) => (
                            <Card key={i} className="modern-card border-0" style={{ width: '18rem', minHeight: '20rem' }}>
                                {/* <Link to={`/bookDetails/${obj.id}`}> */}
                                <div className="image-container">
                                    <Card.Img variant="top" className="card-image" src={obj?.image} />
                                </div>
                                {/* </Link> */}
                                <Card.Body style={{ backgroundColor: '#f9f9f9' }}>
                                    <Card.Title >
                                        <Container>
                                            <h4>{obj?.title}</h4>
                                        </Container>
                                    </Card.Title>
                                    <Card.Text>
                                        <Container>
                                            <h5 className="author-name">
                                                Author:
                                                <Badge className="ms-2 text-wrap" bg="badge badge">
                                                    {obj?.author}
                                                </Badge>

                                            </h5>
                                        </Container>
                                    </Card.Text>
                                    <div className="container">
                                        <h5>
                                            {obj?.category}
                                        </h5>
                                    </div>
                                    <div className="button-container">
                                        <Button onClick={() => { updateState(obj.id, 'current') }} className="mb-3 btn-sm" style={{ backgroundColor: 'rgb(97 65 163)' }}>
                                            Current
                                        </Button>
                                        <Button onClick={() => { updateState(obj.id, 'favorite') }} className="mb-3 btn-sm" style={{ backgroundColor: 'rgb(97 65 163)' }}>
                                            Favorite
                                        </Button>
                                        <Button onClick={() => { handleDelete(obj.id) }} className="mb-3 btn-sm" style={{ backgroundColor: 'rgb(97 65 163)' }}>
                                            Delete
                                        </Button>
                                        <Button className="mb-3 btn-sm" style={{ backgroundColor: 'rgb(97 65 163)' }}
                                            onClick={() => { handleAddToCart(obj) }}
                                        >
                                            Cart
                                        </Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            }

        </>
    );
}

