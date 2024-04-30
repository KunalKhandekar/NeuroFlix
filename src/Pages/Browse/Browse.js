import React, { useEffect, useState } from 'react';
import { API_OPTIONs } from '../../utils/constants';
import { useActionData, useSearchParams } from 'react-router-dom';
import { MdOutlineViewCarousel } from 'react-icons/md';
import TopTrailerContainer from '../../Components/TopTrailerContainer';
import MovieList from '../../Components/MovieList';

const Browse = () => {
  const [browseData, setBrowseData] = useState([]);
  
  const fetchBrowse = async () => {
    const movie1 = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&primary_release_year=2024&sort_by=popularity.desc&with_origin_country=IN&with_original_language=hi&page=1', API_OPTIONs);
    const movie1JSON = await movie1.json();
    const movie1Data = movie1JSON?.results;

    const movie2 = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&primary_release_year=2024&sort_by=popularity.desc&with_origin_country=IN&with_original_language=hi&page=2', API_OPTIONs);
    const movie2JSON = await movie2.json();
    const movie2Data = movie2JSON?.results;

    // Combine the data from both requests
    setBrowseData([...movie1Data, ...movie2Data]);
  };

  useEffect(() => {
    fetchBrowse();
  }, []);

  if (browseData.length === 0) return <h1>Loading ......</h1>;

  const { original_title, overview, id } = browseData[0];

  return (
    <div>
      <TopTrailerContainer title={original_title} desc={overview} id={id} />
      <MovieList movies={browseData} />
    </div>
  );
};

export default Browse;
