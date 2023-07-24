
import { Button, Form } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState, useEffect } from "react";

function Search(props) {
    const [selectedValue, setSelectedValue] = useState('Search by');
    const [serachText, setSearchText] = useState('');
    const [data, setData] = useState([]);

    async function handleSubmit() {
        switch (selectedValue) {
            case 'Title':
                //call API search by title
                break;
            case 'Auothar':
                //call API search by Auother
                await fetch(`${process.env.REACT_APP_Google_URL}searchAuthor?author=${serachText}`)
                    .then(
                        (response) => (response.json())
                    ).then((responseJson) => {
                        setData(responseJson);
                    }).catch(error => {
                        alert(error);
                    });
                break;
            case 'ISBN':
                //call API search by ISBN
                await fetch(`${process.env.REACT_APP_Google_URL}/search?isbn=${serachText}`)
                    .then(
                        (response) => (response.json())
                    ).then((responseJson) => {
                        setData(responseJson);
                    }).catch(error => {
                        alert(error);
                    });
                break;

            default:
                //call API search by defult
                console.log('defult')
                break;
        }
        await console.log('search data = ' + data);
        await props.setSearchData(data);
        return;
    }

    return (
        <div>
            <Form className="d-flex">
                <Form.Control
                    onChange={(e) => setSearchText(e.target.value)}
                    type="search"
                    placeholder="Search"
                    className="me-2 rounded-pill"
                    aria-label="Search"
                />
                <DropdownButton onSelect={setSelectedValue}
                    id="dropdown-basic-button"
                    title={selectedValue}>
                    <Dropdown.Item eventKey="Title">Title</Dropdown.Item>
                    <Dropdown.Item eventKey="Auothar">Auothar</Dropdown.Item>
                    <Dropdown.Item eventKey="ISBN">ISBN</Dropdown.Item>
                </DropdownButton>
                <Button className="rounded-pill"
                    variant="outline-primary"
                    onClick={() => handleSubmit()}>
                    Search
                </Button>
            </Form>
        </div>
    )
}
export default Search;