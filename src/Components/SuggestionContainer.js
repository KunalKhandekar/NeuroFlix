import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import React from 'react';


const SuggestionContainer = () => {
    const { MovieName, MovieData } = useSelector(store => store.suggestion); // Accessing movie data from Redux store

    // Return null if no movie name is available
    if (!MovieName) return null;

    let ListOfFirstMovies = [];

    // Concatenate the first movies from each category
    MovieData.map((movies) => {
        if (movies[0] !== undefined) {
            ListOfFirstMovies = ListOfFirstMovies.concat(movies[0]);
        };
    });
    
    // Render the SuggestionContainer component
    return (
        <div className="mx-5 my-4 bg-[#0000007c] text-center py-5 rounded-lg xsm:mx-2">
            <h1 className='text-4xl font-medium text-white sm:text-3xl xsm:text-2xl'>Suggestions</h1>
            <MovieList movies={ListOfFirstMovies} position={false} />
        </div>
    )
}

export default SuggestionContainer;
