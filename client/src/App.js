import React, { useState } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API.js";
import { BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

function App() {
  const [books, setBooks] = useState([]);
  const [BookSearch, setBookSearch] = useState("");

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
  };

  const handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getGoogleBooks(BookSearch)
      .then(res => {
        setBooks(res.data.items);
        console.log("********books",books);
      })
      .catch(err => console.log(err))
      
  };
  console.log(books);

  return (
    <div>
      <Nav />
      <Jumbotron />
      <Container>
        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input
                      name="BookSearch"
                      value={BookSearch}
                      onChange={handleInputChange}
                      placeholder="Search For a Book"
                    />
                  </Col>
                  <Col size="xs-3 sm-2">
                    <Button
                      onClick={handleFormSubmit}
                      type="success"
                      className="input-lg"
                    >
                        Search
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <ul className="list-group">
                {
                  books.map(book => {
                    return (
                      <BookListItem
                        key={book.volumeInfo.title}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        link={book.volumeInfo.canonicalVolumeLink}
                        description={book.volumeInfo.description}
                        image={
                          book.volumeInfo.imageLinks === undefined
                            ? ""
                            : `${book.volumeInfo.imageLinks.thumbnail}`
                      }
                      />
                    );
                  })
                }
              </ul>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
