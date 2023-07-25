
import Header from '../Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import Search from '../Search/Search';
import Category from '../Categorey/Category';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import BookList from '../Books/BooksList/BookList';
import Emailsub from '../emailsub/Emailsub';
import { useState, useEffect } from "react";
import { Navbar } from 'react-bootstrap';


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
    async function getQoutes() {
        await fetch(`${process.env.REACT_APP_QOUTE_URL}`).then(
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
    // useEffect(()=>{
    //     getQoutes()
    // },[])

    function setSearchDataHandler(data) {
        console.log('home data = ' + Object.keys(data));
        setData(data);
    }
    return (
        <>
            <Header />
            <section className='home'>

                <Container>
                    <Row>
                        <Col>
                            <Category setSearchData={setSearchDataHandler} className="category-list" />
                        </Col>
                        <Col md="auto">

                            <Container className="search-box">
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
                    <Container className="book-list">
                        <BookList data={data} />
                    </Container>
                    <Container>

                    </Container>
                </Container>
            </section>
            <Emailsub />
        </>

    )
}

export default Home;