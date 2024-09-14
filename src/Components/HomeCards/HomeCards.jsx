import React from 'react';
import { FaCamera, FaMotorcycle, FaMapMarkerAlt, FaCampground } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Card Data
const cardData = [
  {
    title: "Photography",
    icon: <FaCamera className="text-4xl text-green-500" />,
    description: "I captures stunning moments through his lens during his travels and adventures.",
    image: 'https://shorturl.at/TZnfe', // Example background image for photography
    buttonText: "Explore!"
  },
  {
    title: "Biking",
    icon: <FaMotorcycle className="text-4xl text-green-500" />,
    description: "As an avid biker, I loves to explore new terrains on his motorcycle.",
    image: 'https://shorturl.at/8ddCD', // Example background image for biking
    buttonText: "Explore!"
  },
  {
    title: "Travel",
    icon: <FaMapMarkerAlt className="text-4xl text-green-500" />,
    description: "I's travels take him to popular destinations, where I experiences unique cultures.",
    image: 'https://shorturl.at/RcI2A', // Example background image for travel
    buttonText: "Explore!"
  },
  {
    title: "Camping",
    icon: <FaCampground className="text-4xl text-green-500" />,
    description: "I enjoys camping, spending peaceful nights under the stars, and connecting with nature.",
    image: 'https://shorturl.at/ZVX0k', // Example background image for camping
    buttonText: "Explore!"
  }
];

// Framer Motion variants for card animations
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function HomeCards() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }} // Delay animation for each card
    >
      {cardData.map((card, index) => (
        <motion.div
          key={index}
          className="relative rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px',
            width: '100%',
          }}
          variants={cardVariants}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            {/* Icon */}
            <div className="absolute top-4 left-4">
              {card.icon}
            </div>

            {/* Title and Description */}
            <h2 className="text-2xl font-bold text-green-500 mb-2">{card.title}</h2>
            <p className="text-gray-300 mb-4">{card.description}</p>

            {/* Uiverse Styled Button */}
            <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
              {card.buttonText}
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">{card.buttonText}</span>
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HomeCards;
