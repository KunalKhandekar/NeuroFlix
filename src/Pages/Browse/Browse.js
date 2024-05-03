import TopTrailerContainer from '../../Components/TopTrailerContainer';
import { API_OPTIONs } from '../../utils/constants';
import MovieList from '../../Components/MovieList';
import React, { useEffect, useState } from 'react';


const Browse = () => {
  // State to store browse data
  const [browseData, setBrowseData] = useState([]);
  // Get the current date in ISO format
  const formattedDate = new Date().toISOString().slice(0, 10);

  // Function to fetch browse data
  const fetchBrowse = async () => {
    try {
      // Fetch data for page 1
      const movie1 = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&release_date.lte=${formattedDate}&with_origin_country=IN&with_original_language=hi&page=1`, API_OPTIONs);
      const movie1JSON = await movie1.json();
      const movie1Data = movie1JSON?.results;

      // Fetch data for page 2
      const movie2 = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&release_date.lte=${formattedDate}&with_origin_country=IN&with_original_language=hi&page=2`, API_OPTIONs);
      const movie2JSON = await movie2.json();
      const movie2Data = movie2JSON?.results;

      // Combine data from both pages
      setBrowseData([...movie1Data, ...movie2Data]);
    } catch (error) {
      console.error('Error fetching browse data:', error);
    }
  };

  // Effect to fetch browse data on component mount
  useEffect(() => {
    fetchBrowse();
  }, []);

  // Render loading screen if browse data is not available
  if (browseData.length === 0) return <h1 className='w-screen h-screen bg-black'></h1>;

  // Extract data for the first movie
  const { original_title, overview, id } = browseData[0];

  // Render the Browse component
  return (
    <div>
      <TopTrailerContainer title={original_title} desc={overview} id={id} /> {/* Render TopTrailerContainer with data for the first movie */}
      <MovieList movies={browseData} /> {/* Render MovieList with all browse data */}
    </div>
  );
};

export default Browse;
