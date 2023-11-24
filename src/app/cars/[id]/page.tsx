import CarDetailPage from "@/components/pages/CarDetailPage";
import * as React from "react";

const CarPage: React.FunctionComponent<{}> = async () => {
  const res = await fetch(
    "https://nolemons2.onrender.com/bot/current-max-auction-bid/",
    { next: { revalidate: 0 } }
  );

  const data = await res.json();

  const auctionInfo = {
    endDate: data.end_time,
    lastBid: data.max_bid,
  };

  return <CarDetailPage auctionInfo={auctionInfo} />;
};

export default CarPage;
