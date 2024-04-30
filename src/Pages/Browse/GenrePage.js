import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useMovieGenre from '../../Hooks/Genres/useMovieGenre';
import { useSelector } from 'react-redux';
import MovieList from '../../Components/MovieList';
import TopPosterContainer from '../../Components/TopPosterContainer';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

const GenrePage = () => {
    const { genre } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    useMovieGenre(genre, currentPage);
    const genreSlice = useSelector((store) => store.genre);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        scrollToTop();
        setCurrentPage(1); // Reset currentPage to 1 whenever genre changes
    }, [genre]);

    useEffect(() => {
        scrollToTop();
    }, [currentPage]);

    if (!genreSlice || !genreSlice.moviesWithGenre) return null;

    const { moviesWithGenre, moviesWithGenreTotalPages } = genreSlice;
    const firstItem = moviesWithGenre[0];

    const goToPreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const goToNextPage = () => {
        if (currentPage < moviesWithGenreTotalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    return (
        <div className='w-screen h-screen bg-black'>
            <TopPosterContainer
                poster={firstItem?.backdrop_path}
                title={firstItem?.title}
                desc={firstItem?.overview}
                id={firstItem?.id}
            />
            <MovieList key={moviesWithGenre.map(movie => movie.id).join('_')} movies={moviesWithGenre} /> {/* Ensure rerender on change */}
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
