import React from 'react';
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SuggestionContainer = () => {
    const { MovieName, MovieData } = useSelector(store => store.suggestion);

    if (!MovieName) return null;

    console.log(MovieName);
    console.log(MovieData);

    let ListOfFirstMovies = [];

    MovieData.map((movies) => {
        if (movies[0] !== undefined) {
            ListOfFirstMovies = ListOfFirstMovies.concat(movies[0]);
        }
    });
    

console.log(ListOfFirstMovies)

return (
    <div className="mx-5 my-4 bg-[#0000007c] text-center py-5 rounded-lg xsm:mx-2">
        <h1 className='text-4xl font-medium text-white sm:text-3xl xsm:text-2xl'>Suggestions</h1>
        <MovieList movies={ListOfFirstMovies} position={false} />
    </div>
)
}

export default SuggestionContainer

