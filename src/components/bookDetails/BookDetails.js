import React, { useState ,useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const idParams = useParams();
  const [detailedObj, setDatiledObj] = useState(null);
  console.log(idParams.id);
  const id = idParams?.id;

  async function getObjById(id) {
    try{
   const url = process.env.REACT_APP_Google_URL
    const response = await fetch(`${url}search/${id}`);
    const recived = await response.json();
    setDatiledObj(recived);
    }catch(error){
     console.log(error); 
    }
  }
  useEffect(() => {
    getObjById(id);
}, [idParams]);
  return (
    <>
      <Container>
        <Row>
          <Col md={4}>
            <Image style={{width:300}} src={detailedObj?.volumeInfo?.imageLinks?.smallThumbnail || "https://plus.unsplash.com/premium_photo-1667251758255-514ef43844fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" } alt={detailedObj?.volumeInfo?.title} thumbnail />
          </Col>
          <Col md={8}>
            <h1>{detailedObj?.volumeInfo?.title}</h1>
            <p><strong>Description:</strong><br/>{detailedObj?.volumeInfo?.description}</p>
            <p><strong>Category:</strong><br/>{detailedObj?.volumeInfo?.categories}</p>
            <p><strong>Aouthar:</strong><br/>{detailedObj?.volumeInfo?.authors}</p>
            <p><strong>pageCount:</strong><br/>{detailedObj?.volumeInfo?.pageCount}</p>
            <p><strong>publishedDate:</strong><br/>{detailedObj?.volumeInfo?.publishedDate}</p>
          </Col>
        </Row>
      </Container>

    </>
  )
}
