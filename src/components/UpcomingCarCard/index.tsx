import { useSecondsLeft } from "@/lib/hooks/useSecondsLeft";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import cn from "classnames";
import numeral from "numeral";
import { MapPinIcon } from "lucide-react";

interface ICarCardProps {
  title: string;
  year: string;
  location: string;
  mainImage: string;
}

const UpcomingCarCard: React.FunctionComponent<ICarCardProps> = ({
  title,
  year,
  location,
  mainImage,
}) => {
  const onClick = () => {
    const text = encodeURIComponent(`Hello! I'm interested in ${title}`);
    window.open(
      `https://api.whatsapp.com/send/?phone=19563001993&text=${text}`,
      "_blank"
    );
  };
  return (
    <div
      className="relative rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-w-16 aspect-h-10">
        <Image
          src={mainImage}
          alt="Landscape picture"
          layout={"fill"}
          style={{ objectFit: "cover" }}
          className="block"
        />
      </div>
      <div className="p-4 pb-2 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">
          {year} {title}
        </h3>
        <div className="flex items-center mt-0.5">
          <MapPinIcon size={16} className="text-zinc-500" />
          <p className="text-sm text-zinc-500">{location}</p>
        </div>
      </div>
      <div
        className={cn(
          "absolute top-0 right-0 text-white p-2 flex items-center justify-center bg-green-700"
        )}
      >
        <span>Upcoming</span>
      </div>
      <div
        className={cn(
          "text-white w-full p-2 rounded-b-lg flex items-center justify-center space-x-2 bg-black bg-opacity-50"
        )}
      >
        <p>Get early access</p>
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
      </div>
    </div>
  );
};

export default UpcomingCarCard;
