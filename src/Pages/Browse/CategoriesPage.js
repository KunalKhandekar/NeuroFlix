import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import MovieList from '../../Components/MovieList';
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import TopTrailerContainer from '../../Components/TopTrailerContainer';
import useNowPlayingMovies from '../../Hooks/Movies/useNowPlayingMovies';
import usePopularMovies from "../../Hooks/Movies/usePopularMovies";
import useTopRatedMovies from "../../Hooks/Movies/useTopRatedMovies";
import useUpcomingMovies from "../../Hooks/Movies/useUpcomingMovies";


const CategoriesPage = () => {
  const { categoryNo } = useParams();
  const movieSlice = useSelector((store) => store.movie);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch now playing movies for the current page
  useNowPlayingMovies(currentPage);
  usePopularMovies(currentPage);
  useTopRatedMovies(currentPage);
  useUpcomingMovies(currentPage);

  let category;
  switch (categoryNo) {
    case '1':
      category = movieSlice?.nowPlayingMovies;
      break;
    case '2':
      category = movieSlice?.popularMovies;
      break;
    case '3':
      category = movieSlice?.topRatedMovies;
      break;
    case '4':
      category = movieSlice?.upcomingMovies;
      break;
  }

  if (!category) return null;

  const { original_title, overview, id } = category[0];

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    scrollToTop();
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  };

  return (
    <div>
      <TopTrailerContainer title={original_title} desc={overview} id={id} />
      <MovieList movies={category} />
      <div className='max-w-[1600px] m-auto flex justify-center items-center gap-3 bg-black text-white pb-16 font-medium text-xl ssm:text-sm' >
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className='px-5 py-1.5 rounded-lg bg-red-700'><GrLinkPrevious /></button>
        <h1>Page {currentPage}</h1>
        <button onClick={goToNextPage} className='px-5 py-1.5 rounded-lg bg-red-700'><GrLinkNext className='font-semibold' /></button>
      </div>
    </div>
  );
};

export default CategoriesPage;
