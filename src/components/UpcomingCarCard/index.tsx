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
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg flex flex-col">
      <Image
        src={mainImage}
        alt="Landscape picture"
        width={712}
        height={468}
        className="block"
      />
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
          "text-white w-full p-2 rounded-b-lg flex items-center justify-center bg-black bg-opacity-50"
        )}
      >
        Coming soon
      </div>
    </div>
  );
};

export default UpcomingCarCard;
