import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoTopContainer from './InfoTopContainer';
import { API_OPTIONs } from '../utils/constants';
import CastList from './CastList';
import useMovieVideos from '../Hooks/Movies/useMovieVideos';
import VideoGrid from './videoGrid';

const Info = () => {
  const { movieID } = useParams();
  const [movieData, setMovieData] = useState(null);

  const fetchMovieData = async (movieID) => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?append_to_response=credits&language=en-US`, API_OPTIONs);
    const json = await data.json();
    setMovieData(json);
  };

  useEffect(() => {
    fetchMovieData(movieID);
  }, []);

  const videos = useMovieVideos(movieID);
  if (videos) {
    console.log(videos);
  };

  if (!movieData) return <h1 className='w-screen h-screen flex justify-center items-center text-2xl bg-black text-white'>Loading....</h1>;

  const first10Cast = Object.values(movieData.credits.cast).slice(0, 14);

  return (
    <div className='max-w-[1600px] w-screen m-auto bg-black pb-20'>

      <div className='mx-20 slg:mx-10 xsm:mx-4'>
        <InfoTopContainer movieData={movieData} />
        <CastList first10Cast={first10Cast} />
        <VideoGrid videos={videos} />



        

      </div>

    </div>
  )
}

export default Info;