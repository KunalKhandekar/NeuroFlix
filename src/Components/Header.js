import { useSelector } from 'react-redux';
import { RiMenuUnfoldFill } from "react-icons/ri";
import Logo from '../images/Logo.png'
import React from 'react';

const Header = ({ show, setShow }) => {

    // userSlice Constants
    const userName = useSelector((store) => store.user.displayName);
    const Avatar = useSelector((store) => store.user.photoURL);

    return (

        <div className='max-w-[1600px] m-auto fixed top-0 z-40 w-full bg-gradient-to-b from-black to-[#000000a3] sm:relative'>

            <div className='flex items-center justify-between px-5 py-3 bg-gradient-to-b from-black z-40 flex-wrap absolute top-0 w-full sm:bg-black sm:fixed'>
                {/* Menu && Logo */}
                <div className='flex items-center gap-4'>
                    <RiMenuUnfoldFill className='text-2xl text-white cursor-pointer ssm:text-2xl' onClick={() => setShow(!show)}/>
                    <img className='w-36 ssm:w-28 xsm:w-24' src={Logo} alt="Logo" />
                </div>

                {/* User Info */}
                <div className='flex items-center gap-1.5'>
                    <p className='text-sm font-medium uppercase text-white ssm:text-xs'>{userName}</p>
                    <img className='w-10  rounded-xl ssm:w-8' src={Avatar} alt="User_pic" />
                </div>
            </div>

        </div>
    )
}

export default Header
