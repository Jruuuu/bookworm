import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-light">
      <a className="navbar-brand" href="/">
       Book Search
      </a>
      <a className="navbar-brand " href="/saved">
       Saved Books
      </a>
    </nav>
  );
}

export default Nav;
