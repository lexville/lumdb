import React from "react";
import MovieListItem from "./MovieListItem";

const MovieList = ({ movies }) => {
  const renderMovies = movies.map(movie => (
    <MovieListItem key={movie.id} movie={movie} />
  ));
  return <React.Fragment>{renderMovies}</React.Fragment>;
};

export default MovieList;
