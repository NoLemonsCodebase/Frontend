import Hero from "@/components/Hero";
import CarsPage from "@/components/pages/CarsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoLemons - The online auction for car people, by car people",
  description: "By car people. For car people.",
  metadataBase: new URL("https://nolemons.ae"),
};

export default async function Home() {
  const res = await fetch("http://127.0.0.1:8000/api/v2/cars/", {
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
