import dummyProfilePic from '../images/crewPlaceholder.jpg';
import { POSTER_URL } from '../utils/constants';
import React from 'react';

const CrewPerson = ({ character, name, profile_path }) => {
    return (
        <div className='flex flex-col justify-between items-center gap-2  px-6 py-4 bg-[#1313139f] rounded-2xl w-40 h-52 xsm:w-36 xxxsm:w-32 xsm:h-52 xsm:px-1'>
            {/* Display profile picture */}
            <img 
                src={profile_path ? POSTER_URL + profile_path : dummyProfilePic} // Use profile path if available, otherwise use dummy profile picture
                alt="person" 
                className='w-24 h-24 object-cover rounded-[50%]' 
            />
            {/* Display person's name and character */}
            <div className='flex flex-col gap-0.5 text-center'>
                <h1 className='text-[#ffffff] text-sm'>{name}</h1> {/* Person's name */}
                <p className='text-[#6d6d6d] text-xs'>{character}</p> {/* Character they play */}
            </div>
        </div>
    )
}

export default CrewPerson;
