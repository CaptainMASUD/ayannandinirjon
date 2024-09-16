import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bike2 from '../../Videos/Bike/Ayanvideo2.mp4'; 
import bike from "../../Videos/Bike/ayanvidoe1.mp4";
import ayanfbbikebanner from '../../Images/VideoBanner/AyanFbPage.jpg';
import { IoPlayOutline } from 'react-icons/io5';

function VideoLibrary() {
  const [showMore, setShowMore] = useState(false);
  const [playingVideo, setPlayingVideo] = useState({});
  const [loading, setLoading] = useState(true); 

  const videoData = [
    { id: 1, title: 'Video 1', src: bike },
    { id: 2, title: 'Video 2', src: bike },
    { id: 3, title: 'Video 3', src: bike },
    { id: 4, title: 'Video 4', src: bike },
    { id: 5, title: 'Video 5', src: bike },
    { id: 6, title: 'Video 6', src: bike },
    { id: 7, title: 'Video 7', src: bike },
    { id: 8, title: 'Video 8', src: bike },
  ];

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); 
  }, []);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const handlePlayClick = (id) => {
    setPlayingVideo((prev) => ({ ...prev, [id]: true }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      className="relative w-full min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {/* Top Banner Video */}
          <motion.div
            className="relative w-full h-[50vh] overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <video
              src={bike2}
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
             
            </div>
          </motion.div>

          {/* Scrollable Container for Child Videos */}
          <motion.div
            className="w-11/12 mx-auto mt-8 mb-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {videoData
                .slice(0, showMore ? videoData.length : window.innerWidth < 640 ? 2 : 3)
                .map((video) => (
                  <motion.div
                    key={video.id}
                    className="p-4 rounded-lg shadow-lg bg-transparent"
                    style={{ width: '100%' }}
                    variants={itemVariants}
                  >
                    <h2 className="text-white text-lg font-semibold mb-2">
                      {video.title}
                    </h2>

                    {/* If the video is not playing, show the banner */}
                    {!playingVideo[video.id] ? (
                      <div className="relative w-full h-auto">
                        <img
                          src={ayanfbbikebanner}
                          alt="Video banner"
                          className="w-full h-auto object-cover rounded-lg"
                          style={{ aspectRatio: '16/9' }}
                        />
                        {/* Play button and "Play Now" text */}
                        <button
                          onClick={() => handlePlayClick(video.id)}
                          className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                          <IoPlayOutline
                            className="text-green-500 text-6xl transition duration-300 hover:text-red-500"
                          />
                          <span className="text-green-500 bg-black p-1 bg-opacity-60 rounded-md mt-2 font-semibold text-lg transition duration-300 hover:text-red-500">
                            Play Now
                          </span>
                        </button>
                      </div>
                    ) : (
                      <video
                        controls
                        autoPlay
                        className="w-full h-auto rounded-lg object-cover"
                        style={{ aspectRatio: '16/9' }}
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </motion.div>
                ))}
            </motion.div>

            {/* Show More / Show Less Button */}
            <motion.div
              className="flex justify-center mt-6"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <button
                onClick={handleToggle}
                className="relative group cursor-pointer text-sky-50 overflow-hidden h-10 w-56 rounded-md bg-green-800 p-2 flex justify-center items-center font-extrabold"
              >
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-900"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-800"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-700"></div>
                <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-600"></div>
                <p className="z-10">{showMore ? 'See Less' : 'See More'}</p>
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default VideoLibrary;
