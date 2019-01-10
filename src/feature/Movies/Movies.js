import React, { Component } from "react";
import MovieList from "./MovieList";

class Movies extends Component {
  state = {
    movies: [],
    isLoading: false
  };
  async componentDidMount() {
    this.setState(() => {
      return {
        movies: [],
        isLoading: true
      };
    });
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=8db53c267e86f9777540d3025e5266c6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      const jsonMovies = await res.json();

      const movies = jsonMovies.results;

      this.setState(() => {
        return {
          movies,
          isLoading: false
        };
      });
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const { movies, isLoading } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <h1>Movies</h1>
          {isLoading ? <p>Loading ....</p> : <MovieList movies={movies} />}
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
