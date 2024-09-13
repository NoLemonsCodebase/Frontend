import Hero from "@/components/Hero";
import CarsPage from "@/components/cars-detail/cars-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoLemons - The online auction for car people, by car people",
  description: "By car people. For car people.",
  metadataBase: new URL("https://nolemons.ae"),
};

export default async function Home() {
  const res = await fetch("https://nolemons2.onrender.com/api/v2/cars/", {
    next: { revalidate: 0 },
  });

  const data = await res.json();


  return (
    <>
      <Hero />
      <CarsPage cars={data} />
    </>
  );
}
