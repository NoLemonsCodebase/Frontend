import { ArrowUpIcon } from "lucide-react";
import numeral from "numeral";
import { useEffect, useState } from "react";
import TimeLeft from "../CarCard/time-left";
import { IAuction } from "@/lib/types";

export default function AuctionBid({
  carId,
  currency,
  currentAuction,
}: {
  carId: number;
  currency: string;
  currentAuction: IAuction | undefined;
}) {
  const [currentBid, setCurrentBid] = useState<number>(0);
  const [timeRender, setTimeRender] = useState<string | undefined>(
    currentAuction?.time_ending
  );
  const [numberOfBid, setNumberOfBid] = useState<number>(0);

  useEffect(() => {
    // Function to fetch the latest bid
    const fetchLatestBid = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_OUR_API}/api/v1/current-bid/${carId}`
        );

        if (!response.ok) throw new Error("Failed to fetch bid");
        const data = await response.json();
        setCurrentBid(data.bid);
        setTimeRender(`${data.end_time.slice(0, -1)}+04:00`);
        setNumberOfBid(data.number_of_bids);
      } catch (error) {
        console.error("Error fetching bid:", error);
      }
    };

    fetchLatestBid();

    const interval = setInterval(fetchLatestBid, 3000);

    return () => clearInterval(interval);
  }, [carId]);
  return (
    <>
      {currentAuction && <TimeLeft timeEnding={timeRender} />}
      {/* <ArrowUpIcon className="w-5 h-5 mr-1 hidden sm:block" /> */}
      <p className="opacity-7 ml-2 hidden sm:block">Current Offer</p>
      <p className="font-semibold ml-2 flex-grow md:flex-none flex justify-end whitespace-nowrap">
        {currency} {numeral(currentBid).format("0,0")}
      </p>
      {numberOfBid > 1 && (
        <div className="basis-auto hidden md:flex items-center space-x-2 text-white">
          <p className="opacity-70 ml-2">Offers</p>
          <p className="font-semibold">{numberOfBid}</p>
        </div>
      )}
    </>
  );
}
