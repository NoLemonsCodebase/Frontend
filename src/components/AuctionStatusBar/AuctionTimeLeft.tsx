import { useEffect, useState } from "react";
import TimeLeft from "../CarCard/time-left";

export default function AuctionTimeLeft({
  carId,
  timeEnding,
}: {
  carId: number;
  timeEnding: string;
}) {
  const [timeRender, setTimeRender] = useState<string>(timeEnding);

  useEffect(() => {
    // Function to fetch the latest bid
    const fetchLatestBid = async () => {
      try {
        const response = await fetch(
          `https://nolemons2.onrender.com/api/v1/current-bid/${carId}`
        );

        if (!response.ok) throw new Error("Failed to fetch bid");
        const data = await response.json();
        setTimeRender(`${data.end_time.slice(0, -1)}+04:00`);
      } catch (error) {
        console.error("Error fetching bid:", error);
      }
    };

    fetchLatestBid();

    const interval = setInterval(fetchLatestBid, 3000);

    return () => clearInterval(interval);
  }, [carId]);

  return <TimeLeft timeEnding={timeRender} />;
}
