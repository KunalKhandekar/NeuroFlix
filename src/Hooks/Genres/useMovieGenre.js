import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONs } from '../../utils/constants';
import { addMoviesWithGenre } from '../../utils/Store/GenreSlice';

const useMovieGenre = (genreID, page) => {

    const dispatch = useDispatch();

    const getMoviesWithGenre = async () => {
        const movie = await fetch (`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&release_date.lte=2024-04-29&sort_by=popularity.desc&with_origin_country=IN&with_original_language=hi&with_genres=${genreID}&page=${page}`, API_OPTIONs);
        const movieJSON = await movie.json();
        console.log(movieJSON);
        const GenreData = movieJSON?.results;
        const totalPg = movieJSON?.total_pages
        dispatch(addMoviesWithGenre({ GenreData, totalPg }));
    };

    useEffect(() => {
        getMoviesWithGenre();
    }, [genreID, page]); // Re-fetch when page changes
  
}

export default useMovieGenre;
