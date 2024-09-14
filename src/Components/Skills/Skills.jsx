import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaCode } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

// Skill icons mapping
const skillIcons = {
  C: <FaCode size={20} />,
  Java: <FaJava size={20} />,
  Python: <FaPython size={20} />,
  HTML: <FaHtml5 size={20} />,
  CSS: <FaCss3Alt size={20} />,
  TailwindCSS: <SiTailwindcss size={20} />,
  JavaScript: <FaJs size={20} />,
  React: <FaReact size={20} />,
};

// Detailed information for each skill
const skillDetails = {
  C: 'C is a general-purpose, procedural computer programming language supporting structured programming. It is a powerful language for system and application programming.',
  Java: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is widely used for building enterprise-scale applications.',
  Python: 'Python is an interpreted, high-level, general-purpose programming language. It emphasizes code readability and simplicity, and is used in a variety of fields including web development and data science.',
  HTML: 'HTML stands for HyperText Markup Language. It is the standard markup language used to create and design webpages. HTML describes the structure and layout of a webpage using various tags and attributes.',
  CSS: 'CSS stands for Cascading Style Sheets. It is used to describe the presentation of a document written in HTML or XML. CSS defines the layout, colors, fonts, and overall look of a webpage.',
  TailwindCSS: 'TailwindCSS is a utility-first CSS framework for creating custom designs without having to leave your HTML. It provides low-level utility classes that can be combined to create any design.',
  JavaScript: 'JavaScript is a high-level, just-in-time compiled programming language that conforms to the ECMAScript specification. It is widely used for adding interactive behavior to webpages and web applications.',
  React: 'React is a JavaScript library for building user interfaces. It allows developers to build single-page applications with a component-based architecture, improving the efficiency and manageability of code.',
};

// Variants for container and items
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      delay: index * 0.1,
    },
  }),
};

// Modal component
const Modal = ({ skill, onClose }) => {
  const [animateHeader, setAnimateHeader] = useState(false);

  const icon = skillIcons[skill];
  const details = skillDetails[skill];

  // Define W3Schools URL for each skill
  const learnMoreUrl = {
    C: 'https://devdot-theta.vercel.app/',
    Java: 'https://devdot-theta.vercel.app/',
    Python: 'https://devdot-theta.vercel.app/',
    HTML: 'https://devdot-theta.vercel.app/',
    CSS: 'https://devdot-theta.vercel.app/',
    TailwindCSS: 'https://devdot-theta.vercel.app/',
    JavaScript: 'https://devdot-theta.vercel.app/',
    React: 'https://devdot-theta.vercel.app/',
  }[skill];

  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ zIndex: 9999 }} // Maximum z-index
    >
      <motion.div
        className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-lg relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl z-50"
        >
          ×
        </button>
        <div className="flex items-center mb-4">
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 mr-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            {icon}
          </motion.div>
          <motion.h3
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: animateHeader ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-green-500">{skill[0]}</span>
            <span className="text-gray-200">{skill.slice(1)}</span>
          </motion.h3>
        </div>
        <p className="text-gray-300">{details}</p>
        <a
          href={learnMoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 text-green-500 font-semibold hover:underline mt-4"
        >
          Learn More
        </a>
      </motion.div>
    </motion.div>
  );
};

// Function to animate each letter
const AnimatedText = ({ text, highlightIndex }) => {
  return (
    <div className="flex gap-1 justify-center">
      {text.split('').map((letter, index) => (
        <motion.span
          key={index}
          className={index < highlightIndex ? 'text-gray-200 font-bold' : 'text-green-500 font-bold'}
          initial={index < highlightIndex ? { opacity: 0 } : { y: '100%', opacity: 0 }}
          animate={index < highlightIndex ? { opacity: 1 } : { y: '0%', opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

// Main component
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    'C',
    'Java',
    'Python',
    'HTML',
    'CSS',
    'TailwindCSS',
    'JavaScript',
    'React',
  ];

  return (
    <div className="py-8 px-4 bg-gray-900 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">
        <AnimatedText text="My Skills" highlightIndex={2} />
      </h2>
      <AnimatePresence>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="border-2 border-green-500 text-green-500 p-3 rounded-lg shadow-md flex items-center justify-center relative cursor-pointer"
              variants={itemVariants}
              custom={index}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 8px 15px rgba(0, 255, 0, 0.5)",
                transition: { duration: 0.3 }
              }}
              whileTap={{
                scale: 1.1,
                boxShadow: "0px 8px 15px rgba(0, 255, 0, 0.5)",
                transition: { duration: 0.3 }
              }}
              onClick={() => setSelectedSkill(skill)}
              style={{
                width: '120px',
                height: '120px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                background: 'transparent',
              }}
            >
              <motion.div
                className="absolute inset-0 bg-green-500 rounded-lg"
                initial={{ clipPath: "circle(0% at 50% 50%)" }}
                whileHover={{
                  clipPath: "circle(150% at 50% 50%)",
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
                whileTap={{
                  clipPath: "circle(150% at 50% 50%)",
                  transition: { duration: 0.6, ease: "easeOut" }
                }}
                style={{
                  zIndex: -1,
                  background: 'linear-gradient(45deg, rgba(0, 255, 0, 0.2) 0%, rgba(0, 255, 0, 0) 100%)',
                }}
              />
              <div className="flex flex-col items-center">
                {skillIcons[skill]}
                <span className="mt-1 text-lg font-semibold">{skill}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {selectedSkill && (
          <Modal
            skill={selectedSkill}
            onClose={() => setSelectedSkill(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;
