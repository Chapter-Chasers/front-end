import React, { useEffect, useState, useRef } from "react";
// import '../cardCss/card.css';
import Button from "react-bootstrap/Button";
import { Badge, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Messages } from 'primereact/messages';
import { useMountEffect } from 'primereact/hooks';
export default function Current() {
    const [currentBook, setCurrentBook] = useState([]);
    const msgs = useRef(null);

    useMountEffect(() => {
        msgs.current.show(
            { sticky: true, severity: 'info', summary: 'Info', detail: 'No Data Found', closable: false }
        );
    });
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
            if (response.status === 202) {

                getCurrentBook();
                alert("Updated sucessfully");
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
                getCurrentBook();
                alert('Book deleted sucessfully');
                
            }
        }).catch((error) => {
            alert((error));
        });
    }

    async function handleAddToCart(obj){
        const storedItems = localStorage.getItem("cartItems");
        
        const book = {
            id : obj.id,
            name: obj.title,
            price: obj.price
        };
        storedItems.push(book);

        localStorage.setItem("cartItems", JSON.stringify(storedItems));
    }

    useEffect(() => {

        getCurrentBook()
    }, [currentBook])



    return (
        <>
            {currentBook.length === 0 ? <Container>
                <div className="mt-5" style={{ minHeight: "75vh" }}>
                    <Messages ref={msgs} />
                </div>
            </Container> : currentBook?.map((obj, i) => (
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
                            <Button onClick={() => {handleAddToCart(obj)}} className="mb-3 mx-1 btn-sm" variant="primary">
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