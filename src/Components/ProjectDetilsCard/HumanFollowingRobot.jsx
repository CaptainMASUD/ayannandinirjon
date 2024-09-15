import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import humanfollowingrobotproject from "../../Images/Project/humanfollowinrobot.jpg";
import { FaRobot, FaTools, FaCode, FaCamera, FaBatteryHalf, FaMicrochip } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Ayan Nandy Nirjan',
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/454467903_3701996050042630_3647676458570200956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEugYkhPJNPIYbw-MQgubWdzwNOr6LzSOXPA06vovNI5TyJdCCZ2c3OBKL_Tk_i2l1hvnF2g4XZsRWLmRJtrAyT&_nc_ohc=ODLBWZ0jXDUQ7kNvgFlrpS7&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AH5zw_TiTF0gIguu-mWN6mT&oh=00_AYBm44xKeHQJcVhjHBxuweYYcwKNV7j1Yvx5ZOgUH794_A&oe=66ECE70F', 
    contribution: 'Assistance and contributions',
  },
  {
    name: 'Asif Arafat Himel',
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/426341066_3934295476841314_5855161877057966771_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeG_8H131BFC0t76Zm0MsBQcj_W1FQXK8TiP9bUVBcrxOKpbXU9BGOAJc3AcKxhbakUQ-8HD-4UsaC3LB5KZwXIO&_nc_ohc=owmbAjMVHQAQ7kNvgFHOcGg&_nc_ht=scontent.fdac41-1.fna&_nc_gid=Ad2EvywkFpKeA-1fwdCAMn4&oh=00_AYCVs7MO_3ow_5o5_EzB7LzRLhRiCkX5XlCqtIKIHhi4LA&oe=66ECD3CA',
    contribution: 'Assistance and contributions',
  },
  {
    name: 'EmonEmam Ul Haque Emon',
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/455040393_2216365248749855_7984605245661551834_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGPit3bBbNZaqyF6oSsWx-Bs5X2qSIxVQGzlfapIjFVAeeIKJ1QBnTDoF26GxqPCPkK1-iUuruah_ljea-6Dn_C&_nc_ohc=aS7UIXFy704Q7kNvgG61dor&_nc_ht=scontent.fdac41-1.fna&_nc_gid=A1y_BfjHSnb6kDdGjk9fn-6&oh=00_AYBkTlA_V88BpQp97NKYn5FRo7t2jTXlQQB-3rfIwL1XLQ&oe=66ECDF0D',
    contribution: 'Handled Arduino coding and assembly for the project and contributions.',
  },
  {
    name: 'Masudul ALam',
    image: 'https://avatars.githubusercontent.com/u/108082819?v=4',
    contribution: 'Assistance and contributions',
  }
];



const HumanFollowingRobot = () => {
  return (
    <div className="container mx-auto p-4 lg:p-8">
      {/* Project Image */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src={humanfollowingrobotproject} 
          alt="Human Following Robot" 
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mx-auto"
        />
      </motion.div>

      {/* Project Overview */}
      <motion.section
        className="border border-green-500 p-6 rounded-lg shadow-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-semibold text-green-600 mb-4">Human Following Robot</h1>
        <p className="text-gray-200 mb-4">
          The Human Following Robot project involved creating a robot capable of following a human target using Arduino technology. The robot utilizes various sensors and algorithms to track and follow the user effectively.
        </p>
        <p className="text-gray-200 mb-4">
          <strong>Project Objectives:</strong> 
          <ul className="list-disc list-inside ml-4 text-gray-200">
            <li>Develop a robot that can autonomously follow a person.</li>
            <li>Integrate sensors for real-time tracking and navigation.</li>
            <li>Create an efficient algorithm for following behavior.</li>
          </ul>
        </p>
      </motion.section>

      {/* Technologies Used */}
      <motion.section
        className="border border-green-500 p-6 rounded-lg shadow-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-green-600 mb-4">Technologies Used</h2>
        <ul className="list-disc list-inside ml-4 text-gray-200">
          <li><FaMicrochip className="inline-block mr-2 text-green-500"/> Arduino Microcontroller</li>
          <li><FaCamera className="inline-block mr-2 text-green-500"/> Ultrasonic Sensors</li>
          <li><FaBatteryHalf className="inline-block mr-2 text-green-500"/> Infrared Sensors</li>
          <li><FaTools className="inline-block mr-2 text-green-500"/> Motor Drivers</li>
        </ul>
      </motion.section>

      {/* Notable Features */}
      <motion.section
        className="border border-green-500 p-6 rounded-lg shadow-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-green-600 mb-4">Notable Features</h2>
        <ul className="list-disc list-inside ml-4 text-gray-200">
          <li><FaRobot className="inline-block mr-2 text-green-500"/> Real-time obstacle avoidance</li>
          <li><FaCode className="inline-block mr-2 text-green-500"/> Stable tracking with adaptive speed control</li>
          <li><FaTools className="inline-block mr-2 text-green-500"/> User-friendly interface for calibration</li>
        </ul>
      </motion.section>

      {/* Team Members */}
      <motion.section
        className="border border-green-500 p-6 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-xl font-semibold text-center text-green-600 mb-4">Team Members</h2>
        <ul className="flex flex-wrap -m-2">
          {teamMembers.map(member => (
            <motion.li
              key={member.name}
              className="w-full sm:w-1/2 md:w-1/4 p-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="p-4 rounded-lg text-gray-200">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-green-500 mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-200 mb-2 text-center">{member.name}</h3>
                <p className="text-sm text-green-500 text-center mt-1">{member.contribution}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
};

export default HumanFollowingRobot;
