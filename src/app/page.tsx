import CarsPage from "@/components/pages/CarsPage";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "NoLemons.co - The online auction for car people, by car people",
  description: "By car people. For car people.",
  metadataBase: new URL("https://nolemons.co"),
};

export default async function Home() {
  const res = await fetch("https://nolemons2.onrender.com/api/v2/cars/", {
    next: { revalidate: 0 },
  });

  const data = await res.json();

  const auctionItems = data
    .filter((item: any) => item.auction && item.auction.length > 0)
    .sort(
      (a: any, b: any) =>
        new Date(b.auction[0].time_ending).getTime() -
        new Date(a.auction[0].time_ending).getTime()
    );

  // Filter items without an auction
  const nonAuctionItems = data.filter(
    (item: any) => !item.auction || item.auction.length === 0
  );

  // Combine the two lists
  const sortedData = [...auctionItems, ...nonAuctionItems];

  return <CarsPage cars={sortedData} />;
}
