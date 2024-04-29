import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieList from '../../Components/MovieList';
import TopTrailerContainer from '../../Components/TopTrailerContainer';

const CategoriesPage = () => {
  const { categoryNo } = useParams();
  const category = useSelector((store)=> store.movie.nowPlayingMovies);
  if (!category) return;

  const { original_title, overview, id } = category[0];

  return (
    <div>
      <TopTrailerContainer title={original_title} desc={overview} id={id}/>
      <MovieList movies={category} />
    </div>
  )
}

export default CategoriesPage
