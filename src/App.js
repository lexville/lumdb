import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Movies from "./feature/Movies/Movies";
import "./App.css";
import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <Switch>
            <Route exact path="/" component={Movies} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
