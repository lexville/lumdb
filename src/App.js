import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    id: 1,
    title: "Star Wars"
  },
  {
    id: 2,
    title: "Charmed"
  },
  {
    id: 3,
    title: "Vice"
  }
];

class App extends Component {
  render() {
    const renderMovies = movies.map(movie => (
      <Movie key={movie.id} movie={movie} />
    ));
    return (
      <React.Fragment>
        <header className="App-header text-center">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <h1>Movies</h1>
          {renderMovies}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
