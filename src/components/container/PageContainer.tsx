import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function PageContainer({ children, className = "" }: Props) {
  return <div className={`relative w-screen min-h-screen overflow-hidden ${className}`}>{children}</div>;
}

export default PageContainer;
