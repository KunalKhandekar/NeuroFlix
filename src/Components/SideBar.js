import useGenreList from "../Hooks/Movies/useGenreList";
import { IoLogOutOutline } from "react-icons/io5";
import { RiMenuFoldFill } from "react-icons/ri";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import Logo from '../images/Logo.png';
import GenreItem from "./GenreItem";
import React from 'react';

const SideBar = ({ show, setShow }) => {

    // Hooks
    const genres = useGenreList();
    if (!genres) return;

    // Separating Data
    const movieGenre = genres?.movie;
    const tvGenre = genres?.tv;

    // Handling Sign Out
    const handleSignOut = () => {
        signOut(auth);
    };


    return (
        <div className={`w-[250px] h-[100vh] overflow-auto border border-black absolute top-0 bg-[#141414] shadow transition-all duration-300 ${show ? 'left-0' : '-left-64'}`}>

            {/* Menu && Logo */}
            <div className='flex items-center gap-4 px-5 py-4 border-b border-[#3a3a3a] sticky top-0 z-20 bg-[#141414]'>
                <RiMenuFoldFill className='text-2xl text-white cursor-pointer' onClick={() => setShow(!show)} />
                <img className='w-36' src={Logo} alt="Logo" />
            </div>

            {/* ------------------------------------------------------------------------------ */}

            {/* Movie Genre */}
            <div className="w-full m-auto relative border-b border-[#3a3a3a]">
                <p className="text-lg pl-3 py-1.5 pt-2 font-semibol text-[#919191] sticky top-14 z-10 bg-[#141414]">Movie Genres</p>

                {/* items */}
                <div>
                    {movieGenre.map((item, index) => (
                        <GenreItem name={item.name} index={index} key={item.id} show={show} setShow={setShow} use={'movie_genre_'} />
                    ))}
                </div>
            </div>

            {/* ------------------------------------------------------------------------------ */}

            {/* Tv Genres */}
            <div className="w-full m-auto relative border-b border-[#3a3a3a]">
                <p className="text-lg pl-3 py-1.5 pt-2 font-semibol text-[#919191] sticky top-14 z-10 bg-[#141414]">TV Show Genres</p>

                {/* Items */}
                <div>
                    {tvGenre.map((item, index) => (
                        <GenreItem name={item.name} index={index} key={item.id} show={show} setShow={setShow} use={'tv_genre_'} />
                    ))}
                </div>

            </div>

            {/* ------------------------------------------------------------------------------ */}

            {/* Log Out Button */}
            <div className="w-[80%] mx-auto my-3">
            <button className=" flex items-center justify-center gap-2 bg-red-600 w-full py-1 text-lg text-white rounded-2xl capitalize" onClick={()=> handleSignOut()} >
                Log Out
                <IoLogOutOutline className="text-xl" />
            </button>
            </div>

        </div>
    )
}

export default SideBar
