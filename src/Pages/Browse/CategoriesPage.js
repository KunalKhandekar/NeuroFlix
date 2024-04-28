import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TopTrailerContainer from '../../Components/TopTrailerContainer';

const CategoriesPage = () => {
  const { categoryNo } = useParams();
  const category = useSelector((store)=> store.movie.nowPlayingMovies);
  if (!category) return;

  const { original_title, overview, id } = category[0];

  return (
    <div>
      <TopTrailerContainer title={original_title} desc={overview} id={id}/>
    </div>
  )
}

export default CategoriesPage
