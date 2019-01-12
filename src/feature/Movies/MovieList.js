import React from "react";
import styled from "styled-components";
import MovieListItem from "./MovieListItem";

const MovieList = ({ movies }) => {
  const renderMovies = movies.map(movie => (
    <MovieListItem key={movie.id} movie={movie} />
  ));
  return <MovieGrid>{renderMovies}</MovieGrid>;
};

export default MovieList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
`;
