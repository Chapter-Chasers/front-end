import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./Category.css";

function Category({ setSearchData }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
  };

  const fetchData = (category) => {
    const apiUrl =
      category === "All"
        ? `${process.env.REACT_APP_Google_URL}allBooks`
        : `${process.env.REACT_APP_Google_URL}searchCategory?cat=${category}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBooksData(data);
        setSearchData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const categories = [
    { name: "All" },
    { name: "Art" },
    { name: "Biography" },
    { name: "Cooking" },
    { name: "Fiction" },
    { name: "History" },
    { name: "Music" },
    { name: "Medical" },
  ];

  return (
    <Container>
      <div className="checkbox-list-frame rounded-button-group">
        <Form className="d-flex mx-5">
          {categories.map((cat) => {
            return (
              <div className="radio-item" key={cat.name}>
                <Button
                  style={{
                    backgroundColor: "rgb(64 223 241)",
                    color: "black",
                    borderColor: "#552b2b",
                  }}
                  type="button"
                  name={cat.name}
                  value={cat.name}
                  onClick={handleCategoryChange}
                  className={`mx-2 custom-button ${
                    selectedCategory === cat.name ? "active" : ""
                  }`}
                  variant="outline-primary"
                >
                  {cat.name}
                </Button>
              </div>
            );
          })}
        </Form>
      </div>
    </Container>
  );
}

export default Category;
