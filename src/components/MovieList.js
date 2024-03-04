import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  console.log('Movies in MovieList:', movies);  // Add this line for debugging

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
export default MovieList;
