import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaCommentDots, FaPaperPlane, FaPhoneAlt, FaInfoCircle, FaChevronDown, FaChevronUp, FaUser } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function ContactMe() {
  const [showDetails, setShowDetails] = useState(false);

  const detailsVariants = {
    hidden: { opacity: 0, y: 100, height: 0, overflow: 'hidden' },
    visible: { opacity: 1, y: 0, height: 'auto' },
    exit: { opacity: 0, y: 100, height: 0 },
  };

  return (
    <div className="flex justify-center p-5 items-center min-h-screen bg-green-900 md:bg-green-900">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row w-full max-w-5xl bg-slate-950 rounded-lg shadow-md"
      >
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/3 p-6 bg-green-600 text-white rounded-t-lg lg:rounded-l-lg lg:rounded-t-none"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center lg:justify-center"
          >
            {/* Toggle Button for mobile only */}
            <div className="flex justify-between w-full lg:hidden">
              <h2 className="text-xl font-bold flex"><FaUser className='mt-1 mr-5'/> Ayan Nandi Nirjon </h2>
              <button
                className="focus:outline-none"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? (
                  <FaChevronDown className="text-2xl" />
                ) : (
                  <FaChevronUp className="text-2xl" />
                )}
              </button>
            </div>

            {/* Info Content visible on larger screens */}
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:w-full lg:mt-4">
              {/* Centered User Icon and Name */}
              <div className="flex flex-col items-center space-y-4">
                <FaUserAlt className="text-4xl" />
                <h2 className="text-2xl font-bold text-center">Ayan Nandi Nirjon</h2>
              </div>

              {/* Centered Description */}
              <p className="text-lg mt-2 text-center">Traveler, Photographer, Biker</p>

              {/* Left-aligned Email and Phone */}
              <div className="flex flex-col justify-start items-start mt-6 w-full text-sm">
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <span>ayan.nirjon@example.com</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <FaPhoneAlt />
                  <span>+123 456 7890</span>
                </div>
              </div>

              {/* Centered List */}
              <div className="mt-3">
                <p>Feel free to send me an email! You can reach out for:</p>
                <ul className="list-disc ml-4">
                  <li>Travel recommendations</li>
                  <li>Photography inquiries</li>
                  <li>Collaboration on projects</li>
                </ul>
              </div>

              <FaInfoCircle className="mt-6 text-2xl" />
            </div>

            {/* AnimatePresence for mobile details */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  key="details"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={detailsVariants}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="mt-4 text-sm space-y-2 lg:hidden"
                >
                  <p className="mt-2">Traveler, Photographer, Biker</p>
                  <div className="flex items-center gap-2">
                    <FaEnvelope />
                    <span>ayan.nirjon@example.com</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <FaPhoneAlt />
                    <span>+123 456 7890</span>
                  </div>
                  <p className="mt-4">
                    Feel free to send me an email! You can reach out for:
                  </p>
                  <ul className="list-disc ml-4">
                    <li>Travel recommendations</li>
                    <li>Photography inquiries</li>
                    <li>Collaboration on projects</li>
                  </ul>
                  <FaInfoCircle className="mt-6 text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/3 p-6 lg:pl-12 lg:pr-12" // Add extra padding for larger screens
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-2xl font-bold text-green-600 text-center mb-6"
          >
            Contact Me
          </motion.h2>
          <form className="space-y-6">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <label className="block text-green-500">Name</label>
              <div className="relative">
                <FaUserAlt className="absolute top-1/2 left-3 transform -translate-y-1/2 text-green-500" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 mt-1 border bg-gray-200 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter your name"
                  required
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              <label className="block text-green-500">Email</label>
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-green-500" />
                <input
                  type="email"
                  className="w-full pl-10 pr-4 py-2 bg-gray-200 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative"
            >
              <label className="block text-green-500">Message</label>
              <div className="relative">
                <FaCommentDots className="absolute top-3 left-3 text-green-500" />
                <textarea
                  className="w-full pl-10 pr-4 py-2 mt-1 bg-gray-200 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                  rows="4"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-center"
            >
              <button
                type="submit"
                className="flex justify-center items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300"
              >
                <FaPaperPlane />
                Sent 
              </button>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ContactMe;
