import { API_OPTIONs } from '../../utils/constants';
import { useEffect, useState } from 'react';

const useTrailer = (id) => {
  const [trailerKey, setTrailerKey] = useState(null); // State to store trailer key

  // Effect to fetch trailer when id changes
  useEffect(() => {
    getTrailer();
  }, [id]);

  // Function to fetch trailer
  const getTrailer = async () => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONs); // Fetch trailer data
      const json = await data.json(); // Convert response to JSON
      const allTrailers = json.results; // Extract all trailers
      const trailer = allTrailers?.find((video) => video.name === 'Official Trailer'); // Find the official trailer

      if (trailer) {
        setTrailerKey(trailer.key); // Set trailer key if found
      } else {
        setTrailerKey(allTrailers[0].key); // Set the key of the first trailer if no official trailer is found
      }
    } catch (error) {
      console.error('Error fetching trailer:', error); // Log any errors
    }
  };

  return trailerKey; // Return trailer key
};

export default useTrailer;