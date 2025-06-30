import PageContainer from "@/components/container/PageContainer";
import Link from "next/link";

export default function NotFound() {
  return (
    <PageContainer>
      <div className="pt-16 md:pt-28 text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">404</h1>
        <p className="mb-2 text-3xl tracking-tight font-bold md:text-4xl">Page not found</p>
        <p className="mb-8 text-lg font-light text-gray-600">Sorry, we can&apos;t find such page.</p>

        <Link
          href="/"
          className="text-white text-center bg-secondary hover:bg-primary font-medium rounded-full px-5 py-3"
        >
          Return Home
        </Link>
      </div>
    </PageContainer>
  );
}
