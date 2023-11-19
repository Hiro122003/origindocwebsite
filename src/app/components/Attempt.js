"use client";
import React from "react";
import { motion } from "framer-motion";

const Attempt = () => {
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-20 h-20 bg-primeColor "></div>
    </motion.div>
  );
};

export default Attempt;
