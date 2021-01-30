import React, { useEffect, useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import ViewBtn from "../components/ViewBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./style.css";

function SavedBooks() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a book from the database with a given id, then reloads books from the db
    function deleteBook(id) {
        API.deleteBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Row>
                <Col size="12">
                    {books.length ? (
                        <List>
                            {books.map(book => {
                                return (
                                    <ListItem key={book._id}>
                                        <DeleteBtn onClick={() => deleteBook(book._id)} />
                                        <ViewBtn link={book.link}  />
                                        <h3>{book.title}</h3>
                                        <h4>{book.authors}</h4>
                                        <img src={book.image} alt={book.title} className="book-thumbnail float-left" />
                                        <p>{book.description}</p>
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


export default SavedBooks;
