import { API_OPTIONs } from "../../utils/constants";
import { useEffect, useState } from "react";

const useGenreList = () => {
    const [movieGenre, setMovieGenre] = useState(null); // Initialize state to hold the movie genre list

    // Function to fetch the genre list of movies
    const fetchMovieGenreList = async () => {
        try {
            const movieResponse = await fetch('https://api.themoviedb.org/3/genre/movie/list', API_OPTIONs); // Fetch genre list
            const genreData = await movieResponse.json(); // Convert response to JSON
            setMovieGenre(genreData?.genres); // Set the movie genre list in state
        } catch (error) {
            console.error('Error fetching movie genre list:', error); // Log any errors
        }
    };

    // Call the function to fetch the genre list when the component mounts
    useEffect(() => {
        fetchMovieGenreList();
    }, []);

    // Return the movie genre list once it's fetched
    if (movieGenre !== null) {
        return {
            movie: movieGenre
        };
    }
};

export default useGenreList;
