import React from 'react';
import { useParams } from 'react-router-dom';

const MoviesGenrePage = () => {

    const { genre } = useParams();

    return (
        <div className='text-black font-bold text-2xl'>
            {genre}
        </div>
    )
}

export default MoviesGenrePage;
