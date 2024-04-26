import { useSelector } from 'react-redux';
import { RiMenuUnfoldFill } from "react-icons/ri";
import Logo from '../images/Logo.png'
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/Firebase';

const Header = ({ show, setShow }) => {

    // userSlice Constants
    const userName = useSelector((store) => store.user.displayName);
    const Avatar = useSelector((store) => store.user.photoURL);

    // Handling Sign Out
    const handleSignOut = () => {
        signOut(auth);
    };

    return (

        <div className='max-w-[1600px] m-auto'>

            <div className='flex items-center justify-between px-5 py-3 bg-black flex-wrap'>
                {/* Menu && Logo */}
                <div className='flex items-center gap-4'>
                    <RiMenuUnfoldFill className='text-2xl text-white cursor-pointer' onClick={() => setShow(!show)}/>
                    <img className='w-36' src={Logo} alt="Logo" />
                </div>

                {/* User Info */}
                <div className='flex items-center gap-1.5'>
                    <p className='text-sm font-medium uppercase text-white'>{userName}</p>
                    <img className='w-10  rounded-xl' src={Avatar} alt="User_pic" />
                </div>
            </div>

        </div>
    )
}

export default Header
