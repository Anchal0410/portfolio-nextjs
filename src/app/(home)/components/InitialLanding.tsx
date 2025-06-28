"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

export default function InitialLanding() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
    </motion.div>
  );
}
