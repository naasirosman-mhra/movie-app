import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.genre}</p>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  );
};

export default MovieCard;
