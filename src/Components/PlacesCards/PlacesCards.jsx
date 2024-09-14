import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import { FaStar } from 'react-icons/fa';

const places = [
  {
    name: 'Sajek Valley',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqesfEzK_hD90rmBK4nCKsxVZzZroHi6HBxw&s',
    rating: '4.5/5',
    description: 'Sajek Valley, the queen of hills, offers breathtaking views of mountains, clouds, and sunset.',
    extraDetails: 'Known for hiking trails and hilltop resorts, Sajek is a great spot for nature lovers.'
  },
  {
    name: 'Sylhet',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/fd/37/e9/bisnakandi.jpg?w=500&h=400&s=1',
    rating: '4.7/5',
    description: 'Sylhet, famous for tea gardens and waterfalls, is a beautiful destination in Bangladesh.',
    extraDetails: 'Explore Jaflong, Ratargul Swamp Forest, and Bisnakandi while in Sylhet.'
  },
  {
    name: 'Kuakata',
    imageUrl: 'https://www.travelmate.com.bd/wp-content/uploads/2020/08/kuakata-patuakhai.jpg.webp',
    rating: '4.3/5',
    description: 'Kuakata is known as the "Daughter of the Sea" for its unique view of both sunrise and sunset.',
    extraDetails: 'Kuakata is famous for its long sandy beach and colorful festivals like Rakhine New Year.'
  },
  {
    name: 'Bandarban',
    imageUrl: 'https://t4.ftcdn.net/jpg/05/17/23/99/360_F_517239905_MzDgpNvaS32i0XXmK4d1pnvWgmin4oAJ.jpg',
    rating: '4.6/5',
    description: 'Bandarban, a serene and beautiful hill district, is home to amazing landscapes and tribal culture.',
    extraDetails: 'Key attractions include Nilgiri Hills, Boga Lake, and the Golden Temple.'
  },
  {
    name: 'Cox\'s Bazar',
    imageUrl: 'https://cdnfl01.viewbug.com/media/mediafiles/2016/05/21/66150450_large.jpg',
    rating: '4.8/5',
    description: 'Cox\'s Bazar is known for its long sandy beach and is a popular tourist destination in Bangladesh.',
    extraDetails: 'Enjoy beach activities, surfing, and the vibrant local culture in Cox\'s Bazar.'
  },
  {
    name: 'Saint Martin',
    imageUrl: 'https://ttg.com.bd/uploads/tours/plans/206_75532b26ebee82e226cfa496614a549bjpg.jpg',
    rating: '4.9/5',
    description: 'Saint Martin is the southernmost island of Bangladesh, known for its stunning coral reefs and clear waters.',
    extraDetails: 'Ideal for snorkeling, swimming, and relaxing on the pristine beaches.'
  },
  {
    name: 'Ahsan Manzil',
    imageUrl: 'https://nijhoom.b-cdn.net/wp-content/uploads/2021/03/ahsan-manzil-pink-palace-front-768-o.jpg',
    rating: '4.6/5',
    description: 'Ahsan Manzil, also known as the Pink Palace, is a historic building and museum in Dhaka.',
    extraDetails: 'Explore the rich history and architecture of this iconic landmark.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05 }
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.05 }
};

const seeMoreLessButtonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  hover: { scale: 1.1 }
};

const Button = ({ onClick }) => (
  <motion.button
    className="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group"
    onClick={onClick}
    variants={buttonVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    transition={{ duration: 0.3 }}
  >
    Explore
    <span
      className="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
    ></span>
    <span
      className="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
    ></span>
    <span
      className="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
    ></span>
    <span
      className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >
      Explore!
    </span>
  </motion.button>
);

function PlacesCards() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const openModal = (place) => setSelectedPlace(place);
  const closeModal = () => setSelectedPlace(null);
  const toggleShowAll = () => setShowAll(!showAll);

  const displayedPlaces = showAll ? places : places.slice(0, 4);

  return (
    <motion.div
      className="p-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold text-center text-green-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Visited Destinations
      </motion.h1>
      <div className="flex flex-wrap justify-around">
        {displayedPlaces.map((place, index) => (
          <motion.div
            key={index}
            className="relative w-64 h-80 lg:w-80 lg:h-96 rounded-md overflow-hidden m-4 bg-cover bg-center"
            style={{ backgroundImage: `url(${place.imageUrl})` }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 transition-all duration-500 hover:bg-opacity-80">
              <h2 className="text-green-500 font-bold text-xl mb-2">{place.name}</h2>
              <p className="text-white mb-2">{place.description}</p>
              <div className="flex justify-between items-center">
                <span className="flex items-center text-green-400 font-semibold">
                  <FaStar className="mr-1" /> {place.rating}
                </span>
                <Button onClick={() => openModal(place)} />
              </div>
              <div className="hidden group-hover:block mt-2 text-white text-sm transition-all duration-300">
                {place.extraDetails}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="flex justify-center mt-4"
        variants={seeMoreLessButtonVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        {places.length > 4 && (
         /* From Uiverse.io by Javierrocadev */ 
            <button onClick={toggleShowAll} className="relative group cursor-pointer text-sky-50  overflow-hidden h-10 w-56 rounded-md bg-green-800 p-2 flex justify-center items-center font-extrabold">

            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-900"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-800"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-700"></div>
            <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-green-600"></div>
            <p className="z-10">See more</p>
            </button>


        )}
      </motion.div>

      {selectedPlace && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-slate-900 text-gray-400 rounded-lg p-8 relative w-16/12 md:w-1/2"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <IoMdClose
              className="absolute top-4 right-4 text-green-500 cursor-pointer text-2xl"
              onClick={closeModal}
            />
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-green-500">{selectedPlace.name.charAt(0)}</span>
              <span className="text-gray-300">{selectedPlace.name.slice(1)}</span>
            </h2>
            <img src={selectedPlace.imageUrl} alt={selectedPlace.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="mb-2">{selectedPlace.description}</p>
            <p className="text-green-500 font-bold mb-2 flex items-center">
              <FaStar className="mr-1" /> Rating: {selectedPlace.rating}
            </p>
            <p>{selectedPlace.extraDetails}</p>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default PlacesCards;
