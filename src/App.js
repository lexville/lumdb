import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Movies from "./feature/Movies/Movies";
import MovieDetailed from "./feature/Movies/MovieDetailed";
import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <header className="App-header text-center">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </header>
          <Switch>
            <Route exact path="/" component={Movies} />
            <Route path="/movie/:id" component={MovieDetailed} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
