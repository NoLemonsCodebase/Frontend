import CarDetailPage from "@/components/pages/CarDetailPage";
import { Metadata } from "next";
import * as React from "react";

export const metadata: Metadata = {
  title: "NoLemons.ae - The online auction for car people, by car people",
  description: "1996 Toyota Land Cruiser VX",
  openGraph: {
    images: ["/images/land-cruiser/social.jpeg"],
  },
  metadataBase: new URL("https://nolemons.co"),
};

const CarPage: React.FunctionComponent<{ params: any }> = async ({
  params,
}) => {
  const res = await fetch(
    `https://nolemons2.onrender.com/api/v2/cars/${params.id}/`,
    { next: { revalidate: 0 } }
  );

  const data = await res.json();

  const lastAuction = data.auction?.[0];

  const auctionInfo = {
    endDate: lastAuction?.time_ending,
    lastBid: data.current_bid || data.starting_bid,
    numBids: 0,
  };

  return <CarDetailPage auctionInfo={auctionInfo} carDetail={data} />;
};

export default CarPage;
