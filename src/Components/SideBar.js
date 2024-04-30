import useGenreList from "../Hooks/Movies/useGenreList";
import { IoLogOutOutline } from "react-icons/io5";
import { RiMenuFoldFill } from "react-icons/ri";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import Logo from '../images/Logo.png';
import GenreItem from "./GenreItem";
import { Link } from "react-router-dom";
import React from 'react';
import { useParams } from "react-router-dom";
import { FaPlayCircle } from 'react-icons/fa';
import { FaFilm } from 'react-icons/fa';
import { FaTrophy } from 'react-icons/fa';
import { FaBinoculars } from 'react-icons/fa';

const SideBar = ({ show, setShow }) => {

    const { categoryNo } = useParams();

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
        <div className={`w-[250px] h-[100vh] overflow-auto border border-black fixed top-0 bg-[#141414] z-40 shadow transition-all duration-300 scroll-smooth ${show ? 'left-0' : '-left-64'} ssm:w-[220px]`}>

            {/* Menu && Logo */}
            <div className='flex items-center gap-4 px-5 py-4 border-b border-[#3a3a3a] sticky top-0 z-20 bg-[#141414]'>
            <RiMenuFoldFill className='text-2xl text-white cursor-pointer ssm:text-xl xsm:text-lg' onClick={() => setShow(!show)}/>
                    <img className='w-36 ssm:w-28 xsm:w-24' src={Logo} alt="Logo" />
            </div>

            {/* ------------------------------------------------------------------------------ */}

            {/* Movie Categories */}
            <div className="w-full m-auto relative border-b border-[#3a3a3a]">
                <p className="text-lg pl-3 py-1.5 pt-2 font-semibol text-[#919191] sticky top-14 z-10 bg-[#141414] ssm:text-sm ssm:top-12 ssm:pt-2.5">Movie Categories</p>

                {/* items */}
                <div>
                    <Link
                        to='/browse/categories/1'
                        onClick={() => setShow(!show)}
                        className={`flex items-center text-white px-6 py-2 hover:bg-[#2f2f2f] cursor-pointer ${(categoryNo == 1) ? 'bg-[#2f2f2f] rounded-2xl' : ''}`}
                    >
                        <FaPlayCircle className="text-xl ssm:text-lg"/>
                        <p className="text-white text-xl ml-4 ssm:text-lg ssm:font-normal">Now Playing</p>
                    </Link>
                    <Link
                        to='/browse/categories/2'
                        onClick={() => setShow(!show)}
                        className={`flex items-center text-white px-6 py-2 hover:bg-[#2f2f2f] cursor-pointer ${(categoryNo == 2) ? 'bg-[#2f2f2f] rounded-2xl' : ''}`}
                    >
                        <FaFilm className="text-xl ssm:text-lg"/>
                        <p className="text-white text-xl ml-4 ssm:text-lg ssm:font-normal">Popular</p>
                    </Link>
                    <Link
                        to='/browse/categories/3'
                        onClick={() => setShow(!show)}
                        className={`flex items-center text-white px-6 py-2 hover:bg-[#2f2f2f] cursor-pointer ${(categoryNo == 3) ? 'bg-[#2f2f2f] rounded-2xl' : ''}`}
                    >
                        <FaTrophy className="text-xl ssm:text-lg"/>
                        <p className="text-white text-xl ml-4 ssm:text-lg ssm:font-normal">Top Rated</p>
                    </Link>
                </div>
            </div>


            {/* ------------------------------------------------------------------------------ */}

            {/* Movie Genre */}
            <div className="w-full m-auto relative border-b border-[#3a3a3a]">
                <p className="text-lg pl-3 py-1.5 pt-2 font-semibol text-[#919191] sticky top-14 z-10 bg-[#141414] ssm:text-sm ssm:top-12 ssm:pt-2.5">Movie Genres</p>

                {/* items */}
                <div>
                    {movieGenre.map((item, index) => (
                        <GenreItem name={item.name} index={index} key={item.id} show={show} setShow={setShow} use={'movie_genre_'} genre_id={item.id} />
                    ))}
                </div>
            </div>

            {/* ------------------------------------------------------------------------------ */}

            {/* Tv Genres */}
            <div className="w-full m-auto relative border-b border-[#3a3a3a]">
                <p className="text-lg pl-3 py-1.5 pt-2 font-semibol text-[#919191] sticky top-14 z-10 bg-[#141414] ssm:text-sm ssm:top-12 ssm:pt-2.5">TV Show Genres</p>

                {/* Items */}
                <div>
                    {tvGenre.map((item, index) => (
                        <GenreItem name={item.name} index={index} key={item.id} show={show} setShow={setShow} use={'tv_genre_'} genre_id={item.id}/>
                    ))}
                </div>

            </div>

            {/* ------------------------------------------------------------------------------ */}

            {/* Log Out Button */}
            <div className="w-[80%] mx-auto my-3 ssm:mb-14">
                <button className=" flex items-center justify-center gap-2 bg-red-600 w-full py-1 text-lg text-white rounded-2xl capitalize" onClick={() => handleSignOut()} >
                    Log Out
                    <IoLogOutOutline className="text-xl" />
                </button>
            </div>

        </div>
    )
}

export default SideBar
