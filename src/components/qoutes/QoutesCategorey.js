import React from "react";
import { Container, Form } from 'react-bootstrap';
import '../Categorey/Category.css';

export default function QoutesCategorey({ setSearchData }) {
    const fetchData = (category) => {
      if (category === 'All') {
        fetch(`${process.env.REACT_APP_QOUTEPAGE_API_URL}/allQuotes`)
          .then(response => response.json())
          .then(data => {
            console.log('Fetched data:', data);
            setSearchData(data.results);
          })
          .catch(error => console.error('Error fetching data:', error));
      } else {
        fetch(`${process.env.REACT_APP_QOUTEPAGE_API_URL}?tags=${category}`)
          .then(response => response.json())
          .then(data => {
            console.log('Fetched data:', data);
            setSearchData(data.results);
          })
          .catch(error => console.error('Error fetching data:', error));
      }
    };

  const categories = [
    'All',
    'Love',
    'Happiness',
    'Technology',
    'Famous-quotes',
    'Science',
    'Wisdom',
    'Virtue',
    'Self',
    'Friendship',
   
  ];

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    fetchData(selectedValue);
  };

  return (
    <div>
      <Container>
        <div className="checkbox-list-frame">
          <Form className=''>
            {categories.map((cat) => (
              <div className="radio-item" key={cat}>
                <Form.Check
                  type="radio"
                  name="category"
                  label={cat}
                  value={cat}
                  onChange={handleCategoryChange}
                />
              </div>
            ))}
          </Form>
        </div>
      </Container>
    </div>
  );
}
