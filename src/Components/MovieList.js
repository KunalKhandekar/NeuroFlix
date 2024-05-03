import ShowCard from './ShowCard';
import React from 'react';

const MovieList = ({ movies, position = true }) => {
  // If movies are not available, return null to prevent rendering
  if (!movies) return null;

  return (
    <div className={`${position ? 'bg-black' : ''} max-w-[1600px] m-auto p-8 text-white flex gap-3 flex-wrap justify-center pb-14`}>
      {/* Mapping over movies array to render ShowCard component for each movie */}
      {movies.map((movie) => (
        <ShowCard poster={movie.poster_path} title={movie?.title} id={movie?.id} key={movie?.id} />
      ))}
    </div>
  );
};

export default MovieList;
