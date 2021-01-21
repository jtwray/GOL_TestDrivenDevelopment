import React from "react";
import { motion } from "framer-motion";
import { containerVariants } from "../utils/styleVariants";
import Grid from "../components/Grid";

export default function Game() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div style={{ fontSize: "36px" }}>
        <h2>Game</h2>
        <Grid />
      </div>
    </motion.div>
  );
}
