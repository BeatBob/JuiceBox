"use client";

import PageContainer from "@/components/container/PageContainer";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const HomeLayout = dynamic(() => import("@/components/HomeLayout"), {
  ssr: false,
});

export default function Page() {
  return (
    <PageContainer>
      <Suspense>
        <HomeLayout />
      </Suspense>
    </PageContainer>
  );
}
