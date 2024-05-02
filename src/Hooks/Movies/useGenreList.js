import { API_OPTIONs } from "../../utils/constants";
import { useEffect, useState } from "react";

const useGenreList = () => {

    const [ movieGenre, setMovieGenre ] = useState(null);

    // Getting GenreList of Movies
    const MovieList = async () => {
        const movie = await fetch('https://api.themoviedb.org/3/genre/movie/list', API_OPTIONs);
        const genre = await movie.json();
        setMovieGenre(genre?.genres);
    };

    useEffect(() => {
        MovieList();
    }, [])

    if (movieGenre !== null) {
        return {
            movie : movieGenre
        }
    }
};

export default useGenreList;
