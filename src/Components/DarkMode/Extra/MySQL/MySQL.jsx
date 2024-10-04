import React, { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Custom style with gray background
const customStyle = {
  ...solarizedlight,
  'pre[class*="language-"]': {
    
    borderRadius: '0.375rem', // Rounded corners
    padding: '1rem',
  },
  'code[class*="language-"]': {
    color: '#e5e5e5', // Light text color
  },
};

function MySQL() {
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Tailwind CSS styles
  const styles = {
    container: 'min-h-screen p-6 bg-gray-900',
    headerContainer: 'bg-blue-900 p-6 rounded-lg shadow-lg text-center',
    headerText: 'text-4xl font-bold text-white mb-2 flex items-center justify-center',
    headerSubText: 'text-lg text-gray-200',
    inputContainer: 'flex justify-center my-6',
    inputWrapper: 'relative text-white w-80',
    input: 'border border-blue-600 bg-slate-800 text-white placeholder-gray-300 p-2 pl-10 rounded w-full focus:outline-none',
    icon: 'absolute top-2.5 left-3 text-blue-600',
    tagExample: 'bg-gray-800 p-4 rounded mt-2 overflow-x-auto text-white',
    description: 'text-gray-400 mt-2',
    logo: 'h-8 w-8 mr-2',
    codeContainer: 'bg-gray-800 p-4 rounded mt-2 overflow-x-auto',
  };

  // Fetch data from JSON file
  useEffect(() => {
    fetch('/mysql-tags.json')
      .then(response => response.json())
      .then(data => setTags(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredTags = tags.filter((tag) =>
    tag.tagName.toLowerCase().includes(searchTerm)
  );

  return (
    <div className={styles.container}>
      {/* Enhanced Header with MySQL Logo */}
      <div className={styles.headerContainer}>
        <div className="flex items-center justify-center">
          <img
            src="https://www.mysql.com/common/logos/logo-mysql-170x115.png" // MySQL logo URL
            alt="MySQL Logo"
            className={styles.logo}
          />
          <h1 className={styles.headerText}>
            MySQL Commands
          </h1>
        </div>
        <p className={styles.headerSubText}>
          Find, search, and learn common SQL commands for database interaction.
        </p>
      </div>

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
            placeholder="Search SQL command..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Display All Commands */}
      <main className="p-6">
        {filteredTags.map((tag, index) => (
          <div key={index}>
            {/* Tag Example with Syntax Highlighting */}
            <div className={styles.codeContainer}>
              <SyntaxHighlighter language="sql" className="bg-slate-900" style={customStyle}>
                {tag.example}
              </SyntaxHighlighter>
            </div>
            {/* Tag Description */}
            <p className={styles.description}>{tag.description}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default MySQL;
