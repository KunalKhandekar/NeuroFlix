import { useEffect } from 'react';
import { API_OPTIONs } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../../utils/Store/movieSlice';

const useNowPlayingMovies = (page) => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=${page}`, API_OPTIONs);
        const movieJSON = await movie.json();
        dispatch(addNowPlayingMovies(movieJSON?.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, [page]); // Re-fetch when page changes
}

export default useNowPlayingMovies;
