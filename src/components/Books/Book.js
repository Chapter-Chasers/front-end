
import './book.css'
import { Link } from 'react-router-dom';


function Book({ book }) {
    const imageSrc = book?.volumeInfo?.imageLinks?.thumbnail || "https://plus.unsplash.com/premium_photo-1667251758255-514ef43844fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60";

    return (
        <>
            <div className="container">
                <div className="row mt-5">

                    <div className="preview-card">
                        <div className="preview-card__wrp">
                            <div className="preview-card__item">
                                <div className="preview-card__img">
                                    <img src={imageSrc} alt="" />
                                </div>
                                <div className="preview-card__content">
                                    <span className="preview-card__code text-light">{book?.volumeInfo?.publishedDate}</span>
                                    <div className="preview-card__title text-wrap text-light">{book?.volumeInfo?.title}</div>
                                    <div className="preview-card__text text-light">{book?.volumeInfo?.categories?.map((cat) => (
                                        <h6 key={cat}>
                                            {cat}
                                        </h6>
                                    )) || 'No specific cat'} </div>
                                    <Link to={`/bookDetails/${book.id}`} className="preview-card__button">READ MORE</Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/* <div className="container py-5">
                <div className="col">
                    <div className="card book">
                        <Link to={`/bookDetails/${book.id}`}>
                            <img src={imageSrc} className="card-img-top" alt="..." />
                        </Link>
                        <div className="card-body book-body">
                            <h5 className="card-title book-title">{book?.volumeInfo?.title}</h5>
                            <div className="card-text book-text">
                                <h5 className="author-name" >
                                    <p className='badge'>
                                        Authors:{' '}
                                    </p>
                                    {book?.volumeInfo?.authors.map((auth) => (
                                        <p key={auth}>
                                            {auth}
                                        </p>
                                    )) || 'Author'}
                                </h5>
                            </div>
                            <div className="container d-flex">
                                Category:{' '}
                                {book?.volumeInfo?.categories?.map((cat) => (
                                    <h6 key={cat}>
                                        {cat}
                                    </h6>
                                )) || 'No specific cat'}
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Book;


            // {/* {console.log(book.id)} */}
            // <Card className="modern-card border-0" style={{ width: '18rem', minHeight: '10rem' }}>
            //     <Link to={`/bookDetails/${book.id}`}>
            //         <div className="image-container">
            //             <Card.Img variant="top" className="card-image" src={imageSrc} />
            //         </div>
            //     </Link>
            //     <Card.Body>
            //         <Card.Title>
            //             <Container>
            //                 <h4>{book?.volumeInfo?.title}</h4>
            //             </Container>
            //         </Card.Title>
            //         <Card.Text>
            //             <Container>
            //                 <h5 className="author-name">
            //                     Author:{' '}
            //                     {book?.volumeInfo?.authors.map((auth) => (
            //                         <Badge key={auth} className="ms-2" bg="success">
            //                             {auth}
            //                         </Badge>
            //                     )) || 'Author'}
            //                 </h5>
            //             </Container>
            //         </Card.Text>
            //         <div className="container d-flex">
            //             {book?.volumeInfo?.categories?.map((cat) => (
            //                 <h6 key={cat}>
            //                     <Badge bg="secondary">{cat}</Badge>
            //                 </h6>
            //             )) || 'No specific cat'}
            //         </div>
            //     </Card.Body>
            // </Card>
