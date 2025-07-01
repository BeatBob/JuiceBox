"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function PageContainer({ children, className = "" }: Props) {
  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);

  return <div className={`relative w-screen min-h-screen overflow-hidden ${className}`}>{children}</div>;
}

export default PageContainer;
