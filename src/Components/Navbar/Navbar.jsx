import React, { useState, useEffect } from 'react';
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
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { GiSkullShield } from "react-icons/gi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isKeyModalVisible, setIsKeyModalVisible] = useState(false);
  const [hasNotification, setHasNotification] = useState(true); 
  const [inputKey, setInputKey] = useState('');
  const [keyError, setKeyError] = useState('');
  const [showKey, setShowKey] = useState(false); // State for showing/hiding key input
  const navigate = useNavigate();
  const location = useLocation();

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

  const toggleKeyModal = () => {
    setIsKeyModalVisible(!isKeyModalVisible);
  };

  const handleKeySubmit = (e) => {
    e.preventDefault();
    const correctKey = '#nandy6149A';
    if (inputKey === correctKey) {
      navigate('/darkmode');
      setIsKeyModalVisible(false);
    } else {
      setKeyError('Invalid key. Please try again.');
    }
  };

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
                onClick={toggleModal} 
              />
              <NavButton
                to="/aboutme"
                icon={<FaUserAlt />}
                label="About Me"
                onClick={() => handleNavClick('/aboutme')}
              />
              <NavButton
                icon={<GiSkullShield />}
                label="Nandy Dark"
                onClick={toggleKeyModal}
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
                    <strong>Tour Announcement:</strong> On 6th October
                    the journey will be start at 10:20 PM Updated on : 10/4/2024{' '}
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

      {/* Modal for Key Input */}
      <AnimatePresence>
        {isKeyModalVisible && (
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
                  Enter Key to Access Nandy Dark Mode
                </h2>
                {/* Close Button */}
                <button
                  onClick={toggleKeyModal}
                  className="text-white hover:text-red-500"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Key Input Form */}
              <form onSubmit={handleKeySubmit} className="mt-4">
                <label className="block text-sm">
                  <span className="font-semibold">Access Key:</span>
                  <div className="relative">
                    <input
                      type={showKey ? 'text' : 'password'}
                      value={inputKey}
                      onChange={(e) => setInputKey(e.target.value)}
                      className="mt-1 block w-full bg-gray-800 text-white border border-gray-600 rounded py-2 px-3 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowKey(!showKey)}
                      className="absolute inset-y-0 right-0 flex items-center pr-3"
                    >
                      {showKey ? (
                        <AiFillEyeInvisible className="text-gray-400" />
                      ) : (
                        <AiFillEye className="text-gray-400" />
                      )}
                    </button>
                  </div>
                </label>
                {keyError && <p className="text-red-500 mt-2">{keyError}</p>}
                <button
                  type="submit"
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
                >
                  Submit
                </button>
              </form>
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
