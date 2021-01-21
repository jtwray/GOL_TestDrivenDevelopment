import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../utils/styleVariants";

export default function About() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div style={{ fontSize: "36px" }}>
        <h2>About</h2>
      </div>
    </motion.div>
  );
}
