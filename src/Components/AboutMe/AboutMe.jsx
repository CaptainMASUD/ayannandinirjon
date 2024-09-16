import React, { useState } from 'react';
import { FaUniversity, FaMapMarkerAlt, FaFacebook, FaGithub, FaCamera, FaVideo, FaImage, FaMap, FaTimes, FaCode, FaRobot, FaEye, FaLightbulb, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Animation variants for smoother and quicker stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <motion.div
      className="mx-auto px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Banner Image */}
      <motion.div
        className="relative mb-8 rounded-lg overflow-hidden shadow-lg"
        variants={itemVariants}
      >
        <img
          src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/394626852_3511087422466828_8606531106337456889_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeE9hN98w-tVmKkFDAuZfKaKMhRLLTj4kv4yFEstOPiS_g8kq8oGmLroxNpBN3LH3dR_7aOdwlXjSU9_MGVPHIaI&_nc_ohc=-YCPiZSfo9IQ7kNvgFiaTKM&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AXIhR1kj5w4Ho-wkf5ObCgQ&oh=00_AYBXeK9tw3KJctgYPhQktuS1DvxWnza6kbn0rNYatdvKbg&oe=66ECEA13"
          alt="Banner"
          className="w-full h-60 md:h-80 lg:h-96 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent p-4">
          <h1 className="text-white text-4xl font-bold">Ayan Nandy Nirjan</h1>
          <p className="text-white">Bike, Travel, and Nature Lover</p>
        </div>
      </motion.div>

      {/* Profile Image and Details */}
      <motion.div className="flex items-start space-x-4 mb-8" variants={itemVariants}>
        <img
          src="https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/454467903_3701996050042630_3647676458570200956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEugYkhPJNPIYbw-MQgubWdzwNOr6LzSOXPA06vovNI5TyJdCCZ2c3OBKL_Tk_i2l1hvnF2g4XZsRWLmRJtrAyT&_nc_ohc=ODLBWZ0jXDUQ7kNvgFlrpS7&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AFUvdjM_OhgmyFbAf6MANVq&oh=00_AYDx1dT6eQhHOmJqYCG0LyQBNyqLWZ7DOZSgBcaoBnVCeA&oe=66ECE70F"
          alt="Profile"
          className="w-32 h-32 rounded-full shadow-lg border-4 border-green-600"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-300">Ayan Nandy Nirjan</h2>
          <div className="flex items-center space-x-2 mt-2">
            <FaUniversity className="text-green-600" />
            <span className="text-gray-200">Daffodil International University</span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <FaMapMarkerAlt className="text-green-600" />
            <span className="text-gray-200">Mirpur, Dhaka</span>
          </div>
        </div>
      </motion.div>

      {/* About Me Cards */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8" variants={itemVariants}>
        <div className="border border-green-500 text-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Education</h3>
          <p>
            I am pursuing a BSc in Computer Science and Engineering (CSE) at Daffodil International University.
          </p>
        </div>
        <div className="border border-green-500 text-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Interests</h3>
          <p>
            I have a passion for technology and innovation. I enjoy working on diverse projects and learning new skills.
          </p>
        </div>
      </motion.div>

      {/* Vision Cards */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" variants={itemVariants}>
        <div className="border border-green-500 text-gray-100 p-4 rounded-lg shadow-lg flex items-center space-x-4">
          <FaLightbulb className="text-green-600 text-2xl" />
          <div>
            <h3 className="text-lg font-bold">Innovation</h3>
            <p>Striving to bring innovative solutions to real-world problems.</p>
          </div>
        </div>
        <div className="border border-green-500 text-gray-100 p-4 rounded-lg shadow-lg flex items-center space-x-4">
          <FaStar className="text-green-600 text-2xl" />
          <div>
            <h3 className="text-lg font-bold">Excellence</h3>
            <p>Committed to achieving excellence in every project and task.</p>
          </div>
        </div>
        <div className="border border-green-500 text-gray-100 p-4 rounded-lg shadow-lg flex items-center space-x-4">
          <FaEye className="text-green-600 text-2xl" />
          <div>
            <h3 className="text-lg font-bold">Vision</h3>
            <p>Focused on long-term goals and future advancements in technology.</p>
          </div>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div className="flex flex-wrap justify-center gap-4 mt-8" variants={itemVariants}>
        <button
          onClick={() => navigate('/photographyclub')}
          className="flex items-center border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
        >
          <FaCamera className="mr-2" />
          Photography Club
        </button>
        <button
          onClick={() => navigate('/videolibrary')}
          className="flex items-center border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
        >
          <FaVideo className="mr-2" />
          My Videos
        </button>
        <button
          onClick={() => navigate('/gallery')}
          className="flex items-center border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
        >
          <FaImage className="mr-2" />
          My Gallery
        </button>
        <button
          onClick={openModal}
          className="flex items-center border border-green-600 text-green-600 px-6 py-2 rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
        >
          <FaMap className="mr-2" />
          Projects
        </button>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900 bg-opacity-90 flex justify-center items-center z-50">
          <motion.div
            className="bg-slate-900 rounded-lg shadow-lg w-80 p-4 relative"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <FaTimes size={20} />
            </button>
            <h3 className="text-2xl text-gray-200 font-bold mb-4">
              <span className="text-green-600">P</span>rojects
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  navigate('/travelproject');
                  closeModal();
                }}
                className="flex items-center text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg text-left"
              >
                <FaMap className="mr-2" />
                Travel Project
              </button>
              <button
                onClick={() => {
                  navigate('/pythonProject');
                  closeModal();
                }}
                className="flex items-center text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg text-left"
              >
                <FaCode className="mr-2" />
                Python Project
              </button>
              <button
                onClick={() => {
                  navigate('/humanfollowingrobot');
                  closeModal();
                }}
                className="flex items-center text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-lg text-left"
              >
                <FaRobot className="mr-2" />
                Human Following Robot
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default AboutMe;
