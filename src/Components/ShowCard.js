import React from 'react'
import { POSTER_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const ShowCard = ({ poster, title, id }) => {
    return (
        <Link to={`/browse/info/${id}`}>
            <div className='w-[240px] rounded-xl overflow-hidden mmd:w-[180px] ssm:w-[140px] xxsm:w-[130px] relative md:text-sm xsm:text-xs' >
                <img className='w-full h-full object-cover' src={POSTER_URL + poster} alt='movie_img' />
                <h1 className='absolute bottom-0 bg-gradient-to-t from-black to-[#12121256] w-full px-4 pb-3 pt-2 text-center font-medium'><p className='line-clamp-2'>{title}</p></h1>
            </div>
        </Link>
    )
}

export default ShowCard
