import Hero from "@/components/Hero";
import CarsPage from "@/components/cars-detail/cars-page";
import CarsFilter from "@/components/cars-filter";
import Search from "@/components/search";
import Loader from "@/components/ui/loader";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "NoLemons - The online auction for car people, by car people",
  description: "By car people. For car people.",
  metadataBase: new URL("https://nolemons.ae"),
};

export default function Home({ searchParams }: { searchParams: any }) {
  const { cat, query } = searchParams;

  return (
    <main className="our-container">
      <Hero />
      <div className=" flex flex-wrap flex-col-reverse md:flex-row gap-6 md:justify-between  md:mb-10 mb-6 ">
        <CarsFilter />
        <Search />
      </div>

      <Suspense key={cat} fallback={<Loader pb="pb-[400px]" />}>
        <CarsPage category={cat} search={query} />
      </Suspense>
    </main>
  );
}
