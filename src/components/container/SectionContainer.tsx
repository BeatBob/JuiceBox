"use client";
import React, { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  children?: ReactNode;
  withBottomMargin?: boolean;
  className?: string;
  delay?: number;
  yOffset?: number;
  once?: boolean;
  enabledAnimation?: boolean;
}

function SectionContainer({
  children,
  withBottomMargin = false,
  className = "",
  delay = 0.2,
  yOffset = 30,
  once = true,
  enabledAnimation = false,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const container = (
    <section className={`w-11/12 md:container mx-auto px-6 border ${withBottomMargin ? "mb-20" : ""} ${className}`}>
      {children}
    </section>
  );

  if (!enabledAnimation) {
    // Skip animation if disabled
    return container;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {container}
    </motion.div>
  );
}

export default SectionContainer;
