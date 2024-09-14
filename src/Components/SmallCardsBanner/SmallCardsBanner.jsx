import React, { useState } from 'react';
import { FaCamera, FaMotorcycle, FaMapMarkerAlt, FaCampground } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

// Button and Modal Styles
const buttonStyles = "relative border-2 border-green-500 shadow-lg text-green-500 hover:bg-green-500 hover:text-white transition duration-300 ease-in-out flex items-center justify-center p-4 rounded-lg";
const buttonTextStyles = "absolute -bottom-8 left-0 w-full text-center text-sm text-green-500 opacity-0 transition-opacity duration-300 ease-in-out";
const modalStyles = "fixed inset-0 bg-slate-900 bg-opacity-80 flex items-center justify-center z-50";
const modalContentStyles = "bg-slate-900 text-gray-200 rounded-lg p-6 relative max-w-lg w-full";
const closeButtonStyles = "absolute top-4 right-4 text-green-500 cursor-pointer text-2xl";

// Details for each modal
const details = {
  camera: {
    title: "Photography",
    description: "I am passionate about capturing moments through photography. My portfolio includes stunning images from my travels and adventures."
  },
  motorcycle: {
    title: "Biking",
    description: "As an avid biker, I enjoy exploring new terrains on my motorcycle. =My biking journeys take me through scenic routes and off-road adventures."
  },
  location: {
    title: "Travel",
    description: "I loves to travel and explore new places. My adventures have taken me to various popular destinations, offering unique experiences and stories."
  },
  camp: {
    title: "Camping",
    description: "I enjoys camping and spending nights under the stars. My camping trips are filled with memorable experiences and connections with nature."
  }
};

// Framer Motion Variants for Water Flow Animation
const waterFlowVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 150
    }
  })
};

function SmallCardsBanner() {
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (modalType) => setSelectedModal(modalType);
  const closeModal = () => setSelectedModal(null);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white">
      {/* Full Name Header */}
      <h1 className="text-3xl font-bold text-green-500 mb-4">
        Ayan Nandiy Nirjan
      </h1>

      {/* Summary Section */}
      <p className="text-lg mb-6 text-center">
        I am <strong className="text-green-500">Ayan Nandy Nirjan</strong>, a passionate traveler, photographer, and biker who loves exploring new places and capturing moments through my lens.
      </p>

      {/* Card Buttons */}
      <div className="flex space-x-4 mb-4 mt-5 relative">
        <button
          className={buttonStyles}
          onClick={() => openModal('camera')}
        >
          <FaCamera className="text-2xl" />
          <span className={buttonTextStyles}>Photography</span>
        </button>
        <button
          className={buttonStyles}
          onClick={() => openModal('motorcycle')}
        >
          <FaMotorcycle className="text-2xl" />
          <span className={buttonTextStyles}>Biking</span>
        </button>
        <button
          className={buttonStyles}
          onClick={() => openModal('location')}
        >
          <FaMapMarkerAlt className="text-2xl" />
          <span className={buttonTextStyles}>Travel</span>
        </button>
        <button
          className={buttonStyles}
          onClick={() => openModal('camp')}
        >
          <FaCampground className="text-2xl" />
          <span className={buttonTextStyles}>Camping</span>
        </button>
      </div>

      {/* Modals */}
      {selectedModal && (
        <motion.div
          className={modalStyles}
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className={modalContentStyles}
            onClick={(e) => e.stopPropagation()} // Prevent click event from closing the modal
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <IoMdClose className={closeButtonStyles} onClick={closeModal} />

            {/* Water Flow Animation for Modal Header */}
            <h2 className="text-2xl font-bold mb-4">
              {details[selectedModal].title.split('').map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={waterFlowVariants}
                  initial="hidden"
                  animate="visible"
                  className={index === 0 ? "text-green-500" : "text-gray-200"}
                >
                  {char}
                </motion.span>
              ))}
            </h2>

            <p>{details[selectedModal].description}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default SmallCardsBanner;
