import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Books from '../Books/Book';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import Search from '../Search/Search';
import Category from '../Categorey/Category';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BookList from '../Books/BooksList/BookList';
import { useState, useEffect } from "react";


function Home() {
    const [data, setData] = useState([]);

    async function getAllBooks() {

        await fetch(`${process.env.REACT_APP_Google_URL}allBooks`)
            .then(
                (response) => (response.json())
            ).then((responseJson) => {
                setData(responseJson);
            }).catch(error => {
                alert(error);
            });
    }

    useEffect(() => {
        getAllBooks()
    }, []);

    async function setSearchDataHandler(data) {
        console.log('home data = ' + data);
        await setData(data);
    }
    return (
        <div>
            <NavBar />
            <Header />
            <div>
                <Container>
                    <Row>
                        <Col>
                            <ButtonGroup size="lg" className="mb-2">
                                <Button onClick={getAllBooks}>Books</Button>
                                <Button>Quotes</Button>
                            </ButtonGroup>
                            <br />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Category />
                        </Col>
                        <Col md="auto">

                            <Container className="mt-5">
                                <Row>
                                    <Col sm={16}>
                                        <Search setSearchData={setSearchDataHandler} />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col xs lg="14">

                        </Col>
                    </Row>
                </Container>
                <BookList data={data} />
            </div>
            <Books />
        </div>
    )
}

export default Home;