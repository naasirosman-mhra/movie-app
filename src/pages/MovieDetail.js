// MovieDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  // Access movie ID from the URL parameters
  const { id } = useParams();

  // Dummy data for demonstration
  const movie = { id, title: `Movie ${id}`, genre: 'Action', releaseYear: 2022 };

  return (
    <div>
      <h1>Movie Detail</h1>
      <h2>{movie.title}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  );
};

export default MovieDetail;
