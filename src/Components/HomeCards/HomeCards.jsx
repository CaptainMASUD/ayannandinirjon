import React from 'react';
import { FaCamera, FaMotorcycle, FaMapMarkerAlt, FaCampground } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Card Data
const cardData = [
  {
    title: "Photography",
    icon: <FaCamera className="text-4xl text-green-500" />,
    description: "I captures stunning moments through his lens during his travels and adventures.",
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/422899703_3572204596355110_2108986116195153240_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeEJu9wlg1p1zUkyGv4xkzQ52m9wXSZyKRHab3BdJnIpEbrWzP9_B_IboKd9BrIofCoYbfH2plI01nWysoBaBPpf&_nc_ohc=-lYHB4GFV1UQ7kNvgFz2Ayx&_nc_ht=scontent.fdac41-1.fna&_nc_gid=Aq1QHEucTy3JHGx_MAaPxIY&oh=00_AYAdnFsOb_4ztnl0ApVnEFdCPbgsjAwPTE3CyvvullJYuw&oe=6705FAC3', // Example background image for photography
    buttonText: "Explore!"
  },
  {
    title: "Biking",
    icon: <FaMotorcycle className="text-4xl text-green-500" />,
    description: "As an avid biker, I loves to explore new terrains on his motorcycle.",
    image: 'https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/458292315_3726654064243495_2528226091234002174_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHYSBCrhpfMDvkAA6mtOxQfEUWVkLFQ9FYRRZWQsVD0Vm29M0c9dMW8SJzj55OLuxjJDKa5Kn0IFyhGqfDH_rtU&_nc_ohc=iJCCnjnVJSIQ7kNvgGoTTuZ&_nc_ht=scontent.fdac41-2.fna&_nc_gid=A62l_SWxoiRvJA1I7Yw0zlF&oh=00_AYBYDvsM6imnNOhmzHjNnhL3RcW1EGjg40gGx5ViPMgS-g&oe=6705E2CB', // Example background image for biking
    buttonText: "Explore!"
  },
  {
    title: "Travel",
    icon: <FaMapMarkerAlt className="text-4xl text-green-500" />,
    description: "I's travels take him to popular destinations, where I experiences unique cultures.",
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/351379485_1682990282161871_1591719328914145302_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHozwFEnnvLrcRopreVkVG-CsxZEXMOUtwKzFkRcw5S3PoeO_5exZc0SjdcQdRkNsUrlkH0X0ljeBAjMFTQs4Jv&_nc_ohc=R3hkCiQ-1KcQ7kNvgFiWCXO&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AyDv4IW0b_41k7Jz3qW5pkk&oh=00_AYBNViOYQaZQjycQzzHSrrBFKwgDDu8dORsf2qqtX1Ldlw&oe=6705F731', // Example background image for travel
    buttonText: "Explore!"
  },
  {
    title: "Camping",
    icon: <FaCampground className="text-4xl text-green-500" />,
    description: "I enjoys camping, spending peaceful nights under the stars, and connecting with nature.",
    image: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/404677727_3529629277279309_3878507928470223803_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGqGFJW_hP4meQ5rc4F_d2UN7a2ZFHxKdY3trZkUfEp1q7YypNgehgv8a2eqZFPkhhVPc6rjP-SL7HtC7IX_m53&_nc_ohc=Y9Ij-8YNeQoQ7kNvgFwGJ-w&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AZxixvq1yggVilyYllOWVFE&oh=00_AYDvhNBBbY9uKmEBavh-S5qfN0SiPOxGoy9HzZjq1xQUBQ&oe=67061320', // Example background image for camping
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
