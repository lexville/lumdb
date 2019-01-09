import React from "react";
import PropTypes from "prop-types";

const POSTER_PATH = "//image.tmdb.org/t/p/w154";

const MovieListItem = ({ movie }) => {
  return (
    <div>
      <p>{movie.title}</p>
      <img
        src={`${POSTER_PATH}${movie.poster_path}`}
        alt={`${movie.title} poster`}
      />
    </div>
  );
};

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default MovieListItem;
