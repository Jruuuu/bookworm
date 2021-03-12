import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  image,
  title,
  author,
  description,
  link
}) {
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
          </Col>
        </Row>
      </Container>
    </li>
  );
}
