import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useMovieGenre from '../../Hooks/Genres/useMovieGenre';
import { useSelector } from 'react-redux';
import MovieList from '../../Components/MovieList'; 
import TopPosterContainer from '../../Components/TopPosterContainer';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';


const GenrePage = () => {
    const { genre } = useParams(); // Get the genre from the URL params
    const [currentPage, setCurrentPage] = useState(1); // Define state for current page
    useMovieGenre(genre, currentPage); // Fetch movies with the specified genre using custom hook
    const genreSlice = useSelector((store) => store.genre); // Get genre data from the Redux store

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
    };

    // Effect to scroll to top and reset currentPage whenever genre changes
    useEffect(() => {
        scrollToTop();
        setCurrentPage(1);
    }, [genre]);

    // Effect to scroll to top whenever currentPage changes
    useEffect(() => {
        scrollToTop();
    }, [currentPage]);

    // Render loading screen if genre data is not available
    if (!genreSlice || !genreSlice.moviesWithGenre) return <div className='w-screen h-screen bg-black'></div>;

    const { moviesWithGenre, moviesWithGenreTotalPages } = genreSlice; // Destructure moviesWithGenre and moviesWithGenreTotalPages from genreSlice
    const firstItem = moviesWithGenre[0]; // Get the first item from moviesWithGenre array

    // Function to navigate to the previous page
    const goToPreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1)); // Ensure currentPage does not go below 1
    };

    // Function to navigate to the next page
    const goToNextPage = () => {
        if (currentPage < moviesWithGenreTotalPages) {
            setCurrentPage(prevPage => prevPage + 1); // Increment currentPage if not at the last page
        }
    };

    // Render the GenrePage component
    return (
        <div className='w-screen h-screen bg-black'>
            {/* Render TopPosterContainer with data for the first movie in the genre */}
            <TopPosterContainer
                poster={firstItem?.backdrop_path}
                title={firstItem?.title}
                desc={firstItem?.overview}
                id={firstItem?.id}
            />
            {/* Render MovieList with all movies in the genre */}
            <MovieList key={moviesWithGenre.map(movie => movie.id).join('_')} movies={moviesWithGenre} />
            {/* Pagination controls */}
            <div className='max-w-[1600px] m-auto flex justify-center items-center gap-3 bg-black text-white pb-16 font-medium text-xl ssm:text-sm'>
                <button onClick={goToPreviousPage} disabled={currentPage === 1} className='px-5 py-1.5 rounded-lg bg-red-700'>
                    <GrLinkPrevious />
                </button>
                <span className='mx-4'>Page {currentPage} of {moviesWithGenreTotalPages}</span>
                <button onClick={goToNextPage} disabled={currentPage === moviesWithGenreTotalPages} className='px-5 py-1.5 rounded-lg bg-red-700'>
                    <GrLinkNext />
                </button>
            </div>
        </div>
    );
};

export default GenrePage;
