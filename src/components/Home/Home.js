import Header from "../Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import FB from
import "./Home.css";
import Search from "../Search/Search";
import Category from "../Categorey/Category";
// import FB from "../Feedback/FB";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import BookList from "../Books/BooksList/BookList";
// import Emailsub from "../emailsub/Emailsub";
import { useState, useEffect } from "react";
import { Navbar } from "react-bootstrap";

// import { Button } from 'primereact/button';


import Forms from '../forms/Forms'


function Home() {
  const [data, setData] = useState([]);

  async function getAllBooks() {
    await fetch(`${process.env.REACT_APP_Google_URL}allBooks`)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function getQoutes() {
    await fetch(`${process.env.REACT_APP_QOUTE_URL}`)
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
      })
      .catch((error) => {
        alert(error);
      });
  }
  useEffect(() => {
    getAllBooks();
  }, []);
  // useEffect(()=>{
  //     getQoutes()
  // },[])

  function setSearchDataHandler(data) {
    console.log("home data = " + Object.keys(data));
    setData(data);
  }
  return (
    <>
      <Header />
      <section className="home">
        <Container className="mt-5">
          <h1 className="heading-1 text-info" > Looking for a Book !   </h1>
        </Container>
        <Container>
          <Row>

            <Col md={12} >

              {/* Category component will always be on the left */}
              <Category
                setSearchData={setSearchDataHandler}
                className="category-list"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              {/* BookList component will be on the right */}
              <Container className="search-box">
                <Row>
                  <Col sm={12}>
                    <Search setSearchData={setSearchDataHandler} />
                  </Col>
                </Row>
              </Container>
              <Container className="book-list">
                <BookList data={data} />
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Emailsub /> */}
      {/* <FB /> */}
     
    </>
  );
}

export default Home;


