import React, { useState, useEffect } from 'react';
import { POSTER_URL } from '../utils/constants';
import demoPoster from '../images/posterPlaceholder.jpg'; // Import your demo poster image
import { Link } from 'react-router-dom';

const TopPosterContainer = ({ poster, title, desc, id}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = POSTER_URL + poster;
        image.onload = () => {
            setIsImageLoaded(true);
        };
    }, [poster]);

    if (!isImageLoaded) {
        return (
            <div className='max-w-[1600px] m-auto pt-16 px-16 bg-black text-white sm:pt-3 slg:px-8 xsm:px-4 xsm:pt-1.5'>
                <div className='w-[100%] mx-auto rounded-xl xsm:rounded-lg relative'>
                    <img
                        src={demoPoster} // Use demo poster image source here
                        alt="Demo Poster"
                        className='w-full h-full object-cover rounded-2xl xsm:rounded-lg relative'
                    />
                    <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-[#000000c3]'></div>
                    <div className='absolute bottom-[15%] left-[8%] flex flex-col gap-2 ssm:bottom-[9%] ssm:left-[5%] xsm:gap-1'>
                        <p className='text-4xl font-semibold md:text-3xl xsm:text-xl xxsm:text-base'>{title}</p>
                        <div className='max-w-[700px] slg:max-w-[420px] md:text-xs ssm:max-w-[250px]'><p className='xsm:line-clamp-3'>{desc}</p></div>
                    </div>
                </div>
            </div>
        );
    }

    if (!poster || !isImageLoaded) return null; // Return null if no poster is provided or if image is not loaded yet

    return (
        <Link to={`/browse/info/${id}`} >
            <div className='max-w-[1600px] m-auto pt-16 px-16 bg-black text-white sm:pt-3 slg:px-8 xsm:px-4 xsm:pt-1.5'>
            <div className='w-[100%] mx-auto rounded-xl xsm:rounded-lg relative'>
                <img
                    src={POSTER_URL + poster}
                    alt="Backdrop_Img"
                    className='w-full h-full object-cover rounded-2xl xsm:rounded-lg relative'
                />
                <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-[#000000c3]'></div>
                <div className='absolute bottom-[15%] left-[8%] flex flex-col gap-2 ssm:bottom-[9%] ssm:left-[5%] xsm:gap-1'>
                    <p className='text-4xl font-semibold md:text-3xl xsm:text-xl xxsm:text-base'>{title}</p>
                    <p className='max-w-[700px] slg:max-w-[420px] md:text-xs ssm:max-w-[250px]'><p className='xsm:line-clamp-3'>{desc}</p></p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default TopPosterContainer;
