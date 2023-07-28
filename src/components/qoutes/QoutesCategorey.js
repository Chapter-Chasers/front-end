import React from "react";
import { Container, Form } from "react-bootstrap";
import "./CatQutes.css";

export default function QoutesCategorey({ setSearchData }) {
  const fetchData = (category) => {
    if (category === "All") {
      fetch(`${process.env.REACT_APP_QOUTEPAGE_API_URL}/allQuotes`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setSearchData(data.results);
        })
        .catch((error) => console.error("Error fetching data:", error));
    } 
    else {
      fetch(`${process.env.REACT_APP_QOUTEPAGE_API_URL}?tags=${category}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched data:", data);
          setSearchData(data.results);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  const categories = [
    {
      label: "All",
      icon: '<span class="material-icons-outlined">format_quote</span>',
    },
    {
      label: "Love",
      icon: '<span class="material-icons-outlined">favorite</span>',
    },
    {
      label: "Happiness",
      icon: '<span class="material-icons-outlined">sentiment_very_satisfied</span>',
    },

    {
      label: "Technology",
      icon: '<span class="material-icons-outlined">memory</span>',
    },
    {
      label: "Famous-quotes",
      icon: '<span class="material-icons-outlined">format_quote</span>',
    },

    {
      label: "Science",
      icon: '<span class="material-icons-outlined">biotech</span>',
    },
    {
      label: "Wisdom",
      icon: '<span class="material-icons-outlined">lightbulb</span>',
    },
    {
      label: "Virtue",
      icon: '<span class="material-icons-outlined">gesture</span>',
    },
    {
      label: "Self",
      icon: '<span class="material-icons-outlined">face</span>',
    },
    {
      label: "Friendship",
      icon: '<span class="material-icons-outlined">people</span>',
    },
  ];

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    fetchData(selectedValue);
  };

  return (
    <div>
      <Container>
        <div className="checkbox-list-frame">
          <Form className="">
            {categories.map((cat) => (
              <div className="radio-item" key={cat.label} id="cat-item">
                <label className="icon-label-container">
                  <Form.Check
                    type="radio"
                    name="category"
                    value={cat.label}
                    onChange={handleCategoryChange}
                  />
                  <span dangerouslySetInnerHTML={{ __html: cat.icon }} />
                  <span className="category-label">{cat.label}</span>
                </label>
              </div>
            ))}
          </Form>
        </div>
      </Container>
    </div>
  );
}
