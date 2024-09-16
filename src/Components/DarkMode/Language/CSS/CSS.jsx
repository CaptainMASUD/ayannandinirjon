import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Css() {
    const [properties, setProperties] = useState([]);
    const [visibleProperty, setVisibleProperty] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        // Fetch the CSS properties from the JSON file
        fetch('/css-properties.json')
            .then((response) => response.json())
            .then((data) => setProperties(data))
            .catch((error) => console.error('Error fetching CSS properties:', error));
    }, []);

    // Tailwind CSS styles
    const styles = {
        container: 'min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900',
        header: 'text-white text-center p-6 text-3xl font-bold',
        greenText: 'text-green-400',
        searchBar: 'mb-8',
        inputContainer: 'mb-6',
        inputWrapper: 'relative w-full max-w-md',
        input: 'border border-green-500 bg-gray-800 text-white placeholder-gray-400 p-3 pl-12 rounded-lg shadow-lg',
        icon: 'absolute top-3 left-3 text-green-500',
        buttonContainer: 'flex flex-wrap mb-8 justify-center',
        button: 'border border-green-500 text-green-500 py-2 px-4 rounded-lg mr-2 mb-2 hover:bg-green-500 hover:text-white transition-all',
        buttonActive: 'bg-green-500 text-white',
        propertyExample: 'bg-gray-800 p-4 rounded-lg mt-4 shadow-lg text-white',
        property: 'font-semibold text-green-300',
        value: 'text-yellow-300',
        codeBlock: 'whitespace-pre-wrap',
        exampleContainer: 'mt-8 p-4 border border-gray-700 rounded-lg',
        exampleHtml: 'bg-gray-700 p-4 rounded-lg mb-4 text-white',
        examplePreview: 'bg-gray-600 p-4 rounded-lg',
        previewContent: 'bg-gray-700 p-4 rounded-lg',
        seeMoreButton: 'relative group cursor-pointer text-sky-50 overflow-hidden h-10 w-56 rounded-md bg-green-800 p-2 flex justify-center items-center font-extrabold mx-auto',
        buttonHighlight: 'absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 duration-500',
        highlight1: 'w-40 h-40 rounded-full bg-green-900',
        highlight2: 'w-32 h-32 rounded-full bg-green-800',
        highlight3: 'w-24 h-24 rounded-full bg-green-700',
        highlight4: 'w-14 h-14 rounded-full bg-green-600',
    };

    const handleButtonClick = (propertyName) => {
        setVisibleProperty(visibleProperty === propertyName ? null : propertyName);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredProperties = properties.filter((property) =>
        property.propertyName.toLowerCase().includes(searchTerm)
    );

    const visibleProperties = showMore ? filteredProperties : filteredProperties.slice(0, 30);

    const highlightProperties = (code) => {
        return code.replace(/(\w+):\s*(\S+);/g, (_, property, value) => {
            return `<span class="${styles.property}">${property}</span>: <span class="${styles.value}">${value}</span>;`;
        });
    };

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <span className={styles.greenText}>CSS</span> Documentation
            </header>

            {/* Search Bar */}
            <div className={styles.inputContainer}>
                <div className={styles.inputWrapper}>
                    <span className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Search CSS property..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
            </div>

            <main className="p-6">
                {/* Button List with Search Filter */}
                <div className={styles.buttonContainer}>
                    {visibleProperties.map((property, index) => (
                        <motion.button
                            key={index}
                            className={`${styles.button} ${visibleProperty === property.propertyName ? styles.buttonActive : ''}`}
                            onClick={() => handleButtonClick(property.propertyName)}
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            {property.propertyName}
                        </motion.button>
                    ))}
                </div>

                {/* Toggle "See More" / "See Less" Button */}
                {filteredProperties.length > 30 && (
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className={styles.seeMoreButton}
                    >
                        <div className={`${styles.buttonHighlight} ${styles.highlight1}`}></div>
                        <div className={`${styles.buttonHighlight} ${styles.highlight2}`}></div>
                        <div className={`${styles.buttonHighlight} ${styles.highlight3}`}></div>
                        <div className={`${styles.buttonHighlight} ${styles.highlight4}`}></div>
                        <p className="z-10">{showMore ? 'See Less' : 'See More'}</p>
                    </button>
                )}

                {/* Property Example Display */}
                {filteredProperties
                    .filter((property) => visibleProperty === property.propertyName)
                    .map((property, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className={styles.propertyExample}>
                                <div className={styles.exampleContainer}>
                                    <div className={styles.exampleHtml}>
                                        <strong>HTML Example:</strong>
                                        <pre className={styles.codeBlock}>{property.html}</pre>
                                    </div>
                                    <div className={styles.examplePreview}>
                                        <strong>Preview:</strong>
                                        <div
                                            className={styles.previewContent}
                                            dangerouslySetInnerHTML={{ __html: property.html }}
                                        />
                                    </div>
                                </div>
                                <div className={styles.codeBlock}>
                                    <strong>CSS:</strong>
                                    <pre dangerouslySetInnerHTML={{ __html: highlightProperties(property.example) }} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </main>
        </div>
    );
}

export default Css;
