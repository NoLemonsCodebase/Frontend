import { useEffect, useState } from "react";

export default function AuctionDate({
  endDatetime,
  carId,
}: {
  endDatetime: Date | null;
  carId: number;
}) {
  const [endAuction, setEndAuction] = useState<Date | null>(endDatetime);
  useEffect(() => {
    // Function to fetch the latest bid
    const fetchLatestBid = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_OUR_API}/api/v1/current-bid/${carId}`
        );

        if (!response.ok) throw new Error("Failed to fetch bid");
        const data = await response.json();
        console.log(data.end_time);
        setEndAuction(new Date(`${data.end_time.slice(0, -1)}+04:00`));
      } catch (error) {
        console.error("Error fetching bid:", error);
      }
    };

    fetchLatestBid();

    const interval = setInterval(fetchLatestBid, 3000);

    return () => clearInterval(interval);
  }, [carId]);

  return (
    <p className="text-sm text-gray-500 font-semibold">
      {`Sale ends ${endAuction?.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`}
    </p>
  );
}
