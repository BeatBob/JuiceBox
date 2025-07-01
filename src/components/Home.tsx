"use client";

import { ReactNode, useRef, useState } from "react";
import Carousel from "./Carousel";
import LottieAnimation from "./LottieAnimation";
import AnimatedBackButton from "./AnimatedBackButton";
import Button from "./ui/Button";
import JuiceboxTitle from "./JuiceboxTitle";
import StyledInput from "./ui/Input";
import type { Swiper as SwiperInstance } from "swiper";

export type StepData = {
  title?: ReactNode;
};

const getStartedSteps: StepData[] = [
  {
    title: (
      <span>
        Professionals around the world shared how they feel about{" "}
        <span className="text-[#FAFAFA80]">technology and I&apos;ve listened. Now it&apos;s your turn.</span>
      </span>
    ),
  },
  {
    title: (
      <span>
        I&apos;ll ask you a handful of meaningful questions{" "}
        <span className="text-[#FAFAFA80]">and compare your responses with people in your industry.</span>
      </span>
    ),
  },
  {
    title: (
      <span>
        You&apos;ll get insights into current industry sentiments{" "}
        <span className="text-[#FAFAFA80]">and a reality check about technology in a few minutes. Deal? Great!</span>
      </span>
    ),
  },
];

export default function Home() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [step, setStep] = useState<"landing" | "started" | "form" | "thanks">("landing");
  const [formStep, setFormStep] = useState<"name" | "email">("name");
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<{ email?: string }>({ email: "" });

  const handleBackClick = () => {
    const isFirstSlide = activeIndex === 0;

    if (step === "started") {
      if (isFirstSlide) {
        setStep("landing");
      } else if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    } else if (step === "form") {
      if (formStep === "name") {
        setStep("started");
      } else {
        setFormStep("name");
      }
    } else {
      setStep("landing");
    }
  };

  const handleContinueClick = () => {
    const isLastSlide = activeIndex === getStartedSteps.length - 1;

    if (step === "started") {
      if (isLastSlide) {
        setStep("form");
      } else if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    } else {
      setStep("started");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
  };

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = () => {
    if (!validateEmail(formData.email)) {
      setErrors({ email: "Please enter a valid email address." });
      return;
    }
    setErrors({});
    setStep("thanks");
    console.log("Valid submission:", formData);
  };

  const renderFormStep = () => (
    <>
      {errors.email && <p className="text-red-400 text-sm mb-2">{errors.email}</p>}

      {formStep === "name" && (
        <StyledInput
          name="name"
          value={formData.name}
          isDisabledSubmit={!formData.name}
          onChange={handleChange}
          onSubmit={() => setFormStep("email")}
          placeholder="First name"
        />
      )}

      {formStep === "email" && (
        <StyledInput
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          onSubmit={handleSubmit}
          placeholder="Email address"
        />
      )}
    </>
  );

  const renderStepButton = () => {
    const isLastSlide = activeIndex === getStartedSteps.length - 1;

    return (
      <Button
        onClick={handleContinueClick}
        className={`text-gray-900 shadow-lg ${
          step === "started"
            ? `${
                isLastSlide
                  ? "bg-white text-dark"
                  : "bg-transparent text-white border border-gray-500 hover:border-white"
              } md:bg-white md:text-dark`
            : "bg-primary"
        }`}
      >
        <span
          className={`${
            step === "landing" ? "w-auto relative left-0" : "w-0 absolute -left-2"
          } overflow-hidden transition-all duration-500 ease-out`}
        >
          Get a reality check
        </span>
        <span
          className={`${
            step === "started" ? "w-auto relative right-0" : "w-0 absolute -right-2"
          } overflow-hidden transition-all duration-500 ease-out`}
        >
          {isLastSlide ? "Get Started" : "Continue"}
        </span>
      </Button>
    );
  };

  return (
    <div className="bagoss min-h-screen bg-dark lg:bg-gradient-to-br lg:from-dark lg:to-dark/80 text-white overflow-hidden select-none font-sans antialiased lg:flex lg:justify-center lg:items-center">
      <div className="relative container mx-auto min-h-screen p-6 lg:p-10 flex flex-col items-center justify-between">
        <div className="space-y-10 w-full">
          <div className="relative w-full flex items-center justify-between px-4 py-2 z-50 h-fit">
            {/* back button arrow  */}
            {step !== "landing" && (
              <div
                onClick={handleBackClick}
                className="absolute md:hidden top-2 left-0 cursor-pointer w-fit bg-white/20 rounded-full z-50"
              >
                <AnimatedBackButton />
              </div>
            )}

            {/* title with hover animation  */}
            <JuiceboxTitle />
          </div>

          {/* hexagon lottie  */}
          <LottieAnimation step={step} />

          <Carousel
            getStartedSteps={getStartedSteps}
            step={step}
            swiperRef={swiperRef}
            setActiveIndex={setActiveIndex}
            formStep={formStep}
            formData={formData}
          />
        </div>

        {/* button  */}
        <div className={`w-full md:w-fit mx-auto grid ${step === "started" ? "md:grid-cols-2" : ""} gap-5`}>
          {step === "form" && renderFormStep()}

          {step !== "landing" && (
            <Button
              onClick={handleBackClick}
              className="hidden md:block shadow-lg w-auto transition-all ease-in-out duration-300 h-fit bg-transparent text-white border border-gray hover:border-white"
            >
              Back
            </Button>
          )}

          {(step === "started" || step === "landing") && renderStepButton()}
        </div>
      </div>
    </div>
  );
}
