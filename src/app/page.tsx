import Home from "@/components/Home";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const PageContainer = dynamic(() => import("@/components/container/PageContainer"));

export const metadata = {
  title: "JuiceBox",
  description: "JuiceBox test",
};

export default function Page() {
  return (
    <Suspense>
      <PageContainer>
        <Home />
      </PageContainer>
    </Suspense>
  );
}
