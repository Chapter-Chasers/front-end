import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import './RelatedBook.css';

const RelatedBook = ({ book }) => {
    const imageSrc = book?.volumeInfo?.imageLinks?.thumbnail || "https://plus.unsplash.com/premium_photo-1667251758255-514ef43844fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";
    return (
        <div className="related-book-card">
            <Link onClick={() => (window.scroll(0, 0))} to={`/bookDetails/${book.id}`}>
                <img src={imageSrc} alt={book?.volumeInfo?.title} className="book-image" />
            </Link>
            <div className="book-details">
                <h3 className="book-title text-wrap">{book?.volumeInfo?.title}</h3>
                <p className="book-category">{book.volumeInfo.categories?.map((cat) => (
                    <h6 key={cat}>
                        <Badge className='text-wrap' bg="secondary">{cat}</Badge>
                    </h6>
                )) || 'No specific Category'}</p>
            </div>
        </div>
    );
};

export default RelatedBook;
