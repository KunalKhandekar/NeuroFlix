import FullScreenVideo from './FullScreenVideo';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const VideoGrid = ({ videos }) => {
  const [fullScreenUrl, setFullScreenUrl] = useState(null);

  // Function to open full screen video
  const openFullScreen = (url) => {
    setFullScreenUrl(url);
  };

  // Function to close full screen video
  const closeFullScreen = () => {
    setFullScreenUrl(null);
  };

  // Return null if videos array is empty or null
  if (!videos) return null;
  if (videos.length === 0) return null;

  return (
    <div className='mt-8 rounded-2xl bg-[#2e2e2e91] shadow-lg'>
      <h1 className='text-2xl sm:text-xl font-semibold text-white px-3 py-3 border-b-2 border-[#2c2c2c] mx-5'>VIDEOS</h1>
      <div className="grid grid-cols-3 gap-4 p-4 slg:grid-cols-2 sm:grid-cols-1 ">
        {videos.map((video) => {
          return (
            <div key={video.id.videoId} className="relative w-full aspect-video" onClick={() => openFullScreen(`https://www.youtube.com/watch?v=${video.id.videoId}`)}>
                {/* Overlay to cover the video */}
                <div className='w-full h-full absolute top-0 left-0 z-10 bg-gradient-to-t from-black cursor-pointer'></div>
              {/* ReactPlayer component for each video */}
              <ReactPlayer
                className='rounded-xl'
                url={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                width="100%"
                height="100%"
                playing={false}
                light={video.snippet.thumbnails.high.url}
              />
            </div>
          );
        })}
      </div>
      {/* Render FullScreenVideo component if fullScreenUrl is not null */}
      {fullScreenUrl && <FullScreenVideo url={fullScreenUrl} onClose={closeFullScreen} />}
    </div>
  );
};

export default VideoGrid;
