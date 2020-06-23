import React from 'react';
import MoviePreview from './MoviePreview';

const MovieList = ({ movies }) => {
  return (
    <div className='card-container'>
      {movies.map((movie, index) => (
        <MoviePreview movie={movie} key={index} />
      ))}
    </div>
  );
};

export default MovieList;
