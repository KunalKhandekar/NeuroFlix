import { Link, useParams } from 'react-router-dom';
import IconRenderer from "../utils/IconRender";
import React from 'react';

const GenreItem = ({ name, show, setShow, genre_id }) => {
    // Getting params for the current genre
    const { genre } = useParams();

    // Constructing the path for the link
    const path = `/browse/${genre_id}`;

    return (
        // Link component for navigation
        <Link
            to={path} // Destination path
            onClick={() => setShow(!show)} // Toggle the sidebar on click
            // Conditional class based on whether the current genre matches the genre ID
            className={`flex items-center text-white px-6 py-2 hover:bg-[#2f2f2f] cursor-pointer ${(genre == genre_id) ? 'bg-[#2f2f2f] rounded-2xl' : ''}`}
        >
            {/* Rendering the icon for the genre using the IconRenderer component */}
            <IconRenderer icon={genre_id} />
            {/* Displaying the name of the genre */}
            <p className="text-white text-xl ml-4 ssm:text-lg ssm:font-normal">{name}</p>
        </Link>
    )
}

export default GenreItem;