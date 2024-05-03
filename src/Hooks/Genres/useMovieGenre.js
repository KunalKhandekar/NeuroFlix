import { addMoviesWithGenre } from '../../utils/Store/GenreSlice';
import { API_OPTIONs } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

const useMovieGenre = (genreID, page) => {
    const dispatch = useDispatch(); // Initialize useDispatch hook
    const formattedDate = new Date().toISOString().slice(0, 10); // Get the current date in ISO format

    // Define a function to fetch movies with the specified genre
    const getMoviesWithGenre = async () => {
        try {
            // Fetch movies based on genre and page number
            const movie = await fetch (`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&release_date.lte=${formattedDate}&with_origin_country=IN&with_original_language=hi&with_genres=${genreID}&page=${page}`, API_OPTIONs);
            const movieJSON = await movie.json(); // Convert response to JSON
            const GenreData = movieJSON?.results; // Extract movie data
            const totalPg = movieJSON?.total_pages; // Extract total pages
            // Dispatch action to add movies with genre to Redux store
            dispatch(addMoviesWithGenre({ GenreData, totalPg }));
        } catch (error) {
            console.error('Error fetching movies by genre:', error);
        }
    };

    // Call the function to fetch movies when genreID or page changes
    useEffect(() => {
        getMoviesWithGenre();
    }, [genreID, page]); // Re-fetch when genreID or page changes
}

export default useMovieGenre; // Export the custom hook
