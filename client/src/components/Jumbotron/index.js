import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1>Book Worm Search</h1>
      <a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/books/docs/overview">
        Powered by Google api
      </a>
    </div>
  );
}

export default Jumbotron;
