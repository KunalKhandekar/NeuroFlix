import { Link, useParams } from 'react-router-dom';
import IconRenderer from "../utils/IconRender";
import React from 'react';

const GenreItem = ({ name, index, show, setShow, use, genre_id }) => {
     
    // getting params for path
    const { genre } = useParams();

    const path = `/browse/${genre_id}`;

    return (
        <Link
            to={path}
            onClick={() => setShow(!show)}
            className={`flex items-center text-white px-6 py-2 hover:bg-[#2f2f2f] cursor-pointer ${(genre == genre_id) ? 'bg-[#2f2f2f] rounded-2xl' : ''}`}
        >
            <IconRenderer iconIndex={index} use={use}/>
            <p className="text-white text-xl ml-4 ssm:text-lg ssm:font-normal">{name}</p>
        </Link>
    )
}

export default GenreItem;