import useNowPlayingMovies from '../../Hooks/Movies/useNowPlayingMovies';
import Header from '../../Components/Header';
import { useState } from 'react';
import useAuthentication from '../../utils/useAuthentication';
import SideBar from '../../Components/SideBar';

const Browse = () => {
  const [show, setShow] = useState(false);

  // Authentication
  useAuthentication();

  // HOOKS
  useNowPlayingMovies();

  // Rendering the Component
  return (
    <div className='relative'>
      <Header show={show} setShow={setShow} />
      <SideBar show={show} setShow={setShow} />
    </div>
  )
}


export default Browse;
