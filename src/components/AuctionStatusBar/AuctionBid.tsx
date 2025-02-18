import numeral from "numeral";
import { useEffect, useState } from "react";

export default function AuctionBid({
  carId,
  currency,
}: {
  carId: number;
  currency: string;
}) {
  const [currentBid, setCurrentBid] = useState<number>(0);

  useEffect(() => {
    // Function to fetch the latest bid
    const fetchLatestBid = async () => {
      try {
        const response = await fetch(
          `https://nolemons2.onrender.com/api/v1/current-bid/${carId}`
        );

        if (!response.ok) throw new Error("Failed to fetch bid");
        const data = await response.json();
        setCurrentBid(data.bid);
      } catch (error) {
        console.error("Error fetching bid:", error);
      }
    };

    fetchLatestBid();

    const interval = setInterval(fetchLatestBid, 3000);

    return () => clearInterval(interval);
  }, [carId]);
  return (
    <p className="font-semibold ml-2 whitespace-nowrap">
      {currency} {numeral(currentBid).format("0,0")}
    </p>
  );
}
