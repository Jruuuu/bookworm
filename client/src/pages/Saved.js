import React, { useState, useEffect } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import API from "../utils/API.js";
import { BookListItem } from "../components/BookList";
import { Container, Row, Col } from "../components/Grid";
import axios from "axios";

function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);
  const [BookSearch, setBookSearch] = useState("");

  useEffect(()=>{
      axios.get("/api/books/save")
        .then(res =>{ setSavedBooks(res.data)
        console.log(res)
        })
        .catch(err => console.log(err))
  },[])

  const handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { value } = event.target;
    setBookSearch(value);
  };


  return (
    <div>
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
                    
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="xs-12">
            {!savedBooks.length ? (
              <h1 className="text-center">No Saved Books to Display</h1>
            ) : (
              <ul className="list-group">
                {
                  savedBooks.map(data => {
                    return (
                      <BookListItem
                        key={data.title}
                        title={data.title}
                        author={data.authors}
                        link={data.Link}
                        description={data.description}
                        image={
                          data.image === undefined
                            ? ""
                            : `${data.image}`
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

export default Saved;
