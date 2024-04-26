import { API_OPTIONs } from "../../utils/constants";
import { useEffect, useState } from "react";

const useGenreList = () => {

    const [ movieGenre, setMovieGenre ] = useState(null);
    const [ tvGenre, setTvGenre ] = useState(null);

    // Getting GenreList of Movies
    const MovieList = async () => {
        const movie = await fetch('https://api.themoviedb.org/3/genre/movie/list', API_OPTIONs);
        const genre = await movie.json();
        setMovieGenre(genre?.genres);
    };

    // Getting GenreList of Tv Shows
    const TvList = async () => {
        const tv = await fetch('https://api.themoviedb.org/3/genre/tv/list', API_OPTIONs);
        const genre = await tv.json();
        setTvGenre(genre?.genres);
    };

    useEffect(() => {
        MovieList();
        TvList();
    }, [])

    if (movieGenre !== null && tvGenre !== null) {
        return {
            movie : movieGenre,
            tv : tvGenre
        }
    }
};

export default useGenreList;
