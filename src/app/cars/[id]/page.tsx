import CarDetailPage from "@/components/pages/CarDetailPage";
import * as React from "react";

const CarPage: React.FunctionComponent<{}> = async () => {
  const res = await fetch(
    "https://nolemons2.onrender.com/bot/current-max-auction-bid/"
  );

  const data = await res.json();
  const secondsLeft =
    data.time_left[0] * 24 * 60 * 60 + 4 * 60 * 60 + 10 * 60 + 3;
  console.log("secondsLeft", secondsLeft);

  const auctionInfo = {
    secondsLeft,
    lastBid: data.max_bid,
  };

  return <CarDetailPage auctionInfo={auctionInfo} />;
};

export default CarPage;
