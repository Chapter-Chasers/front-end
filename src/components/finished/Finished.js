import React from "react";
import { Link } from "react-router-dom";
import '../cardCss/card.css';
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function Finished(){
    return(
        <>
        <div className="cardsWrapper">
            <section className="sectionMain">
                <title>Card with Image</title>
                <link rel="stylesheet" href="styles.css" />
                <section className="cardB">
                    <img src="https://via.placeholder.com/300" alt="Card Image" />
                    <section className="cardContent">
                        <h3>Finished books card</h3>
                        <p>Some text describing the card.</p>
                        <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Remove</Button>
                <Button variant="secondary">move to current</Button>
                <Button variant="secondary">cart</Button>
                {/* <Button variant="secondary"></Button> */}
              </ButtonGroup>
                        <a href="/bookDetails">View Book Details</a>
                    </section>
                </section>
            </section>
        </div>
        </>
    )
}

