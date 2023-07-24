import React from "react";
import Card from "react-bootstrap/Card";
import './Footer.css';

export default function Footer() {

    const gmailLink = "https://mail.google.com/mail/u/0/#inbox";
  const socialMediaLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
    { name: "Twitter", url: "https://twitter.com/" },
  ];

  return (
    <div className="footer">
      {/* <h3 className="h3">Team members</h3> */}
      <div className="members">
        <Card
          border="light"
          className="card" 
          id="NameCard"
          style={{ width: "10rem", height: "0rem" }}
        >
          <Card.Header>Team Members</Card.Header>
        </Card>

        {/* team lead Mohammad Card */}
        <Card
          border="light"
          className="card"
          style={{ width: "10rem", height: "8rem" }}
        >
          <Card.Header>Mohammad</Card.Header>
          <Card.Body>
            <Card.Title>Team Lead</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>

        {/* team member Ghaidaa card */}
        <Card
          border="light"
          className="card"
          style={{ width: "10rem", height: "8rem" }}
        >
          <Card.Header>Ghaidaa</Card.Header>
          <Card.Body>
            <Card.Title>Team Member</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>

        {/* team member Haya Card */}
        <Card
          border="light"
          className="card"
          style={{ width: "10rem", height: "8rem" }}
        >
          <Card.Header>Haya</Card.Header>
          <Card.Body>
            <Card.Title>Team Member</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>

        {/* team member Zaid Card */}
        <Card
          border="light"
          className="card"
          style={{ width: "10rem", height: "8rem" }}
        >
          <Card.Header>Zaid</Card.Header>
          <Card.Body>
            <Card.Title>Team Member</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>

        {/* team member Ahmad Card */}
        <Card
          border="light"
          className="card"
          style={{ width: "10rem", height: "8rem" }}
        >
          <Card.Header>Ahmad</Card.Header>
          <Card.Body>
            <Card.Title>Team Member</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
      </div>

      <div className="contact-info">
        {/* <h4>Contact Information</h4> */}
        {/* <Card
          border="light"
        //   className="card"
          style={{ width: "10rem", height: "0rem"}}
        >
          <Card.Header>Contact Information</Card.Header>
        </Card> */}
        <div className="contact-links">
          <a href={gmailLink} className="contact-link">
          chapterChasers@gmail.com {/* Gmail Link */}
          </a>
          {socialMediaLinks.map((socialMedia) => (
            <a
              key={socialMedia.name}
              href={socialMedia.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              {socialMedia.name} {/* Social Media Links */}
            </a>
          ))}
        </div>
        
    </div>
    </div>

  );
}
