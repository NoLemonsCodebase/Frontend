import { ICar } from "@/lib/types";
import cn from "classnames";
import { MapPinIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import numeral from "numeral";
import * as React from "react";
import TimeLeft from "./time-left";

// icons
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";

interface ICarCardProps {
  carDetails: ICar;
}

const CarCard: React.FunctionComponent<ICarCardProps> = ({ carDetails }) => {
  const t = useTranslations("default");

  const singleCarUrl = carDetails.url_route || carDetails.id;

  return (
    <Link
      href={`/cars/${singleCarUrl}`}
      className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer hover:bg-gray-100 flex flex-col"
    >
      <div className="aspect-w-16 aspect-h-10">
        <Image
          src={carDetails.main_image}
          alt={carDetails.title}
          width={720}
          height={500}
          className="block object-cover"
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
            <span>{t("statuses.upcoming")}</span>
          </div>
        )}
        {carDetails.status == "unverified" && (
          <div
            className={cn(
              "absolute top-0 right-0 text-white p-2 flex items-center justify-center bg-yellow-500"
            )}
          >
            <span>{t("statuses.verifying")}</span>
          </div>
        )}
        {carDetails.status == "live" && carDetails.auction?.latest_bid && (
          <h4 className="font-semibold text-base mt-auto">
            {`${carDetails.currency} ${numeral(
              carDetails.auction.latest_bid
            ).format("0,0")}`}
          </h4>
        )}
        {carDetails.status == "sold" && (
          <h4 className="font-semibold text-base mt-auto">
            {`${carDetails.currency} ${numeral(carDetails.sale_price).format(
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
          (carDetails.status === "created" ||
            carDetails.status === "unverified") &&
            "bg-black bg-opacity-50 flex-row-reverse"
        )}
      >
        {carDetails.status == "created" && (
          <FaWhatsapp className=" ml-2 text-xl" />
        )}
        {carDetails.status == "live" && (
          <MdOutlineAccessTime className=" mr-1 text-xl" />
        )}
        <span>
          {carDetails.status === "sold" ? (
            t("statuses.sold")
          ) : carDetails.status === "for_sale" ? (
            t("statuses.for_sale")
          ) : carDetails.status === "created" ? (
            t("home_page.get_early_access")
          ) : carDetails.status === "unverified" ? (
            t("home_page.unverified")
          ) : carDetails.status === "live" ? (
            <TimeLeft timeEnding={carDetails?.auction?.time_ending} />
          ) : (
            ""
          )}
        </span>
      </div>
    </Link>
  );
};

export default CarCard;
