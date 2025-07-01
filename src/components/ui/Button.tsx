import React, { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
  className: string;
  onClick: () => void;
};

function Button({ children, className, onClick }: Props) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      onClick={onClick}
      className={`cursor-pointer relative w-full h-fit md:max-w-sm mx-auto py-4 px-8 rounded-2xl text-lg lg:text-xl font-medium transition-all duration-300 ease-out ${className} `}
    >
      {children}
    </motion.button>
  );
}

export default Button;
