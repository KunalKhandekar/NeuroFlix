import { addPopularMovies } from '../../utils/Store/movieSlice';
import { API_OPTIONs } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const usePopularMovies = (page) => {
    const dispatch = useDispatch(); // Get the dispatch function from React Redux

    // Function to fetch popular movies
    const fetchPopularMovies = async () => {
        try {
            const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}&region=IN`, API_OPTIONs); // Fetch popular movies
            const movieJSON = await movieResponse.json(); // Convert response to JSON
            const movieData = movieJSON?.results; // Extract movie data
            const totalPg = movieJSON?.total_pages; // Extract total number of pages
            dispatch(addPopularMovies({ movieData, totalPg })); // Dispatch action to add popular movies to Redux store
        } catch (error) {
            console.error('Error fetching popular movies:', error); // Log any errors
        }
    };

    // Call the function to fetch popular movies when the page changes
    useEffect(() => {
        fetchPopularMovies();
    }, [page]);

};

export default usePopularMovies;
