import { addTopRatedMovies } from '../../utils/Store/movieSlice';
import { API_OPTIONs } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useTopRatedMovies = (page) => {
    const dispatch = useDispatch(); // Get the dispatch function from React Redux

    // Function to fetch top rated movies
    const fetchTopRatedMovies = async () => {
        try {
            const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}&region=IN`, API_OPTIONs); // Fetch top rated movies
            const movieJSON = await movieResponse.json(); // Convert response to JSON
            const movieData = movieJSON?.results; // Extract movie data
            const totalPg = movieJSON?.total_pages; // Extract total number of pages
            dispatch(addTopRatedMovies({ movieData, totalPg })); // Dispatch action to add top rated movies to Redux store
        } catch (error) {
            console.error('Error fetching top rated movies:', error); // Log any errors
        }
    };

    // Call the function to fetch top rated movies when the page changes
    useEffect(() => {
        fetchTopRatedMovies();
    }, [page]);

};

export default useTopRatedMovies;
