import { useEffect } from 'react';
import { API_OPTIONs } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../../utils/Store/movieSlice';

const useUpcomingMovies = (page) => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${page}`, API_OPTIONs);
        const movieJSON = await movie.json();
        dispatch(addUpcomingMovies((movieJSON?.results)));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, [page])

}

export default useUpcomingMovies;