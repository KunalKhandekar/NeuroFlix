import { useEffect } from 'react';
import { API_OPTIONs } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../../utils/Store/movieSlice';

const usePopularMovies = (page) => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, API_OPTIONs);
        const movieJSON = await movie.json();
        dispatch(addPopularMovies((movieJSON?.results)));
    };

    useEffect(() => {
        getPopularMovies();
    }, [page])

}

export default usePopularMovies;