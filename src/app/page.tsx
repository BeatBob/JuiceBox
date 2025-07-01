import PageContainer from "@/components/container/PageContainer";
import HomeLayout from "@/components/HomeLayout";

export const metadata = {
  title: "JuiceBox",
  description: "JuiceBox test",
};

export default function Page() {
  return (
    <PageContainer>
      <HomeLayout />
    </PageContainer>
  );
}
