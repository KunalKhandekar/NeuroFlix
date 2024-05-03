import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuggestionButton = () => {
    const navigate = useNavigate();
    

    const handleClick = () => {
        if (window.location.pathname === '/browse/suggestion') {
            navigate('/browse');
        } else {
            navigate('/browse/suggestion');
        }

    }

    return (
        <div className='fixed top-16 right-5 z-50'>
            <div className='px-4 py-1.5 capitalize rounded-lg bg-purple-700 text-white font-medium sm:text-xs cursor-pointer hover:bg-purple-600' onClick={handleClick}>
                {window.location.pathname === '/browse/suggestion' ? "Home Page" : "Suggestion"}
            </div>
        </div>
    )
}

export default SuggestionButton;
