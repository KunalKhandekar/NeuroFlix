import useNowPlayingMovies from '../../Hooks/Movies/useNowPlayingMovies';
import TopPosterContainer from '../../Components/TopPosterContainer';
import useTopRatedMovies from "../../Hooks/Movies/useTopRatedMovies";
import usePopularMovies from "../../Hooks/Movies/usePopularMovies";
import MovieList from '../../Components/MovieList';
import React, { useState, useEffect } from 'react';
import { GrLinkPrevious } from "react-icons/gr";
import { useParams } from 'react-router-dom';
import { GrLinkNext } from "react-icons/gr";
import { useSelector } from 'react-redux';

const CategoriesPage = () => {
  const { categoryNo } = useParams(); // Get the category number from the URL params
  const movieSlice = useSelector((store) => store.movie); // Get movie data from the Redux store

  // Define separate state variables for each category's page
  const [nowPlayingPage, setNowPlayingPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);

  // Fetch movies for each category based on its respective page using custom hooks
  useNowPlayingMovies(nowPlayingPage);
  usePopularMovies(popularPage);
  useTopRatedMovies(topRatedPage);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scrolling animation
    });
  };

  // Variables to store category data, current page, set page function, and total pages based on category number
  let category, currentPage, setPage, totalPages;
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

  // Effect to scroll to top whenever the current page changes
  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  // Render loading screen if category data is not available
  if (!category) return <div className='w-screen h-screen bg-black'></div>;

  // Generate random category index
  const randomCategoryIndex = Math.floor(Math.random() * 10);

  // Extract data for the first movie in the category or use random if not available
  const { original_title, overview, id, backdrop_path } = category[randomCategoryIndex] || category[0];

  // Function to navigate to the previous page of the category
  const goToPreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure page does not go below 1
    scrollToTop();
  };

  // Function to navigate to the next page of the category
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setPage((prevPage) => prevPage + 1); // Increment page if not at the last page
      scrollToTop();
    }
  };

  // Render the CategoriesPage component
  return (
    <div>
      <TopPosterContainer // Render TopPosterContainer with data for the first movie in the category
        poster={backdrop_path}
        title={original_title}
        desc={overview}
        id={id}
      />
      <MovieList movies={category} /> {/* Render MovieList with all movies in the category */}
      {/* Pagination controls */}
      <div className='max-w-[1600px] m-auto flex justify-center items-center gap-3 bg-black text-white pb-16 font-medium text-xl ssm:text-sm' >
        <button onClick={goToPreviousPage} disabled={currentPage === 1} className='px-5 py-1.5 rounded-lg bg-red-700'><GrLinkPrevious /></button>
        <h1>Page {currentPage} of {totalPages}</h1>
        <button onClick={goToNextPage} disabled={currentPage === totalPages} className='px-5 py-1.5 rounded-lg bg-red-700'><GrLinkNext className='font-semibold' /></button>
      </div>
    </div>
  );
};

export default CategoriesPage;