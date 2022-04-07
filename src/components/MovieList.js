import React from "react";

const MovieList = (props) => {
return (
  <>
    {props.movies.map((movie, index) => (
      <div className="image-container">
        <img src={movie.Poster} alt="movie" id="movie-poster"></img>
        <div
          onClick={() => props.handleFavouritesClick(movie)}
          className="overlay d-flex align-items-center justify-content-center"
        ></div>
      </div>
    ))}
  </>
);
};

export default MovieList;