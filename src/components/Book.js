import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Book({book}) {
    return (
        <div>
            <Card style={{ width: '14rem' }}>
                <Card.Img variant="top" src={book?.volumeInfo?.imageLinks?.smallThumbnail} />
                <Card.Body>
                    <Card.Title>{book?.volumeInfo?.title}</Card.Title>
                    <Card.Text>{book?.volumeInfo?.authors[0]}</Card.Text>
                    <Button variant="primary">Favorite</Button>
                    <Button variant="primary">Current</Button>
                    <Button variant="primary">Finished</Button>
                    <Button variant="primary">Cart</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Book;