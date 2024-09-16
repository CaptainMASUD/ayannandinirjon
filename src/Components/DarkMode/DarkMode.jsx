import React, { useState, useEffect } from 'react';
import { GiSkullShield, GiFireShield } from "react-icons/gi";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaLock, FaMicrochip, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { DiMysql } from "react-icons/di";
import { TbShieldQuestion } from "react-icons/tb";
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { GrMysql } from "react-icons/gr";

function DarkMode() {
  const [loading, setLoading] = useState(true);
  const [statusIndex, setStatusIndex] = useState(0);
  const [option, setOption] = useState('fall2024');
  const [dots, setDots] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const navigate = useNavigate();

  const options = ['fall2024', 'myskills'];
  
  const handleHtmlClick = () => {
    navigate('/html');
  };

  const handleCssClick = () => {
    navigate('/css');
  };

  const statuses = [
    'Initializing Shield mode',
    'Getting things ready',
    'Checking Browser security',
    'Shield Activated!',
    'Nandy Safe mode is ON',
    'Welcome BOSS!'
  ];

  useEffect(() => {
    // Check sessionStorage to skip animation if it was already shown
    const isAnimationSkipped = sessionStorage.getItem('animationSkipped');

    if (!isAnimationSkipped) {
      if (statusIndex < statuses.length) {
        const duration = statusIndex === 4 ? 3000 : 3000;
        const timer = setTimeout(() => {
          setStatusIndex((prevIndex) => prevIndex + 1);
        }, duration);
        return () => clearTimeout(timer);
      } else {
        setLoading(false);
        sessionStorage.setItem('animationSkipped', 'true'); // Set flag to skip animation in future
      }
    } else {
      // Skip loading animation if flag is set
      setLoading(false);
    }
  }, [statusIndex]);

  useEffect(() => {
    if (statusIndex < 5) {
      const dotTimer = setInterval(() => {
        setDots((prev) => {
          if (prev === '') return '.';
          if (prev === '.') return '..';
          if (prev === '..') return '...';
          return '';
        });
      }, 500);

      return () => clearInterval(dotTimer);
    } else {
      setDots('');
    }
  }, [statusIndex]);

  const handleOptionChange = (value) => {
    setOption(value);
    setIsDropdownOpen(false); // Close dropdown after selection
    setHighlightedIndex(-1); // Reset the highlighted index
  };

  const handleKeyDown = (e) => {
    if (isDropdownOpen) {
      if (e.key === 'ArrowDown') {
        // Navigate down
        setHighlightedIndex((prev) => (prev < options.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        // Navigate up
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && highlightedIndex >= 0) {
        // Select the highlighted option on Enter
        handleOptionChange(options[highlightedIndex]);
      }
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDropdownOpen, highlightedIndex]);

  const highlightWord = (text) => {
    if (!text) return text;

    const words = text.split(' ');
    if (words.length > 1) {
      return (
        <span>
          {words.slice(0, words.length - 1).join(' ')}{' '}
          <span className="text-green-400 font-bold">{words[words.length - 1]}</span>
        </span>
      );
    }
    return text;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 flex flex-col items-center justify-center p-5">
      {loading ? (
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity }}
          >
            <GiSkullShield className="text-9xl text-gray-500" />
          </motion.div>

          <div className="text-center text-xl">
            {statusIndex < statuses.length && (
              <div className="flex items-center justify-center space-x-2">
                {statusIndex === 2 && (
                  <TbShieldQuestion className="text-green-400 text-2xl" />
                )}
                {statusIndex === 3 && (
                  <GiFireShield className="text-green-400 text-2xl" />
                )}
                {statusIndex === 5 && (
                  <FaLock className="text-green-400" />
                )}
                <span>{highlightWord(statuses[statusIndex])}{dots}</span>
              </div>
            )}
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-2xl"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <GiSkullShield className="inline text-5xl text-green-400" />
            <h1 className="text-4xl font-bold mt-2">Nandy Dark Mode</h1>
          </motion.div>

          {/* Details */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-center text-gray-400"
          >
            All the codes will appear here.
          </motion.p>

          {/* Option Selector with Animated Dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-end mt-6"
          >
            {/* Custom Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2 bg-gray-800 border border-gray-600 rounded text-gray-200 flex items-center"
              >
                {option === 'fall2024' ? 'Fall 2024' : 'My Skills'}
                <motion.div
                  className="ml-2"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                >
                  {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                </motion.div>
              </button>

              {/* Animate the dropdown options */}
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-600 rounded shadow-lg z-10"
                  >
                    {options.map((opt, idx) => (
                      <div
                        key={opt}
                        className={`p-2 cursor-pointer ${highlightedIndex === idx ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
                        onClick={() => handleOptionChange(opt)}
                      >
                        {opt === 'fall2024' ? 'Fall 2024' : 'My Skills'}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Option Output */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {option === 'fall2024' ? (
              <>
                <motion.button
                  whileTap={{ rotate: -10 }}
                  onClick={() => navigate('/arduino')}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
                >
                  <FaMicrochip /> <span>Arduino</span>
                </motion.button>
                <motion.button
                  whileTap={{ rotate: -10 }}
                  onClick={() => navigate('/mysql')}
                  className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
                >
                  <GrMysql className='h-5 w-5'/> <span>MySQL</span>
                </motion.button>
              </>
            ) : (
              <>
                <motion.button
                  onClick={handleHtmlClick}
                  whileTap={{ rotate: -10 }}
                  className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
                >
                  <FaHtml5 /> <span>HTML</span>
                </motion.button>
                <motion.button
                  onClick={handleCssClick}
                  whileTap={{ rotate: -10 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
                >
                  <FaCss3Alt /> <span>CSS</span>
                </motion.button>
                <motion.button
                  whileTap={{ rotate: -10 }}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
                >
                  <FaJsSquare /> <span>JavaScript</span>
                </motion.button>
                <motion.button
                  whileTap={{ rotate: -10 }}
                  className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded flex items-center justify-center space-x-2"
                >
                  <FaReact /> <span>React</span>
                </motion.button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default DarkMode;
