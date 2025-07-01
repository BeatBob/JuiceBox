import PageContainer from "@/components/container/PageContainer";
import Home from "@/components/Home";

export const metadata = {
  title: "JuiceBox",
  description: "JuiceBox test",
};

export default function Page() {
  return (
    <PageContainer>
      <Home />
    </PageContainer>
  );
}
