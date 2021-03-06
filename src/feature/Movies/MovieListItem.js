import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const POSTER_PATH = "//image.tmdb.org/t/p/w154";

const MovieListItem = ({ movie }) => {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <Poster
          src={`${POSTER_PATH}${movie.poster_path}`}
          alt={`${movie.title} poster`}
        />
      </Link>
    </div>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;

export default MovieListItem;
