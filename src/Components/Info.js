import React, { useEffect, useState } from 'react';
import InfoTopContainer from './InfoTopContainer';
import { API_OPTIONs } from '../utils/constants';
import { API_KEY } from '../utils/constants';
import { useParams } from 'react-router-dom';
import VideoGrid from './videoGrid';
import CastList from './CastList';

const Info = () => {
  const { movieID } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [videos, setVideos] = useState([]);

  // Fetch movie data based on movieID
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?append_to_response=credits&language=en-US`, API_OPTIONs);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    };

    fetchMovieData();
  }, [movieID]);

  // Fetch videos related to the movie
  useEffect(() => {
    if (movieData) {
      const fetchVideos = async () => {
        try {
          const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${encodeURIComponent(movieData.credits.cast[0].name + ' Movie ' + movieData.title + ' Trailer and Songs')}&type=video&maxResults=5`);
          const data = await response.json();
          setVideos(data.items);
        } catch (error) {
          console.error('Error fetching videos:', error);
        }
      };

      fetchVideos();
    }
  }, [movieData]);

  // Render loading message if movie data is not yet loaded
  if (!movieData) return <h1 className='w-screen h-screen flex justify-center items-center text-2xl bg-black text-white'>Loading....</h1>;

  // Slice first 10 cast members from the cast list
  const first10Cast = Object.values(movieData.credits.cast).slice(0, 14);

  return (
    <div className='max-w-[1600px] min-h-screen w-screen m-auto bg-black pb-20'>
      <div className='mx-20 slg:mx-10 xsm:mx-4'>
        {/* Render InfoTopContainer with movieData */}
        <InfoTopContainer movieData={movieData} />
        {/* Render CastList with first 10 cast members */}
        <CastList first10Cast={first10Cast} />
        {/* Render VideoGrid with videos related to the movie */}
        <VideoGrid videos={videos} />
      </div>
    </div>
  );
};

export default Info;
