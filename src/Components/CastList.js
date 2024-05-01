import React from 'react';
import CrewPerson from './CrewPerson';

const CastList = ({ first10Cast }) => {

    if (first10Cast.length===0) return;

    return (
        <div className='rounded-2xl bg-[#2e2e2e91] shadow-lg'>
            <h1 className='text-2xl sm:text-xl font-semibold text-white px-3 py-3 border-b-2 border-[#2c2c2c] mx-5'>CAST & CREW</h1>

            <div className='flex justify-center items-center p-6 flex-wrap gap-2 xsm:px-3 shadow-md'>
                {/* crew person */}
                {first10Cast.map((person) => (
                    <CrewPerson name={person.name} character={person.character} profile_path={person.profile_path} />
                ))}
            </div>

        </div>
    )
}

export default CastList
