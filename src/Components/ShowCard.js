import demoPoster from '../images/showCardPlaceHolder.jpg';
import React, { useState, useEffect } from 'react';
import { POSTER_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const ShowCard = ({ poster, title, id }) => {
    // State to track whether the image is loaded or not
    const [isImageLoaded, setIsImageLoaded] = useState(false); 
    
    useEffect(() => {
        // Creating a new Image object to preload the poster image
        const image = new Image();
        image.src = POSTER_URL + poster;
        // Set isImageLoaded to true when the image is loaded
        image.onload = () => {
            setIsImageLoaded(true);
        };
    }, [poster]);
    
    // If poster is not available, return null
    if (!poster) return null;

    // If the image is not loaded yet, display a placeholder
    if (!isImageLoaded) {
        return (
            <Link to={`/browse/info/${id}`}>
                <div className='w-[240px] rounded-xl overflow-hidden mmd:w-[180px] ssm:w-[140px] xxsm:w-[130px] relative md:text-sm xsm:text-xs' >
                    <img className='w-full h-full object-cover' src={demoPoster} alt='Demo Poster'/>
                    <h1 className='absolute bottom-0 bg-gradient-to-t from-black to-[#12121256] w-full px-4 pb-3 pt-2 text-center font-medium'><p className='line-clamp-2'>{title}</p></h1>
                </div>
            </Link>
        );
    }

    // Render the ShowCard with the actual poster image
    return (
        <Link to={`/browse/info/${id}`}>
            <div className='w-[240px] rounded-xl overflow-hidden mmd:w-[180px] ssm:w-[140px] xxsm:w-[130px] relative md:text-sm xsm:text-xs' >
                <img className='w-full h-full object-cover' src={POSTER_URL + poster} alt='movie_img'/>
                <h1 className='absolute bottom-0 bg-gradient-to-t from-black to-[#12121256] w-full px-4 pb-3 pt-2 text-center font-medium'><p className='line-clamp-2'>{title}</p></h1>
            </div>
        </Link>
    );
}

export default ShowCard;
