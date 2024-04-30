import React from 'react';
import { POSTER_URL } from '../utils/constants';

const TopPosterContainer = ({ poster, title, desc }) => {
    if (!poster) return null; // Return null if no poster is provided
    return (
        <div className='max-w-[1600px] m-auto pt-16 px-16 bg-black text-white sm:pt-3 slg:px-8 xsm:px-4 xsm:pt-1.5'>
            <div className='w-[100%] mx-auto rounded-xl xsm:rounded-lg relative' >
                <img
                    src={POSTER_URL + poster}
                    alt="Backdrop_Img"
                    className='w-full h-full object-cover rounded-2xl xsm:rounded-lg relative'
                    loading="lazy" // Add lazy loading attribute
                />
                <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-[#000000c3]'></div>
                <div className='absolute bottom-[15%] left-[8%] flex flex-col gap-2 ssm:bottom-[9%] ssm:left-[5%] xsm:gap-1'>
                    <p className='text-4xl font-semibold md:text-3xl xsm:text-xl xxsm:text-base'>{title}</p>
                    <p className='max-w-[700px] slg:max-w-[420px] md:text-xs ssm:max-w-[250px]'><p className='xsm:line-clamp-3'>{desc}</p></p>
                </div>
            </div>
        </div>
    )
}

export default TopPosterContainer;