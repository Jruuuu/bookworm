import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import axios from "axios";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  image,
  title,
  author,
  description,
  link
}) {

  function handSavedBooks() {
    //prepare data for save book route
    const data = {
      title:title,
      author: author,
      description:description,
      image:image,
      link:link
    }
    //post data
    axios.post("/api/books/save",data);
  };

  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image|| "https://placehold.it/300x300"} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h3>Author: {author}</h3>
            <p>Description: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Go to Book!
            </a>
            <button type="success" onClick={handSavedBooks}>SAVE</button>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
