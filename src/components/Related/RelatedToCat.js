import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import RelatedBook from './RelatedBook';
import './RelatedToAuthor.css'

const RelatedToCat = ({ cat }) => {
    const [relatedBooks, setRelatedBooks] = useState([]);

    useEffect(() => {
        // Fetch related books by the same author using the Google Books API
        fetch(`${process.env.REACT_APP_Google_URL}searchCategory?cat=${cat}`)
            .then(response => response.json())
            .then(data => {
                setRelatedBooks(data.items || []);
            })
            .catch(error => console.log(error));
    }, [cat]);


    return (
        <>
            {relatedBooks.length === 0 ? <Container className='d-flex justify-content-center mt-5'>
                <Spinner animation="grow" />
            </Container>
                :
                <div>
                    <h2 className='related-books-heading'>Related Books by the Same Category</h2>
                    <div className='d-flex flex-wrap w-100 gap-5 justify-content-center'>
                        {relatedBooks?.slice(1, 5).map(relatedBook => (
                            <RelatedBook
                                key={relatedBook.id}
                                book={relatedBook} ></RelatedBook>
                        ))}
                    </div>
                </div>
            }
        </>
    );
};

export default RelatedToCat;
