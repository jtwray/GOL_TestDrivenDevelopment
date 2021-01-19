import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from '../utils/styleVariants';

export default function Rules() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div style={{ fontSize: '36px' }}>
        <h2>Rules</h2>
      </div>
    </motion.div>
  );
}
