import React, { useState } from 'react';
import {
  FaHome,
  FaUserAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaCog,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Toggle the menu visibility on click
  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <motion.div
      className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-green-600 p-4 rounded-r-lg flex flex-col z-50 backdrop-blur-md bg-opacity-30"
      style={{
        backgroundColor: 'rgba(0, 128, 0, 0.3)', // Transparent background
        backdropFilter: 'blur(10px)', // Glossy effect
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
      }}
      initial={{ width: '3rem' }}
      animate={{ width: isMenuVisible ? '12rem' : '3rem' }} // Smooth width transition
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Control the speed of opening and closing
    >
      {/* Menu Items */}
      <AnimatePresence>
        {isMenuVisible && (
          <motion.div
            className="flex flex-col items-center space-y-4 w-full mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth opacity transition
          >
            <NavButton href="#home" icon={<FaHome />} label="Home" />
            <NavButton href="#about" icon={<FaUserAlt />} label="About" />
            <NavButton href="#contact" icon={<FaEnvelope />} label="Contact" />
            <NavButton href="#phone" icon={<FaPhoneAlt />} label="Phone" />
            <NavButton href="#settings" icon={<FaCog />} label="Settings" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 bg-green-700 text-white p-2 rounded-full flex items-center justify-center cursor-pointer ${
          isMenuVisible ? 'translate-x-1/2' : 'translate-x-1/4'
        }`}
        style={{
          width: '2.5rem',
          height: '2.5rem',
          position: 'absolute',
          top: '50%',
          right: isMenuVisible ? '-1.6rem' : '-0.5rem',
          transform: 'translateY(-50%)',
        }}
        onClick={toggleMenu} // Toggle menu on click
      >
        {isMenuVisible ? <FaChevronLeft /> : <FaChevronRight />}
      </div>
    </motion.div>
  );
}

function NavButton({ href, icon, label }) {
  return (
    <a
      href={href}
      className="flex items-center justify-center bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-green-800 w-full"
    >
      <div className="flex items-center space-x-2">
        {icon}
        <span className="ml-2">{label}</span>
      </div>
    </a>
  );
}

export default Navbar;
