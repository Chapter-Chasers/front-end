import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import { useParams,Link } from "react-router-dom";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import RelatedToAuthor from "../Related/RelatedToAuthor";
import RelatedToCat from "../Related/RelatedToCat";
import './BookD.css';
export default function BookDetails() {
  const idParams = useParams();
  console.log(idParams);
  const [detailedObj, setDatiledObj] = useState(null);
    async function handleAddBook(status) {
        const url = process.env.REACT_APP_Google_URL;
        const values = [2.5 , 3 , 3.5 , 4 , 4.5];
        const randomIndex = Math.floor(Math.random() * values.length);
        const randomValues = values[randomIndex]
        let request =
        {
            title: detailedObj?.volumeInfo?.title,
            image: detailedObj?.volumeInfo?.imageLinks?.smallThumbnail,
            description: detailedObj?.volumeInfo?.description,
            rating: detailedObj?.volumeInfo?.averageRating || randomValues,
            price: detailedObj?.saleInfo?.listPrice?.amount || 15,
            author: detailedObj?.volumeInfo?.authors,
            category:detailedObj?.volumeInfo?.categories,
            state: status
        }
        await fetch(`${url}addBook`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        }).then((response) => {
            if (response.status === '201') {
                return alert(`book added to ${status} succsesfully`)
            }
        }).catch(error => {
            alert(error)
        })
    }
  const id = idParams?.id;
  async function getObjById(id) {
    try {
      const url = process.env.REACT_APP_Google_URL
      const response = await fetch(`${url}search/${id}`);
      const recived = await response.json();
      setDatiledObj(recived);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getObjById(id);
  }, [idParams]);
  return (
    <>
    <div class = "back">
      {detailedObj === null ? <Container className="d-flex justify-content-center mt-5 mb-5">
        <Spinner animation="grow" />
      </Container> :
        <Container className="mt-5 p-3 mb-5">
          <Row>
            <Col md={4}>
              <Image style={{ width: "300px" , height : "440px" , borderRadius:  "25px"  , 
            borderColor : "#EAEAEA", borderWidth : "5px",
            }} src={detailedObj?.volumeInfo?.imageLinks?.smallThumbnail || "https://plus.unsplash.com/premium_photo-1667251758255-514ef43844fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt={detailedObj?.volumeInfo?.title} thumbnail />
              <DropdownButton id="dropdown-basic-button"  title="Want to read">
                <Dropdown.Item as="button" onClick={(e) => { handleAddBook('favorite') }} >
                  Add to favorite
                </Dropdown.Item>
                <Dropdown.Item as="button" style={{color:"#00ABB3"}} onClick={(e) => { handleAddBook('current') }}>
                  Move to current
                </Dropdown.Item>
                <Dropdown.Item as="button" onClick={(e) => { handleAddBook('finished') }}>
                  Move to finished
                </Dropdown.Item>
                <Dropdown.Item style={{color:"#00ABB3"}} as="button" >
                  Add to cart
                </Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col md={8}>
              <h1 style={{ backgroundColor:"#3C4048"  , borderRadius:  "15px" , color:"white" , height:"55px"}} >{detailedObj?.volumeInfo?.title}</h1>
              <p  style={{ fontFamily: "" ,}} ><h3><strong>overview</strong></h3><br />{detailedObj?.volumeInfo?.description || "No Description Available for this book"}</p>
              <p><strong style={{ backgroundColor:"#e6dd3e"  , borderRadius:  "3px" }}>Preview Link:</strong><br /><Link to={detailedObj?.volumeInfo?.previewLink || "/"}>{detailedObj?.volumeInfo?.previewLink || "/"}</Link>{ }</p>
              <p><strong>Category</strong><br />{detailedObj?.volumeInfo?.categories || 'Not in a specific category'}</p>
              <p><strong>Authors</strong><br />{`${detailedObj?.volumeInfo?.authors} `|| "Authors"}  </p>
              <p><strong>pageCount: </strong>{detailedObj?.volumeInfo?.pageCount || "200"}</p>
              <p><strong>publishedDate: </strong>{detailedObj?.volumeInfo?.publishedDate || "2015-6-7"}</p>
              <p><strong>Price:</strong> <span style={{ backgroundColor:"#4cf23d"  , borderRadius:  "3px" }} > {detailedObj?.saleInfo?.listPrice?.amount || "15"}$ </span> </p>
           
            </Col>
          </Row>
          <Row>
            <Col md={12} >
              <RelatedToAuthor author={detailedObj?.volumeInfo?.authors[0] || "milton"}></RelatedToAuthor>
              {detailedObj?.volumeInfo?.categories && (
                <RelatedToCat cat={detailedObj.volumeInfo.categories[0]} />
              )}
            </Col>
          </Row>
        </Container>
      }
      </div>
    </>
  )
}