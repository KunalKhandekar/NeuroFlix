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
import TopPosterContainer from '../../Components/TopPosterContainer';


const CategoriesPage = () => {
  const { categoryNo } = useParams();
  const movieSlice = useSelector((store) => store.movie);

  // Define separate state variables for each category's page
  const [nowPlayingPage, setNowPlayingPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);

  // Fetch movies for each category based on its respective page
  useNowPlayingMovies(nowPlayingPage);
  usePopularMovies(popularPage);
  useTopRatedMovies(topRatedPage);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  };

  let category;
  let currentPage;
  let setPage;
  let totalPages;
  switch (categoryNo) {
    case '1':
      category = movieSlice?.nowPlayingMovies;
      currentPage = nowPlayingPage;
      setPage = setNowPlayingPage;
      totalPages = movieSlice?.nowPlayingTotalPages;
      break;
    case '2':
      category = movieSlice?.popularMovies;
      currentPage = popularPage;
      setPage = setPopularPage;
      totalPages = movieSlice?.popularTotalPages;
      break;
    case '3':
      category = movieSlice?.topRatedMovies;
      currentPage = topRatedPage;
      setPage = setTopRatedPage;
      totalPages = movieSlice?.topRatedTotalPages;
      break;
    default:
      // Handle default case
      break;
  }

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  if (!category) return <div className='w-screen h-screen bg-black'></div>;

  const randomCategoryIndex = Math.floor(Math.random() * 10);

  const { original_title, overview, id, backdrop_path } = category[randomCategoryIndex] || category[0];

  const goToPreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
    scrollToTop();
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setPage((prevPage) => prevPage + 1);
      scrollToTop();
    }
  };

  return (
    <div>
      <TopPosterContainer
        poster={backdrop_path}
        title={original_title}
        desc={overview}
        id={id}
      />
      <MovieList movies={category} />
      <div className='max-w-[1600px] m-auto flex justify-center items-center gap-3 bg-black text-white pb-16 font-medium text-xl ssm:text-sm' >
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className='px-5 py-1.5 rounded-lg bg-red-700'><GrLinkPrevious /></button>
        <h1>Page {currentPage} of {totalPages}</h1>
        <button onClick={goToNextPage} disabled={currentPage === totalPages} className='px-5 py-1.5 rounded-lg bg-red-700'><GrLinkNext className='font-semibold' /></button>
      </div>
    </div>
  );
};

export default CategoriesPage;
