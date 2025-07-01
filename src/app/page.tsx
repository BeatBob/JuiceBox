"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const PageContainer = dynamic(() => import("@/components/container/PageContainer"), {
  ssr: false,
});

const HomeLayout = dynamic(() => import("@/components/HomeLayout"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense>
      <PageContainer>
        <HomeLayout />
      </PageContainer>
    </Suspense>
  );
}
