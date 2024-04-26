import { RiMenuFoldFill } from "react-icons/ri";
import Logo from '../images/Logo.png';
import React from 'react';
import useGenreList from "../Hooks/Movies/useGenreList";
import IconRenderer from "../utils/IconRender";

const SideBar = ({ show, setShow }) => {

    // Hooks
    const genres = useGenreList();
    if (!genres) return;

    const movieGenre = genres?.movie;
    const tvGenre = genres?.tv;


    return (
        <div className={`w-[250px] h-[100vh] overflow-auto border border-black absolute top-0 bg-[#141414] shadow transition-all  ${show ? 'left-0' : '-left-64'}`}>

            {/* Menu && Logo */}
            <div className='flex items-center gap-4 px-5 py-4 border-b border-[#3a3a3a] sticky top-0 z-20 bg-[#141414]'>
                <RiMenuFoldFill className='text-2xl text-white cursor-pointer' onClick={() => setShow(!show)} />
                <img className='w-36' src={Logo} alt="Logo" />
            </div>

            {/* Movie Genre */}
            <div className="w-full m-auto relative border-b border-[#3a3a3a]">
                <p className="text-lg pl-3 py-1.5 pt-2 font-semibol text-[#919191] sticky top-14 z-10 bg-[#141414]">Movie Genres</p>

                {/* items */}
                <div>
                    {movieGenre.map((genre, index) => (
                        <div className="flex items-center text-white px-6 py-2 hover:bg-[#2f2f2f] cursor-pointer">
                            <IconRenderer iconIndex={index} />
                            <p className="text-white text-xl ml-4">{genre.name}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* Tv Genres */}
            <div className="w-full m-auto relative">
                <p className="text-lg pl-3 py-1.5 pt-2 font-semibol text-[#919191] sticky top-14 z-10 bg-[#141414]">TV Show Genres</p>

                {/* Items */}
                <div>
                    {tvGenre.map((genre, index) => (
                        <div className="flex items-center text-white px-6 py-2 hover:bg-[#2f2f2f] cursor-pointer">
                            <IconRenderer iconIndex={index} />
                            <p className="text-white text-xl ml-4">{genre.name}</p>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default SideBar
