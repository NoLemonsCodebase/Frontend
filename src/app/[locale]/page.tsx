import Hero from "@/components/Hero";
import CarsPage from "@/components/cars-detail/cars-page";
import CarsFilter from "@/components/cars-filter";
import Loader from "@/components/ui/loader";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "NoLemons - The online auction for car people, by car people",
  description: "By car people. For car people.",
  metadataBase: new URL("https://nolemons.ae"),
};

export default function Home({ searchParams }: { searchParams: any }) {
  const { cat } = searchParams;

  return (
    <main className="our-container">
      <Hero />
      <CarsFilter />
      <Suspense key={cat} fallback={<Loader pb="pb-[400px]" />}>
        <CarsPage category={cat} />
      </Suspense>
    </main>
  );
}
