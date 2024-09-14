import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Slide data
const slides = [
  {
    url: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/404677727_3529629277279309_3878507928470223803_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeGqGFJW_hP4meQ5rc4F_d2UN7a2ZFHxKdY3trZkUfEp1q7YypNgehgv8a2eqZFPkhhVPc6rjP-SL7HtC7IX_m53&_nc_ohc=vWO-OYRiKqUQ7kNvgGjrEXa&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AUaGzWnhHg-2Se-H_VXHwS7&oh=00_AYBstv987U78oDTQ7PgbpVq5kv9tRaEm8y4ldXbqcxo56g&oe=66E9BAE0',
    title: 'Discover Bangladesh',
    description: 'Explore the beauty of Bangladesh through the lens of a traveler.',
    buttonText: 'Explore Now',
  },
  {
    url: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/394626852_3511087422466828_8606531106337456889_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeE9hN98w-tVmKkFDAuZfKaKMhRLLTj4kv4yFEstOPiS_g8kq8oGmLroxNpBN3LH3dR_7aOdwlXjSU9_MGVPHIaI&_nc_ohc=L_OxitKTj5UQ7kNvgFeEhiR&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AkTD7uuRmCmmhBtMQAk7fwg&oh=00_AYAIV2jBM24C0NyJWhPKGn7sjt45eeLLxi_cXxE7OLGFmw&oe=66E99E53',
    title: 'Adventure Awaits',
    description: 'Embark on thrilling adventures and scenic rides.',
    buttonText: 'Join the Adventure',
  },
  {
    url: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/422899703_3572204596355110_2108986116195153240_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeEJu9wlg1p1zUkyGv4xkzQ52m9wXSZyKRHab3BdJnIpEbrWzP9_B_IboKd9BrIofCoYbfH2plI01nWysoBaBPpf&_nc_ohc=cfer_Sx4obkQ7kNvgFTldG9&_nc_ht=scontent.fdac41-1.fna&_nc_gid=ATBqNumY8xaWfeUnq8_pFe-&oh=00_AYCqIohZMiAfy6ApLpyW_8br125FLFEBJ4aXATKGCCfHwg&oe=66E9A283',
    title: 'Photography Passion',
    description: 'Capture the moments that matter with a keen eye for detail.',
    buttonText: 'See the Gallery',
  },
  {
    url: 'https://scontent.fdac41-2.fna.fbcdn.net/v/t39.30808-6/458292315_3726654064243495_2528226091234002174_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHYSBCrhpfMDvkAA6mtOxQfEUWVkLFQ9FYRRZWQsVD0Vm29M0c9dMW8SJzj55OLuxjJDKa5Kn0IFyhGqfDH_rtU&_nc_ohc=EOUYAahEancQ7kNvgEYBO0p&_nc_ht=scontent.fdac41-2.fna&_nc_gid=AGwfXzbVyKb4hMTB2c_WDEV&oh=00_AYB1SmGD1bO5wYWjGgWiD22RRQ_HF4gdxdctU4Eq9WHSnQ&oe=66E98A8B',
    title: 'Travel Tales',
    description: 'Read about exciting travel stories and experiences.',
    buttonText: 'Read More',
  },
  {
    url: 'https://scontent.fdac41-1.fna.fbcdn.net/v/t39.30808-6/351379485_1682990282161871_1591719328914145302_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHozwFEnnvLrcRopreVkVG-CsxZEXMOUtwKzFkRcw5S3PoeO_5exZc0SjdcQdRkNsUrlkH0X0ljeBAjMFTQs4Jv&_nc_ohc=u_1YJ0o-RRAQ7kNvgGFMD8q&_nc_ht=scontent.fdac41-1.fna&_nc_gid=AloTtbgL5DfC1HG_5Nie2hN&oh=00_AYBuoM0LzXq4gWiIGGALIOiJ7vQ4s8jJ4anWAITKji8kCQ&oe=66E99EF1',
    title: 'Biker Diaries',
    description: 'Follow the journey of a passionate biker across diverse terrains.',
    buttonText: 'Check the Diaries',
  }
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden h-[70vh] bg-gray-900 text-white">
      {/* Slide Images */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentIndex === index ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            <img
              src={slide.url}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      {/* Details */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gray-800 bg-opacity-60 rounded">
        <motion.div
          className="flex flex-col items-center justify-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          key={currentIndex}
        >
          <h1 className="text-3xl font-bold mb-2 text-center text-green-500">
            {slides[currentIndex].title}
          </h1>
          <p className="text-base text-center">
            {slides[currentIndex].description}
          </p>
          <motion.button
            className="font-sans flex justify-center gap-2 mt-3 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            {slides[currentIndex].buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 19"
              className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
            >
              <path
                className="fill-gray-800 group-hover:fill-gray-800"
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              ></path>
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-green-500' : 'bg-gray-500'} transition`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
