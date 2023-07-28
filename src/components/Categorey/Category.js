// import React, { useState } from "react";
// import { Container, Form } from "react-bootstrap";
// import { Sidebar } from 'primereact/sidebar';
// import "./Category.css";

// function Category({ setSearchData }) {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleCategoryChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedCategory(selectedValue);
//     fetchData(selectedValue);
//   };

//   const fetchData = (category) => {
//     if (category === "All") {
//       fetch(`${process.env.REACT_APP_Google_URL}allBooks`)
//         .then(response => response.json())
//         .then(data => {
//           // console.log('Fetched data:', data);
//           setSearchData(data);
//         });
//     } else {
//       fetch(`${process.env.REACT_APP_Google_URL}searchCategory?cat=${category}`)
//         .then(response => response.json())
//         .then(data => {
//           // console.log('Fetched data:', data);
//           setSearchData(data);
//         })
//         .catch((error) => console.error("Error fetching data:", error));
//     }
//   };
//   const categories = [
//     "All",
//     "Art",
//     "Biography",
//     "Cooking",
//     "Fiction",
//     "History",
//     "Music",
//     "Medical",
//   ];
//   return (
//     <div>
//       <Container>
//         <div className="checkbox-list-frame">
//           <Form className="">
//             {categories.map((cat) => {
//               return (
//                 <div className="radio-item">
//                   <Form.Check
//                     type="radio"
//                     name={cat}
//                     label={cat}
//                     value={cat}
//                     checked={selectedCategory === { cat }}
//                     onChange={handleCategoryChange}
//                   />
//                 </div>
//               );
//             })}
//           </Form>
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default Category;


import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Sidebar } from 'primereact/sidebar';
import "./Category.css";

// import { BasicDemo } from "./BasicDemo"; // Import the BasicDemo component

function Category({ setSearchData }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    fetchData(selectedValue);
  };

  const fetchData = (category) => {
    if (category === "All") {
      fetch(`${process.env.REACT_APP_Google_URL}allBooks`)
        .then(response => response.json())
        .then(data => {
          // console.log('Fetched data:', data);
          setSearchData(data);
        });
    } else {
      fetch(`${process.env.REACT_APP_Google_URL}searchCategory?cat=${category}`)
        .then(response => response.json())
        .then(data => {
          // console.log('Fetched data:', data);
          setSearchData(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
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
        <div className="checkbox-list-frame">
          <Form className="d-flex mx-5">
            {categories.map((cat) => {
              return (
                <div className="radio-item">
                  <Button
                    type="button"
                    name={cat.name}
                    // label={cat.name}
                    value={cat.name}
                    checked={selectedCategory === cat.name}
                    onClick={handleCategoryChange}
                    className="mx-5"
                    variant="outline-primary"
                  >{cat.name} </Button>
                </div>
              );
            })}
          </Form>
        </div>
      </Container>
  );
}

export default Category;
