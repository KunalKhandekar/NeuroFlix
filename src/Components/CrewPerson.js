import React from 'react';
import { POSTER_URL } from '../utils/constants';
import dummyProfilePic from '../images/crewPlaceholder.jpg'; // Import your dummy profile picture

const CrewPerson = ({character, name, profile_path}) => {
    return (
        <div className='flex flex-col justify-between items-center gap-2  px-6 py-4 bg-[#1313139f] rounded-2xl w-40 h-52 xsm:w-28 xsm:h-52 xsm:px-3'>
            <img 
                src={profile_path ? POSTER_URL + profile_path : dummyProfilePic} // Use dummy profile picture if profile_path is falsy
                alt="person" 
                className='w-24 h-24 object-cover rounded-[50%]' 
            />
            <div className='flex flex-col gap-0.5 text-center'>
                <h1 className='text-[#ffffff] text-sm'>{name}</h1>
                <p className='text-[#6d6d6d] text-xs'>{character}</p>
            </div>
        </div>
    )
}

export default CrewPerson;
