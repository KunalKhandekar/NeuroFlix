import { useEffect, useState } from 'react';
import { API_OPTIONs } from '../../utils/constants';

const useTrailer = (id) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    getTrailer();
  }, [id]);

  const getTrailer = async () => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONs);
      const json = await data.json();
      const allTrailers = json.results;
      const trailer = allTrailers?.find((video) => video.name === 'Official Trailer');

      if (trailer) {
        setTrailerKey(trailer.key);
      } else {
        setTrailerKey(allTrailers[0].key);
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  return trailerKey;
};

export default useTrailer;

