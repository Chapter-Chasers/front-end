import Quotes from '../Quotes/Quotes';
import Carousel from 'react-bootstrap/Carousel';
import './Header.css';

function Header() {
    return (
      <div class="carousel-container">
        <Carousel data-bs-theme="dark" >
        <Carousel.Item >
          <img 
            className="d-block  w-100"
            src="https://mymodernmet.com/wp/wp-content/uploads/2020/03/national-emergency-library-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Quote 1</h5>
            <p>Book Name</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100"
            src="https://mymodernmet.com/wp/wp-content/uploads/2020/03/national-emergency-library-1.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Quote 2</h5>
            <p>Book Name</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100"
            src="https://mymodernmet.com/wp/wp-content/uploads/2020/03/national-emergency-library-1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Quote 3</h5>
            <p>Book Name </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default Header;