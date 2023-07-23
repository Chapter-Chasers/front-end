import { Route, Routes } from 'react-router';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">ChapterChasers</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/'>Home</Nav.Link>
                <NavDropdown title="Library" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/allBooks">All Books</NavDropdown.Item>
                  <NavDropdown.Item href="/favBooks">Favorite Books</NavDropdown.Item>
                  <NavDropdown.Item href="/currentBooks">Current Books</NavDropdown.Item>
                  <NavDropdown.Item href="/finishedBooks">Finished Books</NavDropdown.Item>
                </NavDropdown>
              <Nav.Link href='/cart'>Cart</Nav.Link>
              {/* <Nav.Link href='/'>Quotes</Nav.Link> */}
              <Nav.Link href='/about us'>About Us</Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>

  )
}

export default NavBar;