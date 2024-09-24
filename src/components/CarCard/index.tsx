import { ICar } from "@/lib/types";
import cn from "classnames";

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

export default function CarCard({ carDetails }: ICarCardProps) {
  const t = useTranslations("default");

  const {
    url_route,
    id,
    main_image,
    title,
    year,
    location,
    status,
    auction,
    currency,
    sale_price,
    country,
    category,
  } = carDetails;

  const isParsed = category == "import_a_car";

  let singleCarUrl = `/cars/${url_route || id}`;

  if (isParsed) {
    singleCarUrl = `/import_a_car/${id}`;
  }

  return (
    <Link
      href={singleCarUrl}
      className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer hover:bg-gray-100 flex flex-col p-3"
    >
      <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden">
        <Image
          src={main_image}
          alt={title}
          width={720}
          height={500}
          className="block object-cover"
        />
      </div>
      <div className="p-4 pb-2 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">
          {year} {title}
        </h3>
        <div className="flex items-center gap-2 mt-0.5">
          <Image
            src={`https://flagcdn.com/w320/${country.toLowerCase()}.png`}
            width={320}
            height={215}
            alt="location"
            className=" max-w-[20px]"
          />
          <p className="text-sm text-zinc-500">{location}</p>
        </div>
        {status == "created" && (
          <div
            className={cn(
              "absolute top-0 right-0 text-white p-2 flex items-center justify-center bg-green-700"
            )}
          >
            <span>{t("statuses.upcoming")}</span>
          </div>
        )}
        {status == "unverified" && (
          <div
            className={cn(
              "absolute top-0 right-0 text-white p-2 flex items-center justify-center bg-yellow-500"
            )}
          >
            <span>{t("statuses.verifying")}</span>
          </div>
        )}

        {status == "live" && auction?.latest_bid && (
          <h4 className="font-semibold text-base mt-auto">
            {`${currency} ${numeral(auction.latest_bid).format("0,0")}`}
          </h4>
        )}

        {status == "sold" && (
          <h4 className="font-semibold text-base mt-auto">
            {`${currency} ${numeral(sale_price).format("0,0")}`}
          </h4>
        )}
      </div>
      <div
        className={cn(
          "text-white w-full p-3 rounded-lg flex items-center justify-center",
          status === "sold" && "bg-[#6E52A2]",
          (status === "for_sale" || status === "live") && "bg-green-700",
          (status === "created" || status === "unverified") &&
            "bg-black bg-opacity-50 flex-row-reverse"
        )}
      >
        {status == "created" && <FaWhatsapp className=" ml-2 text-xl" />}
        {status == "live" && <MdOutlineAccessTime className=" mr-1 text-xl" />}
        <span>
          {status === "sold" ? (
            t("statuses.sold")
          ) : status === "for_sale" ? (
            t("statuses.for_sale")
          ) : status === "created" ? (
            t("home_page.get_early_access")
          ) : status === "unverified" ? (
            t("home_page.unverified")
          ) : status === "live" ? (
            <TimeLeft timeEnding={auction?.time_ending} />
          ) : (
            ""
          )}
        </span>
      </div>
    </Link>
  );
}
