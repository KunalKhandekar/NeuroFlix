import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuggestionButton = () => {
    const navigate = useNavigate();
    
    // Function to handle button click
    const handleClick = () => {
        // Toggle between the two routes based on the current location
        if (window.location.pathname === '/browse/suggestion') {
            navigate('/browse'); // Navigate to the home page if currently on the suggestion page
        } else {
            navigate('/browse/suggestion'); // Navigate to the suggestion page if currently on the home page
        }
    }

    return (
        <div className='fixed top-16 right-5 z-50'>
            {/* Button to toggle between routes */}
            <div className='px-4 py-1.5 capitalize rounded-lg bg-purple-700 text-white font-medium sm:text-xs cursor-pointer hover:bg-purple-600' onClick={handleClick}>
                {/* Display different text based on the current location */}
                {window.location.pathname === '/browse/suggestion' ? "Home Page" : "Suggestion"}
            </div>
        </div>
    );
}

export default SuggestionButton;
