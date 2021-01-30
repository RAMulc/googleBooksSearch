import React, { useEffect, useState } from "react";
import ViewBtn from "../components/ViewBtn";
import AddBtn from "../components/AddBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function SearchBooks() {
    const [gBooks, setGBooks] = useState([]);
    const [formObject, setFormObject] = useState({});

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    };

    function handleFormSearch(event) {
        event.preventDefault();
        if (formObject.search) {
            loadBooks(formObject.search);
            setFormObject({ ...formObject, search: "" });
        }
    };

    function loadBooks(searchText) {
        if (searchText) {
            API.getGoogleBooks(searchText)
                .then(res => {
                    setGBooks(res.data.items);
                }
                )
                .catch(err => console.log(err));
        }

    };

    function addBook(book) {
        API.saveBook(book)
            .then(res => {
                //
            }
            )
            .catch(err => console.log(err));

    };

    function bookDetails(book) {
        const obj = book.volumeInfo;
        // console.log("book", book);
        return {
            authors: !obj.hasOwnProperty("authors") ?
                "Author unknown" :
                book.volumeInfo.authors.join(", "),
            description: !obj.hasOwnProperty("description") ?
                "No description available" :
                book.volumeInfo.description,
            image: !obj.hasOwnProperty("imageLinks") ?
                "https://books.google.com.au/googlebooks/images/no_cover_thumb.gif" :
                book.volumeInfo.imageLinks.smallThumbnail,
            link: !obj.hasOwnProperty("infoLink") ?
                "No link available" :
                book.volumeInfo.infoLink,
            title: !obj.hasOwnProperty("title") ?
                "No title available" :
                book.volumeInfo.title,
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col size="12">
                    <strong>Book Search</strong>
                    <p>Book</p>
                    <form>
                        <Row>
                            <Col size="4">

                                <Input
                                    onChange={handleInputChange}
                                    name="search"
                                    placeholder="Search Text (required)"
                                    value={formObject.search}
                                />
                            </Col>
                            <Col size="2">
                                <FormBtn
                                    disabled={!(formObject.search)}
                                    onClick={handleFormSearch}
                                >
                                    Search
                        </FormBtn>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col size="12">
                    {gBooks.length ? (
                        <List>
                            {gBooks.map(book => {
                                const jBook = bookDetails(book);
                                return (
                                    <ListItem key={jBook.link}>
                                        <ViewBtn link={jBook.link} />
                                        <AddBtn onClick={() => addBook(jBook)} />
                                        <h3>{jBook.title}</h3>
                                        <h4>{jBook.authors}</h4>
                                        <img src={jBook.image}
                                            alt={jBook.title}
                                            className="book-thumbnail float-left" />
                                        <p>{jBook.description}</p>
                                    </ListItem>
                                );
                            })}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>
            </Row>
        </Container>
    );
}


export default SearchBooks;
