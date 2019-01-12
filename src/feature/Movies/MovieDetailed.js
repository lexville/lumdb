import React, { Component } from "react";
import { Poster } from "./MovieListItem";
import styled from "styled-components";
const POSTER_PATH = "//image.tmdb.org/t/p/w154";
const BACKDROP_PATH = "//image.tmdb.org/t/p/w1280";

class MovieDetailed extends Component {
  state = {
    movie: {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    this.setState(() => {
      return {
        movie: {}
      };
    });

    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8db53c267e86f9777540d3025e5266c6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      const movie = await res.json();

      this.setState(() => {
        return {
          movie
        };
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Poster
            src={`${POSTER_PATH}${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetailed;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
