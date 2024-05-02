import React, { useEffect, useState } from 'react';
import { API_OPTIONs } from '../../utils/constants';

const useMovieVideos = (id) => {
    const [Videos, setVideos] = useState(null);

    useEffect(() => {
        getTrailer();
    }, [id]);

    const getTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONs);
        const json = await data.json();
        const allTrailers = json.results;
        setVideos(allTrailers);
    };

    return Videos;
}

export default useMovieVideos
