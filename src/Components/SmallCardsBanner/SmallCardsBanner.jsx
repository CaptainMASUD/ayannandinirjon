import React, { useState } from 'react';
import { FaCar, FaMapMarkerAlt, FaCode, FaPuzzlePiece, FaUtensils } from 'react-icons/fa';
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
  driving: {
    title: "Driving",
    description:
      "I enjoy the focus and freedom of driving. Long highway cruises and precise city navigation help me unwind while sharpening my attention to detail.",
  },
  travel: {
    title: "Travel",
    description:
      "I love exploring new places and cultures. Each trip brings unique stories, perspectives, and inspiration for what I create next.",
  },
  programming: {
    title: "Programming",
    description:
      "I build things with code—experimenting with frontend interactions, backend APIs, and tooling that make ideas come alive.",
  },
  problemSolving: {
    title: "Problem Solving",
    description:
      "Puzzles, debugging sessions, and system design challenges are my jam. I enjoy breaking problems down and crafting clean solutions.",
  },
  foods: {
    title: "Exploring New Foods",
    description:
      "From street snacks to tasting menus, I’m always on the lookout for new flavors and culinary traditions to try.",
  },
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
      stiffness: 150,
    },
  }),
};

function SmallCardsBanner() {
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (modalType) => setSelectedModal(modalType);
  const closeModal = () => setSelectedModal(null);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white">
      {/* Full Name Header */}
      <h1 className="text-3xl font-bold text-green-500 mb-4">
        MD REEZWANUL HAQUE EASHAN
      </h1>

      {/* Summary Section */}
      <p className="text-lg mb-6 text-center">
        I am <strong className="text-green-500">MD REEZWANUL HAQUE EASHAN</strong>, a curious explorer who loves driving, traveling, programming, solving problems, and discovering new foods.
      </p>

      {/* Card Buttons */}
      <div className="flex space-x-4 mb-4 mt-5 relative">
        <button className={buttonStyles} onClick={() => openModal('driving')}>
          <FaCar className="text-2xl" />
          <span className={buttonTextStyles}>Driving</span>
        </button>
        <button className={buttonStyles} onClick={() => openModal('travel')}>
          <FaMapMarkerAlt className="text-2xl" />
          <span className={buttonTextStyles}>Travel</span>
        </button>
        <button className={buttonStyles} onClick={() => openModal('programming')}>
          <FaCode className="text-2xl" />
          <span className={buttonTextStyles}>Programming</span>
        </button>
        <button className={buttonStyles} onClick={() => openModal('problemSolving')}>
          <FaPuzzlePiece className="text-2xl" />
          <span className={buttonTextStyles}>Problem Solving</span>
        </button>
        <button className={buttonStyles} onClick={() => openModal('foods')}>
          <FaUtensils className="text-2xl" />
          <span className={buttonTextStyles}>Exploring New Foods</span>
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
