import React from "react";
import PropTypes from "prop-types";

const Movie = ({ movie }) => {
  return (
    <div>
      <p>
        {movie.id}. {movie.title}
      </p>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default Movie;
