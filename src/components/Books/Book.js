import { Badge, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './book.css'
import { Link } from 'react-router-dom';

function Book({ book }) {
    const imageSrc = book?.volumeInfo?.imageLinks?.thumbnail || "https://plus.unsplash.com/premium_photo-1667251758255-514ef43844fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";

    return (
        <div >

            {console.log(book.id)}
            <Card className="modern-card border-0" style={{ width: '18rem', minHeight: '20rem' }}>
                <Link to={`/bookDetails/${book.id}`}>
                    <div className="image-container">
                        <Card.Img variant="top" className="card-image" src={imageSrc} />
                    </div>
                </Link>
                <Card.Body>
                    <Card.Title>
                        <Container>
                            <h4>{book?.volumeInfo?.title}</h4>
                        </Container>
                    </Card.Title>
                    <Card.Text>
                        <Container>
                            <h5 className="author-name">
                                Author:{' '}
                                {book?.volumeInfo?.authors.map((auth) => (
                                    <Badge key={auth} className="ms-2" bg="success">
                                        {auth}
                                    </Badge>
                                ))}
                            </h5>
                        </Container>
                    </Card.Text>
                    <div className="container d-flex">
                        {book.volumeInfo.categories?.map((cat) => (
                            <h6 key={cat}>
                                <Badge bg="secondary">{cat}</Badge>
                            </h6>
                        ))}
                    </div>
                    <Container className="d-flex flex-wrap">
                        <Button className="mb-3 mx-1 btn-sm" variant="primary">
                            Favorite
                        </Button>
                        <Button className="mb-3 mx-1 btn-sm" variant="primary">
                            Current
                        </Button>
                        <Button className="mb-3 mx-1 btn-sm" variant="primary">
                            Finished
                        </Button>
                        <Button className="mb-3 mx-1 btn-sm" variant="primary">
                            Cart
                        </Button>
                    </Container>
                </Card.Body>
            </Card>


        </div >
    )
}
export default Book;