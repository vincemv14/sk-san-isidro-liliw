import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Starts transparent and 50px below
      whileInView={{ opacity: 1, y: 0 }} // Animates to full opacity and original position
      viewport={{ once: true }} // Animates only once when it scrolls into view
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth upward motion
    >
      {/* Your content here */}
    </motion.div>
  );
};


export default AnimatedHeader;