import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SavedBooks from "./pages/SavedBooks";
import SearchBooks from "./pages/SearchBooks";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron>
          <h1>Google Books Search (React)</h1>
          <br />
          <h3>Search for and save Books that Interest YOU!</h3>
        </Jumbotron>
        <Switch>
          <Route exact path={["/", "/searchbooks"]}>
            <SearchBooks />
          </Route>
          <Route exact path={["/savedbooks", "/savedbooks/:id"]}>
            <SavedBooks />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
