import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-green-900 text-white text-center p-4"
    >
      <div>
        All rights reserved Ayan Nandi Nirjon © 2024
      </div>
    </motion.footer>
  );
}

export default Footer;
