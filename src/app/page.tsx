"use client";

import HomeLayout from "@/components/HomeLayout";
import dynamic from "next/dynamic";

const PageContainer = dynamic(() => import("@/components/container/PageContainer"), {
  ssr: false,
});

export default function Page() {
  return (
    <PageContainer>
      <HomeLayout />
    </PageContainer>
  );
}
