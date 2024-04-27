import { Link, useParams } from 'react-router-dom';
import IconRenderer from "../utils/IconRender";
import React from 'react';

const GenreItem = ({ name, index, show, setShow, use }) => {
     
    // getting params for path
    const { genre } = useParams();

    // Checking params for Tv or Movie with use and constructing the path
    const pathGenre = use + (name).toLowerCase();
    const path = `/browse/${pathGenre}`;

    return (
        <Link
            to={path}
            onClick={() => setShow(!show)}
            className={`flex items-center text-white px-6 py-2 hover:bg-[#2f2f2f] cursor-pointer ${(genre === pathGenre) ? 'bg-[#2f2f2f] rounded-2xl' : ''}`}
        >
            <IconRenderer iconIndex={index} use={use}/>
            <p className="text-white text-xl ml-4">{name}</p>
        </Link>
    )
}

export default GenreItem;