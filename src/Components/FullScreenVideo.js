import React from 'react';
import ReactPlayer from 'react-player';
import { FaWindowClose } from "react-icons/fa";

const FullScreenVideo = ({ url, onClose }) => {
    
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex justify-center items-center">
      <div className="relative w-full h-full">
        <button className="absolute top-14 z-50 right-4 m-4 text-white text-3xl p-2 rounded-[50%] xsm:text-2xl xsm:right-0" onClick={onClose}><FaWindowClose/></button>
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls={false} // Remove default controls
          config={{
            youtube: {
              playerVars: { controls: 0 } // Remove YouTube controls
            }
          }}
          playing={true}
        />
      </div>
    </div>
  );
};

export default FullScreenVideo;
