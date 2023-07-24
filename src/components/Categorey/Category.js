import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import './Category.css';

function Category({ setSearchData }) {
  const [selectedCategory, setSelectedCategory] = useState('All');


  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    fetchData(selectedValue);
  };


  const fetchData = (category) => {
    if (category === 'All') {
      fetch(`${process.env.REACT_APP_Google_URL}allBooks`)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched data:', data);
          setSearchData(data);
        })
    } else {
      fetch(`${process.env.REACT_APP_Google_URL}searchCategory?cat=${category}`)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched data:', data);
          setSearchData(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  };
const categories = [
  'All',
  'Art',
  'Biography',
  'Fitness',
  'Fiction',
  'History',
  'Music',
  'Medical',

]
  return (
    <div>
      <Container>

        <div className="checkbox-list-frame">
          <Form className=''>
            {categories.map((cat)=>{
              return <div className="radio-item">
                <Form.Check
                  type="radio"
                  name={cat}
                  label={cat}
                  value={cat}
                  checked={selectedCategory === {cat}}
                  onChange={handleCategoryChange}
                />
              </div>
            })}
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default Category;
