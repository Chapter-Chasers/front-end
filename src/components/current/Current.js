import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import { Badge, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Messages } from 'primereact/messages';
import { useMountEffect } from 'primereact/hooks';
import Swal from 'sweetalert2';
import "./Current.css";


export default function Current() {
    const [currentBook, setCurrentBook] = useState([]);
    const msgs = useRef(null);
    const userId = sessionStorage.getItem("userId");
    useMountEffect(() => {
        msgs.current.show(
            { sticky: true, severity: 'info', summary: 'Info', detail: 'No Data Found', closable: false }
        );
    });
    const url = process.env.REACT_APP_Google_URL;

    async function getCurrentBook() {
        await fetch(`${url}getBook/current/${userId}`).then((response) => {
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
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${url}delete/${bookId}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then((response) => {
                    if (response.status === 204) {
                        getCurrentBook();
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
        }
        )
    };

    function handleAddToCart(obj) {

        try {
            const storageArray = JSON.parse(localStorage.getItem('cartItems') || "[]");

            let bookObj = {
                id: obj.id,
                name: obj.title,
                price: obj.price
            }
            storageArray.push(bookObj)
            const jsonString = JSON.stringify(storageArray);
            localStorage.setItem('cartItems', jsonString);

            Swal.fire({
                icon: 'success',
                text: 'Added to Cart Successfully',
            });
        }
        catch {
            // alert('there is problem adding items to cart');
            console.log('there is problem adding items to cart');
        }
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
            </Container> :
                <Container className="d-flex flex-row justify-content-center gap-4 mt-5">
                    <div className="card-container">
                    {currentBook?.map((obj, i) => (
                        <Card key={i} className="modern-card border-0" style={{ width: '18rem', minHeight: '20rem' }}>
                            {/* <Link to={`/bookDetails/${obj.id}`}> */}
                            <div className="image-container">
                                <Card.Img variant="top" className="card-image" src={obj?.image} />
                            </div>
                            {/* </Link> */}
                            <Card.Body style={{backgroundColor:'#f9f9f9'}}>
                                <Card.Title>
                                    <Container>
                                        <h4>{obj?.title}</h4>
                                    </Container>
                                </Card.Title>
                                <Card.Text>
                                    <Container>
                                        <h5 className="author-name">
                                            Author:
                                            <Badge className="ms-2 text-wrap" bg="badge badge" >
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
                                    <Button onClick={() => { updateState(obj.id, 'favorite') }} className="mb-3 btn-sm" style={{backgroundColor:'rgb(97 65 163)'}}>
                                        Fav
                                    </Button>
                                    <Button onClick={() => { updateState(obj.id, 'finished') }} className="mb-3 btn-sm" style={{backgroundColor:'rgb(97 65 163)'}}>
                                        Finished
                                    </Button>
                                    <Button onClick={() => { handleDelete(obj.id) }} className="mb-3 btn-sm" style={{backgroundColor:'rgb(97 65 163)'}}>
                                        Delete
                                    </Button>
                                    <Button onClick={() => { handleAddToCart(obj) }} className="mb-3 btn-sm" style={{backgroundColor:'rgb(97 65 163)'}}>
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

