import { addMovieData } from '../utils/Store/suggestionSlice';
import { API_Token, API_OPTIONs } from '../utils/constants';
import SuggestionContainer from "./SuggestionContainer";
import ClipLoader from "react-spinners/ClipLoader";
import { BG_POSTER_URL } from '../utils/constants';
import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";

const SuggestionPage = () => {
    const searchBox = useRef(null); // Reference for search input
    const dispatch = useDispatch(); // useDispatch hook to dispatch Redux actions
    const [isLoading, setIsLoading] = useState(false); // State for loading spinner

    // Function to search movies on TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1",
            API_OPTIONs
        );
        const json = await data.json();

        return json.results;
    };

    // Function to fetch movie data from EdenAI API
    const fetchData = async (text) => {
        setIsLoading(true); // Set loading state to true

        const url = "https://api.edenai.run/v2/text/chat";

        const query =
            "Act as a Movie Recommendation system and suggest some movies for the query : " +
            text +
            ". If any movie name given in query then extract it and include it in results. only give me names of 10 movies, comma separated array like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya, ....";

        const data = {
            providers: "openai",
            text: query,
            chatbot_global_action: "Act as a Movie Recommendation system",
            max_tokens: 150
        };

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${API_Token}`
                },
                body: JSON.stringify(data)
            });

            const responseData = await response.json();
            const arrayOfMovies = responseData.openai.generated_text.split(',');
            const allPromise = arrayOfMovies.map(movie => searchMovieTMDB(movie));
            const searchResults = await Promise.all(allPromise);
            dispatch(addMovieData({ movieNames: arrayOfMovies, movieData: searchResults }));
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('Error fetching data');
        } finally {
            setIsLoading(false); // Set loading state to false
        }
    };

    // Function to handle search
    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        if (!searchBox.current.value) {
            toast.error('Empty Input Box !!'); // Display toast message if search input is empty
        } else {
            fetchData(searchBox.current.value); // Fetch data based on search input
        };
    };

    // Render the SuggestionPage component
    return (
        <div className='max-w-[1600px] min-h-screen w-screen m-auto bg-[#00000065] pb-20 relative'>
            <img
                src={BG_POSTER_URL}
                alt="Backdrop_Img"
                className='w-full h-full object-cover rounded-2xl xsm:rounded-lg fixed top-0 left-0 -z-10'
            />

            {/* Search form */}
            <div className='pt-20 w-[80%] sm:w-[100%] sm:pt-[6.5rem] sm:text-sm'>
                <form action="" className='grid grid-cols-12 p-2 bg-[#171717d2] mx-10 xsm:mx-2' onSubmit={(e) => handleSearch(e)}>
                    <input type="text" placeholder='What do you want to watch today ?' className='px-2 py-2 col-span-9 focus:outline-none text-black' ref={searchBox} />
                    <button className='col-span-3 bg-red-700 ml-2 text-white'>Search</button>
                </form>
            </div>

            {/* Conditional rendering based on loading state */}
            {isLoading ? (
                <div className="mx-5 my-4 bg-[#0000007c] text-center py-5 rounded-lg xsm:mx-2">
                    <ClipLoader color="#ffffff" loading={isLoading} size={80} />
                    <h1 className='text-4xl font-light text-white sm:text-3xl xsm:text-2xl'>Loading....</h1>
                </div>
            ) : (
                <SuggestionContainer />
            )}
        </div>
    );
}

export default SuggestionPage;
