import { useEffect } from 'react';
import { API_OPTIONs } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../../utils/Store/movieSlice';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const movie = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONs);
        const movieJSON = await movie.json();
        dispatch(addNowPlayingMovies((movieJSON?.results)));
        console.log(movieJSON?.results);
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, [])

}

export default useNowPlayingMovies
