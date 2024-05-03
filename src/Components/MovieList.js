import ShowCard from './ShowCard';
import React from 'react';

const MovieList = ({ movies, position=true }) => {
  if (!movies) return null;

  return (
    <div className={`${position ? 'bg-black' : ''} max-w-[1600px] m-auto p-8 text-white flex gap-3 flex-wrap justify-center pb-14`}>
      {movies.map((movie) => (
          <ShowCard poster={movie.poster_path} title={movie?.title} id={movie?.id} key={movie?.id} />
      ))}

    </div>
  )
};

export default MovieList;
