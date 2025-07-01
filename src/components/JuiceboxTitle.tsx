"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const JuiceboxTitle = () => {
  const [hoveredTitle, setHoveredTitle] = useState(false);

  return (
    <h1
      onMouseEnter={() => setHoveredTitle(true)}
      onMouseLeave={() => setHoveredTitle(false)}
      className="juiceBoxTitle relative text-3xl md:text-5xl font-semibold min-w-xs w-fit h-fit text-center mx-auto"
    >
      {"juicebox".split("").map((char, i) => {
        const isJB = char === "j" || char === "b";
        return (
          <motion.span
            key={i}
            className="inline-block pb-2"
            animate={{
              opacity: !hoveredTitle || isJB ? 1 : 0,
              scale: !hoveredTitle || isJB ? 1 : 0.8,
              x: !hoveredTitle || isJB ? 0 : -10,
              width: !hoveredTitle || isJB ? "auto" : 0,
              marginRight: !hoveredTitle || isJB ? "0.1em" : 0,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            {char}
          </motion.span>
        );
      })}
    </h1>
  );
};

export default JuiceboxTitle;
