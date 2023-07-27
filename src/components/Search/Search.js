import React, { useState } from 'react';
import './Search.css'
import { Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';

function Search({ setSearchData }) {
    const [searchText, setSearchText] = useState('');
    const [selectedOption, setSelectedOption] = useState('Search by');
    const [books,setBooks] = useState([])
    const handleSearch = async () => {
        try {
            switch (selectedOption.toLocaleLowerCase()) {
                case 'title':{
                    const response = await fetch(`${process.env.REACT_APP_Google_URL}search?title=${searchText}`)
                    const data = await response.json();
                    setBooks(data);
                }     
                    break;
                case 'author':{
                    const response = await fetch(`${process.env.REACT_APP_Google_URL}searchAuthor?author=${searchText}`)
                    const data = await response.json();
                    setBooks(data);
                }
                    break;
                case 'isbn':{
                    const response = await fetch(`${process.env.REACT_APP_Google_URL}search?isbn=${searchText}`)
                    const data = await response.json();
                    setBooks(data);
                }
                    break;

                default:
                    break;
            }
        } catch (error) {

        }
        console.log('Selected Option:', selectedOption);
        console.log('Search Text:', searchText);
        console.log(books);
        setSearchData(books)
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2 rounded-pill"
                aria-label="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />

            <DropdownButton id="dropdown-basic-button" title={selectedOption}>
                <Dropdown.Item onClick={() => handleOptionSelect('Title')}>Title</Dropdown.Item>
                <Dropdown.Item onClick={() => handleOptionSelect('Author')}>Author</Dropdown.Item>
                {/* <Dropdown.Item onClick={() => handleOptionSelect('ISBN')}>ISBN</Dropdown.Item> */}
            </DropdownButton>

            <Button
                className="rounded-pill"
                variant="outline-primary"
                onClick={handleSearch}
            >
                Search
            </Button>
        </Form>
    );
}

export default Search;