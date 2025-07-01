"use client";
import { motion } from "framer-motion";
import LottieAnimation from "./LottieAnimation";

interface Props {
  step: any;
  stepIndex: number;
  currentStep: number;
  formData: { firstName: string };
  inputValue: string;
  canProceed: () => boolean;
  onInputChange: (v: string) => void;
  onNext: () => void;
}

export default function StepSlide({
  step,
  stepIndex,
  currentStep,
  formData,
  inputValue,
  canProceed,
  onInputChange,
  onNext,
}: Props) {
  return (
    <div className="flex flex-col h-full justify-between">
      <div className="text-center flex-1 flex flex-col justify-center">
        {step.title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl lg:text-3xl font-light mb-6 px-4 leading-relaxed max-w-2xl mx-auto"
          >
            {step.title}
          </motion.h2>
        )}
      </div>
    </div>
  );
}
