import { addNowPlayingMovies } from '../../utils/Store/movieSlice';
import { API_OPTIONs } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useNowPlayingMovies = (page) => {
    const dispatch = useDispatch(); // Get the dispatch function from React Redux

    // Function to fetch now playing movies
    const fetchNowPlayingMovies = async () => {
        try {
            const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}&region=IN`, API_OPTIONs); // Fetch now playing movies
            const movieJSON = await movieResponse.json(); // Convert response to JSON
            const movieData = movieJSON?.results; // Extract movie data
            const totalPg = movieJSON?.total_pages; // Extract total number of pages
            dispatch(addNowPlayingMovies({ movieData, totalPg })); // Dispatch action to add now playing movies to Redux store
        } catch (error) {
            console.error('Error fetching now playing movies:', error); // Log any errors
        }
    };

    // Call the function to fetch now playing movies when the page changes
    useEffect(() => {
        fetchNowPlayingMovies();
    }, [page]);

};

export default useNowPlayingMovies;
