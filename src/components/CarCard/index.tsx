import { useSecondsLeft } from "@/lib/hooks/useSecondsLeft";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import cn from "classnames";
import numeral from "numeral";
import { MapPinIcon } from "lucide-react";
import { ICar } from "@/lib/types";

interface ICarCardProps {
  carDetails: ICar;
}

const CarCard: React.FunctionComponent<ICarCardProps> = ({ carDetails }) => {
  const secondsLeft = useSecondsLeft(carDetails?.auction[0]?.time_ending);

  const timeLeftText = () => {
    if (secondsLeft <= 0) return "Auction ended";
    const days = Math.floor(secondsLeft / (24 * 60 * 60));
    let hours: string | number = Math.floor(
      (secondsLeft % (24 * 60 * 60)) / (60 * 60)
    );
    let minutes: string | number = Math.floor((secondsLeft % (60 * 60)) / 60);
    let seconds: string | number = Math.floor(secondsLeft % 60);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    const hourPart = `${hours}:${minutes}:${seconds}`;

    if (days > 1) {
      return `${days} days ${hourPart}`;
    }
    if (days == 1) {
      return `${days} day ${hourPart}`;
    }
    return hourPart;
  };

  return (
    <Link
      href={`/cars/${carDetails.id}`}
      className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer hover:bg-gray-100 flex flex-col"
    >
      <div className="aspect-w-16 aspect-h-10">
        <Image
          src={carDetails.main_image}
          alt="Landscape picture"
          fill
          style={{ objectFit: "cover" }}
          className="block"
        />
      </div>
      <div className="p-4 pb-2 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">
          {carDetails.year} {carDetails.title}
        </h3>
        <div className="flex items-center mt-0.5">
          <MapPinIcon size={16} className="text-zinc-500" />
          <p className="text-sm text-zinc-500">{carDetails.location}</p>
        </div>
        {carDetails.status == "created" && (
          <div
            className={cn(
              "absolute top-0 right-0 text-white p-2 flex items-center justify-center bg-green-700"
            )}
          >
            <span>Upcoming</span>
          </div>
        )}
        {/* <p className="text-sm text-zinc-500 mt-2">
          {carDetails.short_description}
        </p> */}
        {carDetails.status !== "created" && (
          <h4 className="font-semibold text-base mt-auto">
            {`${carDetails.currency} ${numeral(carDetails.current_bid).format(
              "0,0"
            )}`}
          </h4>
        )}
      </div>
      <div
        className={cn(
          "text-white w-full p-2 rounded-b-lg flex items-center justify-center",
          carDetails.status === "sold" && "bg-[#6E52A2]",
          (carDetails.status === "for_sale" || carDetails.status === "live") &&
            "bg-green-700",
          carDetails.status === "created" &&
            "bg-black bg-opacity-50 flex-row-reverse"
        )}
      >
        {carDetails.status == "created" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 icon icon-tabler icon-tabler-brand-whatsapp"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
        )}
        {carDetails.status == "live" && (
          <svg
            className=" h-4 w-4 mr-1 inline-block"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        )}
        <span>
          {carDetails.status === "sold"
            ? "Sold"
            : carDetails.status === "for_sale"
            ? "For Sale"
            : carDetails.status === "created"
            ? "Get early access"
            : carDetails.status === "live"
            ? timeLeftText()
            : ""}
        </span>
      </div>
    </Link>
  );
};

export default CarCard;
