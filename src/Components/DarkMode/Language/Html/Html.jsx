import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Html() {
  const [visibleTag, setVisibleTag] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [tags, setTags] = useState([]);

  // Tailwind CSS styles
  const styles = {
    container: 'min-h-screen p-6 bg-gray-900',
    header: 'text-white text-center p-4 text-2xl font-bold',
    greenText: 'text-green-600',
    button: 'border border-green-600 text-green-600 py-2 px-4 rounded mr-2 mb-2 hover:bg-green-600 hover:text-white transition-all',
    buttonActive: 'bg-green-600 text-white',
    buttonContainer: 'flex flex-wrap mb-4 justify-center',
    inputContainer: 'flex justify-center mb-4',
    inputWrapper: 'relative text-white w-80',
    input: 'border border-green-600 bg-slate-800 text-white placeholder-gray-300 p-2 pl-10 rounded w-full focus:outline-none',
    icon: 'absolute top-2.5 left-3 text-green-600',
    tagExample: 'bg-gray-800 p-4 rounded mt-2 overflow-x-auto text-white'
  };

  // Fetch data from JSON file
  useEffect(() => {
    fetch('./html-tags.json')
      .then(response => response.json())
      .then(data => setTags(data));
  }, []);

  const handleButtonClick = (tagName) => {
    setVisibleTag(visibleTag === tagName ? null : tagName);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredTags = tags.filter((tag) =>
    tag.tagName.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={styles.container}>
      {/* Animated Header */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={styles.greenText}>HTML</span> Documentation
      </motion.header>

      {/* Search Bar */}
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <span className={styles.icon}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
            </svg>
          </span>
          <input
            type="text"
            className={styles.input}
            placeholder="Search HTML tag..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <main className="p-6">
        {/* Button List with Search Filter */}
        <motion.div
          className={styles.buttonContainer}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredTags.map((tag, index) => (
            <motion.button
              key={index}
              className={`${styles.button} ${visibleTag === tag.tagName ? styles.buttonActive : ''}`}
              onClick={() => handleButtonClick(tag.tagName)}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {tag.tagName}
            </motion.button>
          ))}
        </motion.div>

        {/* Tag Example Display */}
        {filteredTags
          .filter((tag) => visibleTag === tag.tagName)
          .map((tag, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <pre className={styles.tagExample}>
                <code>{tag.example}</code>
              </pre>
            </motion.div>
          ))}
      </main>
    </div>
  );
}

export default Html;
