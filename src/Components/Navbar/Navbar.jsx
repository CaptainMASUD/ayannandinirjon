import React, { useState } from 'react';
import {
  FaHome,
  FaVideo,
  FaMapMarkedAlt,
  FaBell,
  FaUserAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaMapSigns,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [hasNotification, setHasNotification] = useState(true); // Track if there are notifications
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const handleNavClick = (path) => {
    navigate(path);
    setIsMenuVisible(false);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <>
      <motion.div
        className="fixed top-1/2 left-0 transform -translate-y-1/2 bg-green-600 p-4 rounded-r-lg flex flex-col z-50 backdrop-blur-md bg-opacity-30"
        style={{
          backgroundColor: 'rgba(0, 128, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
        initial={{ width: '3rem' }}
        animate={{ width: isMenuVisible ? '12rem' : '3rem' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Menu Items */}
        <AnimatePresence>
          {isMenuVisible && (
            <motion.div
              className="flex flex-col items-center space-y-4 w-full mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <NavButton
                to="/"
                icon={<FaHome />}
                label="Home"
                onClick={() => handleNavClick('/')}
              />
              <NavButton
                to="/videolibrary"
                icon={<FaVideo />}
                label="Videos"
                onClick={() => handleNavClick('/videolibrary')}
              />
              <NavButton
                to="/tourmap"
                icon={<FaMapMarkedAlt />}
                label="Tourmap"
                onClick={() => handleNavClick('/tourmap')}
              />
              <NavButton
                icon={
                  <motion.div
                    animate={{
                      rotate: hasNotification ? [0, 10, -10, 0] : 0,
                    }}
                    transition={{
                      repeat: hasNotification ? Infinity : 0,
                      duration: 2,
                    }}
                    className="relative"
                  >
                    <FaBell />
                  </motion.div>
                }
                label="Notifications"
                onClick={toggleModal} // Open modal on click
              />
              <NavButton
                to="/about"
                icon={<FaUserAlt />}
                label="About Me"
                onClick={() => handleNavClick('/about')}
              />
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
          onClick={toggleMenu}
        >
          {isMenuVisible ? <FaChevronLeft /> : <FaChevronRight />}
        </div>
      </motion.div>

      {/* Modal for Notifications */}
      <AnimatePresence>
        {isModalVisible && (
          <motion.div
            className="fixed inset-0 bg-slate-900 bg-opacity-75 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="relative bg-slate-900 text-white p-8 rounded-lg shadow-lg max-w-lg w-full">
              {/* Modal Header */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-green-500">
                  Upcoming Event: Tour After Exams
                </h2>
                {/* Close Button */}
                <button
                  onClick={toggleModal}
                  className="text-white hover:text-red-500"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Notification List */}
              <ul className="mt-4 space-y-4">
                <li className="flex items-center space-x-2">
                  <FaMapSigns className="text-green-400" />
                  <span>
                    <strong>Tour Announcement:</strong> After the mid-term
                    exams, an exciting tour is planned!{' '}
                    {/* Notification Dot */}
                    <span className="ml-2 h-3 w-3 bg-red-600 rounded-full inline-block"></span>
                  </span>
                </li>
              </ul>

              {/* Additional Details */}
              <p className="mt-4 text-sm text-gray-400">
                Stay tuned for more details about the upcoming tour.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavButton({ to, icon, label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex items-center justify-center bg-green-700 text-white px-4 py-2 rounded-lg transition duration-300 hover:bg-green-800 w-full cursor-pointer"
    >
      <div className="flex items-center space-x-2">
        {icon}
        <span className="ml-2">{label}</span>
      </div>
    </div>
  );
}

export default Navbar;
