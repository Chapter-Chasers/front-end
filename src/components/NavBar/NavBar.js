
import Navbar from 'react-bootstrap/Navbar';
import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { NavDropdown } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react'


function NavBar() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  console.log(user);
  
  if (isAuthenticated) {
    checkuser();
  }

  async function checkuser() {
    console.log(user.sub);
    try {
      await fetch(`${process.env.REACT_APP_Google_URL}user`, {
        method: 'POST',
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          id: user.sub
        }),
        headers: {
          "Content-Type": "application/json",
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

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
              <Nav.Link href='/qoutes'>Qoutes</Nav.Link>
              <Nav.Link href='/cart'>Cart</Nav.Link>
              <Nav.Link href='/aboutUs'>About Us</Nav.Link>
              <Nav.Link href=''>{user ? <Button onClick={() => logout()}>Logout </Button> : <Button onClick={() => loginWithRedirect()}>Login </Button>} </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}

export default NavBar;