import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiCsharp, SiDotnet } from 'react-icons/si';
import { VscFileCode } from 'react-icons/vsc';

// Skill icons mapping
const skillIcons = {
  C: <FaCode size={20} />,
  Java: <FaJava size={20} />,
  HTML: <FaHtml5 size={20} />,
  CSS: <FaCss3Alt size={20} />,
  TailwindCSS: <SiTailwindcss size={20} />,
  JavaScript: <FaJs size={20} />,
  React: <FaReact size={20} />,
  'C++': <SiCplusplus size={20} />,
  'C#': <SiCsharp size={20} />,
  '.NET': <SiDotnet size={20} />,
  XML: <VscFileCode size={20} />,
};

// Detailed information for each skill
const skillDetails = {
  C: 'C is a general-purpose, procedural programming language supporting structured programming. It is a powerful language for system and application programming.',
  Java: 'Java is a high-level, class-based, object-oriented language designed to have minimal implementation dependencies. It is widely used for enterprise-scale applications.',
  HTML: 'HTML (HyperText Markup Language) is the standard markup language used to create and structure webpages using tags and attributes.',
  CSS: 'CSS (Cascading Style Sheets) describes the presentation of HTML or XML documents, including layout, colors, fonts, and overall look of a page.',
  TailwindCSS: 'TailwindCSS is a utility-first CSS framework that provides low-level utility classes you can compose to build custom designs without leaving your markup.',
  JavaScript: 'JavaScript is a high-level, just-in-time compiled language conforming to ECMAScript. It powers interactive behavior in webpages and web apps.',
  React: 'React is a JavaScript library for building user interfaces with a component-based architecture, enabling efficient rendering and state management.',
  'C++': 'C++ is a general-purpose language supporting procedural, object-oriented, and generic programming. It is widely used for performance-critical applications, game engines, and systems.',
  'C#': 'C# is a modern, object-oriented language developed by Microsoft. It is commonly used with the .NET platform for desktop, web, cloud, and game development.',
  '.NET': '.NET is a free, cross-platform framework for building applications with C#, F#, or VB. It includes a large class library (BCL) and tools for web, desktop, cloud, and more.',
  XML: 'XML (eXtensible Markup Language) is a markup language that defines a set of rules for encoding documents in a format both human- and machine-readable.',
};

// Variants for container and items (used in modal entrance etc.)
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 },
  }),
};

// Modal component
const Modal = ({ skill, onClose }) => {
  const [animateHeader, setAnimateHeader] = useState(false);

  const icon = skillIcons[skill];
  const details = skillDetails[skill];

  // Learn More URL (placeholder)
  const learnMoreUrl = 'https://devdot-theta.vercel.app/';

  useEffect(() => { setAnimateHeader(true); }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-slate-900 bg-opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{ zIndex: 9999 }}
    >
      <motion.div
        className="bg-gray-800 p-6 rounded-lg w-11/12 max-w-lg relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <button aria-label="Close" onClick={onClose} className="absolute top-2 right-2 text-white text-2xl z-50">×</button>
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
        <a href={learnMoreUrl} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-4 text-green-500 font-semibold hover:underline mt-4">Learn More</a>
      </motion.div>
    </motion.div>
  );
};

// Function to animate each letter in the heading
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

// Reusable skill tile
const SkillTile = ({ skill, onClick, size = 'md' }) => (
  <motion.div
    className={`border-2 border-green-500 text-green-500 p-3 rounded-lg shadow-md flex items-center justify-center relative cursor-pointer bg-transparent ${size === 'sm' ? 'min-w-[120px] h-[100px]' : 'min-w-[140px] h-[120px]'}`}
    whileHover={{ scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 255, 0, 0.5)' }}
    whileTap={{ scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 255, 0, 0.5)' }}
    onClick={onClick}
  >
    <div className="flex flex-col items-center">
      {skillIcons[skill]}
      <span className="mt-1 text-lg font-semibold">{skill}</span>
    </div>
  </motion.div>
);

// Infinite marquee row (Framer Motion, no extra libs)
const InfiniteMarquee = ({ items, speed = 20, renderItem }) => {
  // duplicate the items to create a seamless loop
  const row = (
    <div className="flex items-center gap-4 px-2">
      {items.map((it, idx) => (
        <div key={`a-${idx}`} className="shrink-0">
          {renderItem(it)}
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex whitespace-nowrap"
        style={{ willChange: 'transform' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {/* two copies for continuous scroll */}
        {row}
        <div aria-hidden className="flex items-center gap-4 px-2">
          {items.map((it, idx) => (
            <div key={`b-${idx}`} className="shrink-0">
              {renderItem(it)}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Main component
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = ['C', 'Java', 'HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'React', 'C++', 'C#', '.NET', 'XML'];

  return (
    <div className="py-8 px-4 bg-gray-900 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">
        <AnimatedText text="My Skills" highlightIndex={2} />
      </h2>

      {/* Mobile: original grid (no marquee) */}
      <div className="w-full md:hidden">
        <motion.div
          className="grid grid-cols-2 gap-4 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div key={skill} variants={itemVariants} custom={index}>
              <SkillTile skill={skill} onClick={() => setSelectedSkill(skill)} size="sm" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Desktop / larger screens: marquee */}
      <div className="hidden md:block w-full">
        <InfiniteMarquee
          items={[...skills, ...skills] /* longer track for smoother loop */}
          speed={25}
          renderItem={(skill) => (
            <SkillTile key={skill} skill={skill} onClick={() => setSelectedSkill(skill)} />
          )}
        />
      </div>

      <AnimatePresence>
        {selectedSkill && (
          <Modal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skills;