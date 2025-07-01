"use client";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function AnimatedBackButton() {
  return (
    <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className={`p-2`}>
      <ArrowLeft />
    </motion.button>
  );
}
