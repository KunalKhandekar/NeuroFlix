

import React, { useState } from 'react';
import { RiInformation2Line } from "react-icons/ri";
import { IoVolumeMute } from "react-icons/io5";
import { IoVolumeHigh } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa6";
import ReactPlayer from 'react-player';

const TopTrailerContainer = ({ title, desc, id }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleToggleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleTogglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className='max-w-[1600px] w-full aspect-video m-auto relative py-20 bg-black px-16 -z-0 overflow-hidden sm:overflow-visible'>
            <div className="w-full aspect-video absolute z-50 top-0 left-0 bg-gradient-to-r from-black px-[5%] pt-[25%] xl:pt-[35%] slg:pt-[30%] sm:pt-[60%]  pb-6 sm:px-0 sm:pb-0 sm:bg-none">
                <div className='sm:bg-[#000000] sm:px-[5%] sm:py-[5%]' >
                <div className='max-w-[700px] text-4xl text-white font-bold pb-3 lg:text-3xl slg:text-2xl sm:text-xl sm:max-w-[400px] ssm:text-base ssm:pb-1 xxsm:text-sm'>
                    {title}
                </div>
                <div className='max-w-[500px] text-xl font-normal text-white lg:text-lg slg:text-sm slg:max-w-[380px] sm:max-w-[280px] sm:text-xs ssm:text-[8px] ssm:max-w-[250px] ssm:leading-3 xxsm:text-[6.5px] xsm:max-w-[180px]'>
                    {desc}
                </div>
                <div className="flex gap-3 mt-4 text-xl lg:text-base slg:text-sm sm:text-xs ssm:text-[9px] ssm:mt-1.5 xsm:text-[6px] xsm:gap-1">
                    <button className="text-black bg-[#ffff] hover:bg-[#b6b6b6] px-6 py-1.5 flex items-center gap-2 rounded-lg font-medium ssm:px-2 ssm:font-semibold ssm:py-1 ssm:gap-1 xsm:py-0" onClick={handleTogglePlay}> {isPlaying ? <><FaPause/> <p>Pause</p></> : <><FaPlay/> <p>Play</p></>}
                    </button>
                    <button className="text-white bg-[#dfdfdf84] hover:bg-[#d2d2d2ae] px-6 py-1.5 flex items-center gap-2 rounded-lg font-medium ssm:px-2 ssm:font-semibold ssm:py-1 ssm:gap-1 xsm:py-0">
                        <RiInformation2Line /> More Info
                    </button>
                </div>
                </div>
            </div>

            <div className='cursor-pointer px-3 py-3 rounded-[50%] bg-[#4f4f4f75] absolute z-50 text-4xl top-0 right-0 text-white mr-[5%] mt-[35%] lg:mt-[43%] lg:text-2xl slg:text-xl sm:text-sm ssm:text-xs ssm:px-1.5 ssm:py-1.5' onClick={handleToggleMute}> {isMuted ? <IoVolumeMute/> : <IoVolumeHigh /> }  </div>

            <ReactPlayer
                className="w-full aspect-video absolute top-0 left-0 -z-40 scale-150"
                url={`https://www.youtube.com/watch?v=${'6xqNk5Sf5jo'}`}
                playing={isPlaying}
                muted={isMuted}
                width="100%"
                height="100%"
                loop={true}
            />
        </div>
    )
}

export default TopTrailerContainer;

