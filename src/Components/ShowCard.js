import React, { useState, useEffect } from 'react';
import { POSTER_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import demoPoster from '../images/showCardPlaceHolder.jpg';

const ShowCard = ({ poster, title, id }) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false); 
    
    useEffect(() => {
        const image = new Image();
        image.src = POSTER_URL + poster;
        image.onload = () => {
            setIsImageLoaded(true);
        };
    }, [poster]);
    
    if (!poster) return;
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

    if (!poster) return null;

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
