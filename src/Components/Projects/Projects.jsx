import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaBootstrap, FaCss3Alt, FaPython, FaMicrochip, FaRegLightbulb } from 'react-icons/fa';
import { SiArduino } from 'react-icons/si';
import traveltribe from '../../Images/Project/trabeltribe.png';
import pythonproject from '../../Images/Project/pythonproject.png';
import humanfollowingRobot from '../../Images/Project/humanfollowinrobot.jpg';

function Projects() {
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

  return (
    <motion.div
      className="w-full h-auto py-16 bg-gradient-to-b from-gray-900 to-black"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.h1
        className="text-green-500 text-3xl font-bold text-center mb-16 tracking-wide"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        My Featured Projects
      </motion.h1>

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Travel Tribe Project Card */}
        <motion.div
          className="border border-green-500 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
          variants={itemVariants}
        >
          <div className="relative overflow-hidden rounded-md">
            <img
              src={traveltribe}
              alt="Travel Tribe"
              className="w-full h-40 object-cover rounded-md transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 transition-opacity duration-300 hover:opacity-50"></div>

            {/* Technology Stack Buttons */}
            <div className="absolute bottom-4 left-4 flex space-x-2">
              <button className="border border-green-500 text-green-500 p-2 rounded-md hover:bg-green-500 hover:text-black">
                <FaReact />
              </button>
              <button className="border border-green-500 text-green-500 p-2 rounded-md hover:bg-green-500 hover:text-black">
                <FaBootstrap />
              </button>
              <button className="border border-green-500 text-green-500 p-2 rounded-md hover:bg-green-500 hover:text-black">
                <FaCss3Alt />
              </button>
            </div>
          </div>
          <h2 className="text-white text-lg font-bold mt-4 mb-2">Travel Tribe Project</h2>
          <p className="text-gray-400 text-sm">
            A web platform for travelers to connect and explore new destinations together.
          </p>

          {/* Custom View Project Button */}
          <div className="flex justify-center mt-4">
            <button
              className="relative group cursor-pointer text-sky-50 overflow-hidden h-10 w-56 rounded-md bg-green-800 p-2 flex justify-center items-center font-extrabold"
            >
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-900"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-800"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-700"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-600"></div>
              <p className="z-10">View Project</p>
            </button>
          </div>
        </motion.div>

        {/* Python Project Card */}
        <motion.div
          className="border border-green-500 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
          variants={itemVariants}
        >
          <div className="relative overflow-hidden rounded-md">
            <img
              src={pythonproject}
              alt="Python Project"
              className="w-full h-40 object-cover rounded-md transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 transition-opacity duration-300 hover:opacity-50"></div>

            {/* Technology Stack Buttons */}
            <div className="absolute bottom-4 left-4 flex space-x-2">
              <button className="border border-green-500 text-green-500 p-2 rounded-md hover:bg-green-500 hover:text-black">
                <FaPython />
              </button>
            </div>
          </div>
          <h2 className="text-white text-lg font-bold mt-4 mb-2">Python Automation Project</h2>
          <p className="text-gray-400 text-sm">
            A Python project focusing on automation and data analysis to streamline processes.
          </p>

          {/* Custom View Project Button */}
          <div className="flex justify-center mt-4">
            <button
              className="relative group cursor-pointer text-sky-50 overflow-hidden h-10 w-56 rounded-md bg-green-800 p-2 flex justify-center items-center font-extrabold"
            >
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-900"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-800"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-700"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-600"></div>
              <p className="z-10">View Project</p>
            </button>
          </div>
        </motion.div>

        {/* Human Following Robot Project Card */}
        <motion.div
          className="border border-green-500 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
          variants={itemVariants}
        >
          <div className="relative overflow-hidden rounded-md">
            <img
              src={humanfollowingRobot}
              alt="Human Following Robot"
              className="w-full h-40 object-cover rounded-md transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 transition-opacity duration-300 hover:opacity-50"></div>

            {/* Technology Stack Buttons */}
            <div className="absolute bottom-4 left-4 flex space-x-2">
              <button className="border border-green-500 text-green-500 p-2 rounded-md hover:bg-green-500 hover:text-black">
                <SiArduino />
              </button>
              <button className="border border-green-500 text-green-500 p-2 rounded-md hover:bg-green-500 hover:text-black">
                <FaMicrochip />
              </button>
              <button className="border border-green-500 text-green-500 p-2 rounded-md hover:bg-green-500 hover:text-black">
                <FaRegLightbulb />
              </button>
            </div>
          </div>
          <h2 className="text-white text-lg font-bold mt-4 mb-2">Human Following Robot</h2>
          <p className="text-gray-400 text-sm">
            A robotics project building a robot that can autonomously follow humans.
          </p>

          {/* Custom View Project Button */}
          <div className="flex justify-center mt-4">
            <button
              className="relative group cursor-pointer text-sky-50 overflow-hidden h-10 w-56 rounded-md bg-green-800 p-2 flex justify-center items-center font-extrabold"
            >
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-900"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-800"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-700"></div>
              <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-600"></div>
              <p className="z-10">View Project</p>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
