import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Books from "./pages/Books"
import Saved from "./pages/Saved"

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Jumbotron />
      <Switch>
        <Route exact path={"/"}>
        <Books/>
        </Route>
        <Route exact path={"/saved"}>
        <Saved/>
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
