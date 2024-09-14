import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaGoogle } from 'react-icons/fa';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import pythonprojectImage from '../../Images/Project/pythonproject.png';

// Define section variants for animations
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

function PythonProject() {
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
          <motion.img
            src={pythonprojectImage}
            alt="Python Project"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            variants={sectionVariants}
          />
        </div>
      </motion.div>

      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1 className="text-4xl font-bold text-green-500 mb-4">Python Project</h1>
        <p className="text-lg">
          An advanced Python project developed using Google Colab for robust data analysis and machine learning.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="border border-green-500 p-8 rounded-lg shadow-md mb-12"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        <h2 className="text-2xl font-bold text-green-500 mb-6">Project Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <FaCode className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Code Implementation</h3>
            <p className="text-gray-400">Robust and scalable code written in Python using best practices.</p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <FaGithub className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">GitHub Repository</h3>
            <p className="text-gray-400">Accessible repository for code versioning and collaboration.</p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
          >
            <FaGoogle className="text-green-500 text-4xl mb-4" />
            <h3 className="text-xl font-bold mb-2">Google Colab</h3>
            <p className="text-gray-400">Interactive Python notebooks for real-time code execution and visualization.</p>
          </motion.div>
        </div>
      </motion.div>

 

      {/* Team Section */}
      <motion.div
        className="border border-green-500 p-8 rounded-lg shadow-md"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        <h2 className="text-2xl font-bold text-green-500 mb-6 text-center">Meet our Team</h2>
        <div className="flex flex-col md:flex-row justify-around items-center text-center">
          {/* Ayan Nandy Nirjan */}
          <div className="mb-8 md:mb-0">
            <img
              src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/454467903_3701996050042630_3647676458570200956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEugYkhPJNPIYbw-MQgubWdzwNOr6LzSOXPA06vovNI5TyJdCCZ2c3OBKL_Tk_i2l1hvnF2g4XZsRWLmRJtrAyT&_nc_ohc=ODLBWZ0jXDUQ7kNvgFlrpS7&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ATlfkc3-AjoVz265qcV3qCE&oh=00_AYCauo1eThserTDtmUMlNcxHhm4JLNsyG0COabywgKsRHw&oe=66EB958F"
              alt="Ayan Nandy Nirjan"
              className="w-32 h-32 object-cover ring-4 ring-green-500 rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold mb-2"><span className='text-green-500'>Ayan</span> Nandy Nirjan</h3>
            <p className="text-gray-400">Instructor and R&D expert</p>
            <div className="flex justify-center mt-4">
              <a href="https://facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-green-600 text-2xl mx-2" />
              </a>
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-green-600 text-2xl mx-2" />
              </a>
            </div>
          </div>

          {/* Masudul Alam */}
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/108082819?v=4"
              alt="Masudul Alam"
              className="w-32  ring-4 ring-green-500 h-32 object-cover rounded-full mb-4 mx-auto"
            />
            <h3 className="text-xl font-bold mb-2"><span className='text-green-500'>Masudul</span> Alam</h3>
            <p className="text-gray-400">Full Stack Web Developer</p>
            <div className="flex justify-center mt-4">
              <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-green-700 text-2xl mx-2" />
              </a>
              <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-green-600 text-2xl mx-2" />
              </a>
              <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-green-600 text-2xl mx-2" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PythonProject;
