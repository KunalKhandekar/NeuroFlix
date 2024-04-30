import React from 'react';
import ShowCard from './ShowCard';

const MovieList = ({movies}) => {
  if (!movies) return;

  return (
    <div className='max-w-[1600px] m-auto p-8 bg-black text-white flex gap-3 flex-wrap justify-center pb-14'>
      {movies.map((movie)=>(
        <ShowCard poster={movie.poster_path} title={movie?.title} id={movie?.id} key={movie?.id}/>
    ))}
    </div>
  )
};

export default MovieList;
