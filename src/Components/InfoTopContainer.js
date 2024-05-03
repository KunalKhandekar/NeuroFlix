import { POSTER_URL } from '../utils/constants';
import IconRenderer from '../utils/IconRender';
import { LuClock8 } from "react-icons/lu";
import { Link } from 'react-router-dom';
import React from 'react';

const InfoTopContainer = ({ movieData }) => {

  // Function to format date
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div className='pt-28 pb-12'>
      <div className='h-80 border-2 border-[#3d3d3ddc] rounded-3xl shadow-lg shadow-[#6464648c] relative md:h-[35rem]'>

        {/* Background (Image/Banner) */}
        <img src={POSTER_URL + movieData?.backdrop_path} alt="BG_BANNER" className='absolute top-0 left-0 w-full h-full object-cover rounded-3xl -z-0' />

        {/* Gradient */}
        <div className='-z-0 absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-r from-[#0000008c] to-[#0000008c]'></div>

        {/* Movie Details */}
        <div className='absolute top-0 left-0 z-10 flex w-full h-full md:flex-col'>

          {/* Poster Container */}
          <div className='left_side relative -top-8 pl-7 md:w-full md:flex md:justify-center md:pl-0'>
            <div className='w-56 border-[#fff] border-2 shadow-lg rounded-2xl overflow-hidden ssm:w-48 xsm:w-40'>
              <img src={POSTER_URL + movieData?.poster_path} alt="POSTER" className='w-full h-full object-cover' />
            </div>
          </div>

          {/* Movie Info */}
          <div className='right_side w-full text-white'>
            {/* Movie title and duration */}
            <div className='flex justify-between px-7 py-3.5'>
              <h1 className='font-bold uppercase text-3xl slg:text-2xl overflow-hidden line-clamp-1 h-7'>{movieData?.title}</h1>
              <h1 className='font-semibold text-sm flex gap-1 items-center'><LuClock8 /> <span>{movieData?.runtime} Mins</span> </h1>
            </div>

            {/* Genre Container */}
            <div className='w-full px-7 flex gap-2 text-base flex-wrap'>
              {movieData?.genres.map((genre) => (
                <Link to={`/browse/${genre.id}`} key={genre.id}>
                  <div className='flex items-center gap-2 px-3 py-0.5 border bg-transparent border-[#ebebeb] rounded-xl text-[#ebebeb]'>
                    <IconRenderer icon={genre.id} />
                    <span>{genre.name}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Overview */}
            <div className='px-7 py-3 text-lg sm:text-sm'>
              <p className='overflow-hidden line-clamp-4'>{movieData?.overview}</p>
              <p className='mt-3'><span className='px-3 py-0.5 bg-green-600 rounded-l-lg'>Release Date</span><span className='px-3 py-0.5 bg-[#00000077] rounded-r-lg'>{formatDate(movieData?.release_date)}</span></p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default InfoTopContainer;