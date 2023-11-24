import CarDetailPage from "@/components/pages/CarDetailPage";
import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "NoLemons.ae - The online auction for car people, by car people",
  description: "1996 Toyota LandCruiser VX",
  openGraph: {
    images: ["https://nolemons.ae/wp-content/uploads/2023/11/LC80.jpg"],
  },
  metadataBase: new URL("https://nolemons.co"),
};

const CarPage: React.FunctionComponent<{}> = async () => {
  const res = await fetch(
    "https://nolemons2.onrender.com/bot/current-max-auction-bid/",
    { next: { revalidate: 0 } }
  );

  const data = await res.json();

  const auctionInfo = {
    endDate: data.end_time,
    lastBid: data.max_bid,
    numBids: data.number_of_bids,
  };

  return <CarDetailPage auctionInfo={auctionInfo} />;
};

export default CarPage;
