import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaSuitcaseRolling, FaCarSide, FaUserShield, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { FaCrown } from 'react-icons/fa';
import { RiFileEditFill } from 'react-icons/ri';
import { HiGiftTop } from 'react-icons/hi2';
import { IoCarSport } from 'react-icons/io5';
import traveltribeImage from '../../Images/Project/trabeltribe.png';
import traveltribeImage2 from '../../Images/Project/traveltribe2.png';
import traveltribeImage3 from '../../Images/Project/traveltribe3.png';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const gridVariants = {
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

function TravelTribe() {
  return (
    <div className="w-full h-auto py-16 bg-gradient-to-b from-gray-900 to-black text-white px-6 md:px-12">
      {/* Banner Section */}
      <motion.div
        className="w-full flex justify-center mb-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.img
              src={traveltribeImage}
              alt="Travel Tribe"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              variants={sectionVariants}
            />
            <motion.img
              src={traveltribeImage2}
              alt="Travel Tribe 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              variants={sectionVariants}
            />
            <motion.img
              src={traveltribeImage3}
              alt="Travel Tribe 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              variants={sectionVariants}
            />
          </div>
        </div>
      </motion.div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1 className="text-4xl font-bold text-green-500 mb-4">Travel Tribe</h1>
        <p className="text-lg">
          A premier travel and tourism company providing unparalleled experiences for travelers worldwide.
        </p>
      </motion.div>

      {/* About Team Section */}
      <motion.div
        className="border border-green-500 p-6 rounded-lg shadow-md mb-8"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h2 className="text-2xl font-bold mb-4 text-green-500 text-center">About the Team</h2>
        <div className="flex flex-col md:flex-row justify-around items-center text-center">
          {/* Ayan Nandy Nirjan */}
          <div className="mb-8 md:mb-0">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/454467903_3701996050042630_3647676458570200956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEugYkhPJNPIYbw-MQgubWdzwNOr6LzSOXPA06vovNI5TyJdCCZ2c3OBKL_Tk_i2l1hvnF2g4XZsRWLmRJtrAyT&_nc_ohc=ODLBWZ0jXDUQ7kNvgFlrpS7&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ATlfkc3-AjoVz265qcV3qCE&oh=00_AYCauo1eThserTDtmUMlNcxHhm4JLNsyG0COabywgKsRHw&oe=66EB958F"
              alt="Ayan Nandy Nirjan"
              className="w-32 h-32 object-cover rounded-full mb-4 mx-auto border-4 border-green-500"
            />
            <h3 className="text-xl font-bold mb-2"><span className='text-green-500'>Ayan</span> Nandy Nirjan</h3>
            <p className="text-gray-400">Instructor and R&D expert</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://facebook.com/ayan.nandy" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-600 text-2xl" />
              </a>
              <a href="https://github.com/ayan-nandy" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-600 text-2xl" />
              </a>
            </div>
          </div>

          {/* Masudul Alam */}
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/108082819?v=4"
              alt="Masudul Alam"
              className="w-32 h-32 object-cover rounded-full mb-4 mx-auto border-4 border-green-500"
            />
            <h3 className="text-xl font-bold mb-2"><span className='text-green-500'>Masudul</span> Alam</h3>
            <p className="text-gray-400">Full Stack Web Developer</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="https://facebook.com/masudul.alam" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-600 text-2xl" />
              </a>
              <a href="https://linkedin.com/in/masudul-alam" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-600 text-2xl" />
              </a>
              <a href="https://github.com/masudul-alam" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-gray-600 text-2xl" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <h4 className="text-lg font-semibold text-green-500">Team Vision</h4>
          <p className="text-gray-400 mt-2">
            Delivering a user-centric travel platform that connects adventurers and explores new possibilities with cutting-edge technology.
          </p>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="border border-green-500 p-8 rounded-lg shadow-md mb-12"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        <h2 className="text-2xl font-bold text-green-500 mb-6">Site Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <FaGlobeAmericas className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Destination Booking</h3>
            <p className="text-gray-400">Book your next adventure to any destination around the world.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <FaSuitcaseRolling className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Popular Tour Packages</h3>
            <p className="text-gray-400">Explore the most popular and exciting tour packages we offer.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <IoCarSport className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Vehicle Service</h3>
            <p className="text-gray-400">Enjoy hassle-free transportation with our vehicle service options.</p>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <FaUserShield className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-400">Make payments securely through our encrypted payment systems.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Packages Section */}
      <motion.div
        className="border border-green-500 p-8 rounded-lg shadow-md"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        <h2 className="text-2xl font-bold text-green-500 mb-6">Packages We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Package 1 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <HiGiftTop className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Standard Package</h3>
            <p className="text-gray-400">A simple package for those seeking an affordable experience.</p>
          </motion.div>

          {/* Package 2 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <MdOutlineWorkspacePremium className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Deluxe Package</h3>
            <p className="text-gray-400">A package offering a blend of comfort and luxury.</p>
          </motion.div>

          {/* Package 3 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <FaCrown className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Premium Package</h3>
            <p className="text-gray-400">For travelers looking for the ultimate luxurious experience.</p>
          </motion.div>

          {/* Package 4 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <RiFileEditFill className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Custom Package</h3>
            <p className="text-gray-400">Tailor your travel package according to your specific needs.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default TravelTribe;
