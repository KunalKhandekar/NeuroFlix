import { useEffect } from 'react';
import { API_OPTIONs } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../../utils/Store/movieSlice';

const useTopRatedMovies = (page) => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}&region=IN`, API_OPTIONs);
        const movieJSON = await movie.json();
        const movieData = movieJSON?.results;
        const totalPg = movieJSON?.total_pages
        dispatch(addTopRatedMovies({ movieData, totalPg }));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, [page])

}

export default useTopRatedMovies;