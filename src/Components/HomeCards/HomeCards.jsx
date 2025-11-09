import React from 'react';
import { FaCar, FaMapMarkerAlt, FaCode, FaPuzzlePiece, FaUtensils, FaCamera } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Card Data (royalty-free images from Unsplash)
const cardData = [
  {
    title: "Driving",
    icon: <FaCar className="text-4xl text-green-500" />,
    description: "I enjoy the focus and freedom of driving—long highway cruises and precise city navigation.",
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop',
    buttonText: "Explore!"
  },
  {
    title: "Travel",
    icon: <FaMapMarkerAlt className="text-4xl text-green-500" />,
    description: "I love discovering new places and cultures—every trip brings fresh stories and perspectives.",
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    buttonText: "Explore!"
  },
  {
    title: "Programming",
    icon: <FaCode className="text-4xl text-green-500" />,
    description: "I build things with code—crafting clean, efficient solutions from frontend to backend.",
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    buttonText: "Explore!"
  },
  {
    title: "Problem Solving",
    icon: <FaPuzzlePiece className="text-4xl text-green-500" />,
    description: "I enjoy breaking down tough challenges and assembling elegant, practical answers.",
    image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop',
    buttonText: "Explore!"
  },
  {
    title: "Exploring New Foods",
    icon: <FaUtensils className="text-4xl text-green-500" />,
    description: "From street snacks to tasting menus, I’m always hunting for new flavors and traditions.",
    image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1600&auto=format&fit=crop',
    buttonText: "Explore!"
  },
  {
    title: "Photography", // added card
    icon: <FaCamera className="text-4xl text-green-500" />,
    description: "I love capturing moments and telling stories through images and light.",
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1600&auto=format&fit=crop',
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.2 }}
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
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
            {/* Icon */}
            <div className="absolute top-4 left-4">
              {card.icon}
            </div>

            {/* Title and Description */}
            <h2 className="text-2xl font-bold text-green-500 mb-2">{card.title}</h2>
            <p className="text-gray-200 mb-4">{card.description}</p>

            {/* Fancy Button */}
            <button className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer z-10 group">
              {card.buttonText}
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"></span>
              <span className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"></span>
              <span className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
                {card.buttonText}
              </span>
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default HomeCards;
