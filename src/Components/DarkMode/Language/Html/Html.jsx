import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Html() {
  const [visibleTag, setVisibleTag] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Tailwind CSS styles
  const styles = {
    container: 'min-h-screen p-6 bg-gray-900', // Dark background for the page
    header: 'text-white text-center p-4 text-2xl font-bold',
    greenText: 'text-green-600', // Green for first word
    button: 'border border-green-600 text-green-600 py-2 px-4 rounded mr-2 mb-2 hover:bg-green-600 hover:text-white transition-all', // Green theme for buttons
    buttonActive: 'bg-green-600 text-white', // Active button styling
    buttonContainer: 'flex flex-wrap mb-4 justify-center', // Centering buttons
    inputContainer: 'flex justify-center mb-4', // Center the search bar
    inputWrapper: 'relative text-white w-80', // Adjust width for centered input
    input: 'border border-green-600 bg-slate-800 text-white placeholder-gray-300 p-2 pl-10 rounded w-full focus:outline-none', // Green theme for input with dark background
    icon: 'absolute top-2.5 left-3 text-green-600', // Positioning for search icon
    tagExample: 'bg-gray-800 p-4 rounded mt-2 overflow-x-auto text-white', // Gray background for tag examples
  };

  // HTML tag data
  const tags = [
    { tagName: 'a', example: '<a href="https://www.example.com">Visit Example</a>' },
    { tagName: 'abbr', example: '<abbr title="Abbreviation">abbr</abbr>' },
    { tagName: 'address', example: '<address>Email: <a href="mailto:someone@example.com">someone@example.com</a></address>' },
    { tagName: 'area', example: '<area shape="rect" coords="34,44,270,350" href="link.html" alt="Description">' },
    { tagName: 'article', example: '<article><h2>Article Title</h2><p>Article content</p></article>' },
    { tagName: 'aside', example: '<aside><p>Related content</p></aside>' },
    { tagName: 'audio', example: '<audio controls><source src="audio.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>' },
    { tagName: 'b', example: '<b>Bold text</b>' },
    { tagName: 'base', example: '<base href="https://www.example.com/">' },
    { tagName: 'bdi', example: '<bdi>Text that should not be affected by the surrounding text direction.</bdi>' },
    { tagName: 'bdo', example: '<bdo dir="rtl">Text with right-to-left direction</bdo>' },
    { tagName: 'blockquote', example: '<blockquote cite="source"><p>Quote text</p></blockquote>' },
    { tagName: 'body', example: '<body><h1>Page Title</h1></body>' },
    { tagName: 'br', example: '<br>' },
    { tagName: 'button', example: '<button>Click me</button>' },
    { tagName: 'canvas', example: '<canvas id="myCanvas" width="200" height="100"></canvas>' },
    { tagName: 'caption', example: '<caption>Table Caption</caption>' },
    { tagName: 'cite', example: '<cite>Book Title</cite>' },
    { tagName: 'code', example: '<code>Code snippet</code>' },
    { tagName: 'col', example: '<col style="background-color:lightgray">' },
    { tagName: 'colgroup', example: '<colgroup><col span="2" style="background-color:lightgray"><col></colgroup>' },
    { tagName: 'data', example: '<data value="123">One hundred twenty-three</data>' },
    { tagName: 'datalist', example: '<datalist id="browsers"><option value="Chrome"><option value="Firefox"><option value="Safari"><option value="Edge"></datalist>' },
    { tagName: 'dd', example: '<dd>Description of the term</dd>' },
    { tagName: 'del', example: '<del>Deleted text</del>' },
    { tagName: 'details', example: '<details><summary>More information</summary><p>Details content</p></details>' },
    { tagName: 'dfn', example: '<dfn>Definition term</dfn>' },
    { tagName: 'dialog', example: '<dialog open>Dialog content</dialog>' },
    { tagName: 'div', example: '<div class="container">Content here</div>' },
    { tagName: 'dl', example: '<dl><dt>Term</dt><dd>Description</dd></dl>' },
    { tagName: 'dt', example: '<dt>Term</dt>' },
    { tagName: 'em', example: '<em>Emphasized text</em>' },
    { tagName: 'embed', example: '<embed src="file.swf" type="application/x-shockwave-flash">' },
    { tagName: 'fieldset', example: '<fieldset><legend>Form Legend</legend><input type="text" /></fieldset>' },
    { tagName: 'figcaption', example: '<figcaption>Figure Caption</figcaption>' },
    { tagName: 'figure', example: '<figure><img src="image.jpg" alt="Description"><figcaption>Caption text</figcaption></figure>' },
    { tagName: 'footer', example: '<footer><p>Footer content</p></footer>' },
    { tagName: 'form', example: '<form><label for="name">Name:</label><input type="text" id="name" name="name" /><input type="submit" value="Submit" /></form>' },
    { tagName: 'h1', example: '<h1>Heading Level 1</h1>' },
    { tagName: 'h2', example: '<h2>Heading Level 2</h2>' },
    { tagName: 'h3', example: '<h3>Heading Level 3</h3>' },
    { tagName: 'h4', example: '<h4>Heading Level 4</h4>' },
    { tagName: 'h5', example: '<h5>Heading Level 5</h5>' },
    { tagName: 'h6', example: '<h6>Heading Level 6</h6>' },
    { tagName: 'head', example: '<head><title>Document Title</title></head>' },
    { tagName: 'header', example: '<header><h1>Header Content</h1></header>' },
    { tagName: 'hgroup', example: '<hgroup><h1>Main Title</h1><h2>Sub Title</h2></hgroup>' },
    { tagName: 'hr', example: '<hr>' },
    { tagName: 'html', example: '<html><head><title>Document Title</title></head><body>Content here</body></html>' },
    { tagName: 'i', example: '<i>Italic text</i>' },
    { tagName: 'iframe', example: '<iframe src="https://www.example.com" width="600" height="400"></iframe>' },
    { tagName: 'img', example: '<img src="image.jpg" alt="Description" />' },
    { tagName: 'input', example: '<input type="text" placeholder="Enter text" />' },
    { tagName: 'ins', example: '<ins>Inserted text</ins>' },
    { tagName: 'kbd', example: '<kbd>Keyboard input</kbd>' },
    { tagName: 'label', example: '<label for="name">Name:</label>' },
    { tagName: 'legend', example: '<legend>Form Legend</legend>' },
    { tagName: 'li', example: '<li>List item</li>' },
    { tagName: 'link', example: '<link rel="stylesheet" href="styles.css" />' },
    { tagName: 'main', example: '<main><h1>Main Content</h1></main>' },
    { tagName: 'map', example: '<map name="mapname"><area shape="rect" coords="34,44,270,350" href="link.html" alt="Description"></map>' },
    { tagName: 'mark', example: '<mark>Highlighted text</mark>' },
    { tagName: 'meta', example: '<meta charset="UTF-8">' },
    { tagName: 'meter', example: '<meter min="0" max="100" value="70">70%</meter>' },
    { tagName: 'nav', example: '<nav><a href="#home">Home</a><a href="#about">About</a></nav>' },
    { tagName: 'noscript', example: '<noscript>Your browser does not support JavaScript.</noscript>' },
    { tagName: 'object', example: '<object data="file.swf" type="application/x-shockwave-flash"></object>' },
    { tagName: 'ol', example: '<ol><li>Item 1</li><li>Item 2</li></ol>' },
    { tagName: 'optgroup', example: '<optgroup label="Group 1"><option value="1">Option 1</option></optgroup>' },
    { tagName: 'option', example: '<option value="1">Option 1</option>' },
    { tagName: 'output', example: '<output name="result" for="a b">Result</output>' },
    { tagName: 'p', example: '<p>Paragraph text</p>' },
    { tagName: 'param', example: '<param name="autoplay" value="true">' },
    { tagName: 'picture', example: '<picture><source srcset="image.webp" type="image/webp"><img src="image.jpg" alt="Description"></picture>' },
    { tagName: 'pre', example: '<pre>Preformatted text</pre>' },
    { tagName: 'progress', example: '<progress value="70" max="100">70%</progress>' },
    { tagName: 'q', example: '<q>Quoted text</q>' },
    { tagName: 'rp', example: '<rp>(</rp><rt>Ruby annotation</rt><rp>)</rp>' },
    { tagName: 'rt', example: '<rt>Ruby annotation</rt>' },
    { tagName: 'ruby', example: '<ruby>漢 <rt>kan</rt></ruby>' },
    { tagName: 's', example: '<s>Strikethrough text</s>' },
    { tagName: 'samp', example: '<samp>Sample output</samp>' },
    { tagName: 'script', example: '<script src="script.js"></script>' },
    { tagName: 'section', example: '<section><h2>Section Title</h2><p>Section content</p></section>' },
    { tagName: 'select', example: '<select><option value="1">Option 1</option></select>' },
    { tagName: 'small', example: '<small>Smaller text</small>' },
    { tagName: 'source', example: '<source src="video.mp4" type="video/mp4">' },
    { tagName: 'span', example: '<span>Inline text</span>' },
    { tagName: 'strong', example: '<strong>Strong text</strong>' },
    { tagName: 'style', example: '<style>body { font-family: Arial; }</style>' },
    { tagName: 'sub', example: '<sub>Subscript text</sub>' },
    { tagName: 'summary', example: '<summary>Summary content</summary>' },
    { tagName: 'sup', example: '<sup>Superscript text</sup>' },
    { tagName: 'table', example: '<table><tr><th>Header</th></tr><tr><td>Data</td></tr></table>' },
    { tagName: 'tbody', example: '<tbody><tr><td>Row 1</td></tr></tbody>' },
    { tagName: 'td', example: '<td>Table cell</td>' },
    { tagName: 'textarea', example: '<textarea rows="4" cols="50">Text area</textarea>' },
    { tagName: 'tfoot', example: '<tfoot><tr><td>Footer content</td></tr></tfoot>' },
    { tagName: 'th', example: '<th>Table header</th>' },
    { tagName: 'thead', example: '<thead><tr><th>Header 1</th><th>Header 2</th></tr></thead>' },
    { tagName: 'time', example: '<time datetime="2024-09-16T00:00">September 16, 2024</time>' },
    { tagName: 'title', example: '<title>Document Title</title>' },
    { tagName: 'tr', example: '<tr><td>Row data</td></tr>' },
    { tagName: 'track', example: '<track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">' },
    { tagName: 'u', example: '<u>Underlined text</u>' },
    { tagName: 'ul', example: '<ul><li>Item 1</li><li>Item 2</li></ul>' },
    { tagName: 'var', example: '<var>Variable name</var>' },
    { tagName: 'video', example: '<video controls><source src="video.mp4" type="video/mp4">Your browser does not support the video element.</video>' },
    { tagName: 'wbr', example: '<wbr>Suggested line break' },
  ];

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

      {/* Centered Search Bar with Icon */}
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
