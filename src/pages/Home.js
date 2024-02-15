import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [startYear, setStartYear] = useState(1990);
  const [endYear, setEndYear] = useState(2024);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(process.env.PUBLIC_URL + '/movies.json');
        console.log('Response status:', response.status);

        if (!response.ok) {
          console.error('Error response:', await response.text());
          throw new Error('Failed to fetch movies');
        }

        const data = await response.json();
        console.log('Fetched movies:', data);
        setMovies(data);
        setFilteredMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    filterMovies(genre, startYear, endYear);
  };

  const handleStartYearChange = (event) => {
    const year = parseInt(event.target.value);
    setStartYear(year);
    filterMovies(selectedGenre, year, endYear);
  };

  const handleEndYearChange = (event) => {
    const year = parseInt(event.target.value);
    setEndYear(year);
    filterMovies(selectedGenre, startYear, year);
  };

  const filterMovies = (genre, startYear, endYear) => {
    let filtered = movies;

    if (genre !== 'All') {
      filtered = filtered.filter(movie => movie.genre === genre);
    }

    filtered = filtered.filter(movie => movie.releaseYear >= startYear && movie.releaseYear <= endYear);

    setFilteredMovies(filtered);
  };

  return (
    <div>
      <h1>Award-Winning Movies</h1>
      <div>
        <label htmlFor="genre">Filter by Genre:</label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          <option value="All">All Genres</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="War">War</option>
          <option value="Thriller">Thriller</option>
          <option value="Animation">Animation</option>
        </select>
      </div>
      <div>
        <label htmlFor="startYear">Start Year:</label>
        <input
          type="range"
          id="startYear"
          min="1990"
          max="2024"
          step="1"
          value={startYear}
          onChange={handleStartYearChange}
        />
        <output>{startYear}</output>
      </div>
      <div>
        <label htmlFor="endYear">End Year:</label>
        <input
          type="range"
          id="endYear"
          min="1990"
          max="2024"
          step="1"
          value={endYear}
          onChange={handleEndYearChange}
        />
        <output>{endYear}</output>
      </div>
      {filteredMovies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <MovieList movies={filteredMovies} />
      )}
    </div>
  );
};

export default Home;
