"use client";

import { Player as LottiePlayer } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  step: "landing" | "started" | "form" | "thanks";
};

const LottieAnimation = ({ step }: Props) => {
  const playerRef = useRef<LottiePlayer | null>(null);
  const lottieWrapperClass =
    step === "started" ? `w-48 lg:w-64` : step === "form" || step === "thanks" ? "w-16 lg:w-24" : "w-11/12";
  const overlayOpacityClass = step === "form" || step === "thanks" ? "opacity-0 pointer-events-none" : "opacity-100";
  const stepTextVisible = step === "landing" ? "opacity-100" : "opacity-0";

  useEffect(() => {
    if (playerRef.current) {
      if (step === "thanks") {
        playerRef.current.play();
      } else {
        playerRef.current.stop();
      }
    }
  }, [step]);

  return (
    <div className="relative mx-auto max-w-md w-11/12">
      <div className={`relative z-0 transition-all duration-500 mx-auto ${lottieWrapperClass} aspect-square`}>
        {/* Lottie player with hex mask */}
        <div className="absolute inset-0 mask-hex overflow-hidden z-10">
          <LottiePlayer
            ref={playerRef}
            autoplay={step === "thanks"}
            loop
            src="/JB2G_Lottie.json"
            style={{ height: "100%", width: "100%" }}
          />
        </div>

        {/* Texture Overlay - hidden when playing */}
        <div
          className={`absolute inset-0 mask-hex overflow-hidden transition-opacity duration-500 ease-in-out z-20 ${overlayOpacityClass}`}
        >
          <Image src="/animation/hexagon.png" alt="texture overlay" fill className="object-contain" />
        </div>
      </div>

      {/*  visible when !getStarted */}
      <div className={`${stepTextVisible} transition-all duration-300 text-xs z-30`}>
        <div className="absolute transform left-0 top-5">WA businesses feel confident about future growth</div>
        <div className="absolute transform right-0 top-3/12 translate-y-3/12">AI cant replace creativity</div>
        <div className="absolute transform left-0 top-1/2 translate-y-1/2">Sales measure true success</div>
        <div className="absolute transform right-0 bottom-3/12 translate-y-3/12">
          Human connection drives WA business
        </div>
        <div className="absolute transform left-0 bottom-5">
          The primary barrier to digital <br /> transformation is financial investment
        </div>
      </div>
    </div>
  );
};

export default LottieAnimation;
