"use client";

import { JSX } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { StepData } from "./Home";

type Props = {
  getStartedSteps: StepData[];
  swiperRef: React.RefObject<SwiperInstance | null>;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  step: "landing" | "started" | "form" | "thanks";
  formStep: "name" | "email";
  formData: { name: string; email: string };
};

const Carousel = ({ getStartedSteps, swiperRef, setActiveIndex, step, formStep, formData }: Props) => {
  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      pagination={step === "started" ? { clickable: true } : false}
      className="relative w-full"
    >
      {step === "landing" && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl lg:text-3xl font-light mb-6 px-4 leading-relaxed text-center"
        >
          Compare your thoughts on{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-blue">
            technology
          </span>{" "}
          with current industry opinions.
        </motion.h2>
      )}

      {step === "started" &&
        getStartedSteps.map((step, index) => (
          <SwiperSlide key={index}>
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
          </SwiperSlide>
        ))}

      {step === "form" && (
        <>
          {formStep === "name" && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl lg:text-3xl font-light mb-6 px-4 leading-relaxed text-center"
            >
              Let’s start with the basics. Type in your first name.
            </motion.h2>
          )}
          {formStep === "email" && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl lg:text-3xl font-light mb-6 px-4 leading-relaxed text-center"
            >
              How should we contact you? Type in your email address.
            </motion.h2>
          )}
        </>
      )}

      {step === "thanks" && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-2xl lg:text-3xl font-light mb-6 px-4 leading-relaxed text-center"
        >
          Thanks, {formData.name}! Now, it’s time to get a reality check.
          <br />
          <br />
          This will take 2-3 minutes. 
        </motion.h2>
      )}
    </Swiper>
  );
};

export default Carousel;
