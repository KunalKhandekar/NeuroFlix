import CrewPerson from './CrewPerson';
import React from 'react';

const CastList = ({ first10Cast }) => {
    // Check if there are no cast members
    if (first10Cast.length === 0) return null; // Return null if there are no cast members

    return (
        <div className='rounded-2xl bg-[#2e2e2e91] shadow-lg'>
            {/* Header for the cast and crew section */}
            <h1 className='text-2xl sm:text-xl font-semibold text-white px-3 py-3 border-b-2 border-[#2c2c2c] mx-5'>CAST & CREW</h1>

            {/* Container for cast and crew members */}
            <div className='flex justify-center items-center p-6 flex-wrap gap-2 xsm:px-3 shadow-md'>
                {/* Mapping over the first 10 cast members and rendering the CrewPerson component for each */}
                {first10Cast.map((person) => (
                    <CrewPerson
                        key={person.id}
                        name={person.name}
                        character={person.character}
                        profile_path={person.profile_path}
                    />
                ))}
            </div>
        </div>
    );
};

export default CastList;
