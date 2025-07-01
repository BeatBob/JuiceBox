"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

type Props = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  isDisabledSubmit?: boolean;
  type?: "text" | "email";
};

const Input = ({ name, value, onChange, onSubmit, placeholder, isDisabledSubmit, type, className = "" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className={`relative w-full max-w-md mx-auto ${className}`}
    >
      <input
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isDisabledSubmit) onSubmit(e);
        }}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent text-white border border-white/20 rounded-2xl py-3 pl-4 pr-12 placeholder:text-gray outline-none focus:border-gray transition-all"
      />

      {onSubmit && (
        <button
          onClick={onSubmit}
          disabled={isDisabledSubmit}
          className="absolute disabled:select-none right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white disabled:text-gray p-2 rounded-full transition-all"
        >
          <ArrowUp size={16} />
        </button>
      )}
    </motion.div>
  );
};

export default Input;
