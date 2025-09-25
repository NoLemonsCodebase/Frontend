import { ICar } from "@/lib/types";
import cn from "classnames";

import { useTranslations } from "next-intl";
import Link from "next/link";
import numeral from "numeral";

import TimeLeft from "./time-left";

// icons
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import OurImage from "../our-image";
import Image from "next/image";

interface ICarCardProps {
  carDetails: ICar;
}

const CarCard: React.FC<ICarCardProps> = ({ carDetails }) => {
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

  // build url for car single page
  let singleCarUrl = `/cars/${url_route || id}`;
  if (category == "import_a_car") {
    singleCarUrl = `/import-a-car/${url_route || id}`;
  }

  // ==============
  const is_created = status == "created";
  const is_for_sale = status == "for_sale";
  const is_live = status == "live";
  const is_sold = status == "sold";
  const is_unverified = status == "unverified";

  return (
    <Link
      href={singleCarUrl}
      className="relative rounded-lg overflow-hidden shadow-xl cursor-pointer hover:bg-gray-100 flex flex-col p-3"
    >
      <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden">
        {main_image && (
          <OurImage
            src={main_image}
            alt={`main_image of ${title}`}
            width={720}
            height={500}
            classes="block object-cover"
          />
        )}
      </div>
      <div className="p-4 pb-2 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg">
          {year} {title}
        </h3>

        <div className="flex items-center gap-2 mt-0.5">
          {country && (
            <Image
              src={`https://flagcdn.com/w320/${country.toLowerCase()}.png`}
              width={320}
              height={215}
              alt={country}
              className=" max-w-[20px]"
            />
          )}

          <p className="text-sm text-zinc-500">{location}</p>
        </div>
        {is_created && (
          <div className="absolute top-0 right-0 text-white p-2 flex items-center justify-center bg-green-700">
            <span>{t("statuses.upcoming")}</span>
          </div>
        )}
        {is_unverified && (
          <div className="absolute top-0 right-0 text-white p-2 flex items-center justify-center bg-yellow-500">
            <span>{t("statuses.verifying")}</span>
          </div>
        )}

        {is_live && auction?.latest_bid && (
          <h4 className="font-semibold text-base mt-auto">
            {`${currency} ${numeral(auction.latest_bid).format("0,0")}`}
          </h4>
        )}

        {is_sold && sale_price > 0 && (
          <h4 className="font-semibold text-base mt-auto">
            {`${currency} ${numeral(sale_price).format("0,0")}`}
          </h4>
        )}
      </div>
      <div
        className={cn(
          "text-white w-full p-3 rounded-lg flex items-center justify-center",
          is_sold && "bg-[#6E52A2]",
          (is_for_sale || is_live) && "bg-green-700",
          (is_created || is_unverified) &&
            "bg-black bg-opacity-50 flex-row-reverse"
        )}
      >
        {is_created && <FaWhatsapp className=" ml-2 text-xl" />}
        {is_live && <MdOutlineAccessTime className=" mr-1 text-xl" />}
        <span>
          {is_sold ? (
            t("statuses.sold")
          ) : is_for_sale ? (
            t("statuses.for_sale")
          ) : is_created ? (
            t("home_page.get_early_access")
          ) : is_unverified ? (
            t("home_page.unverified")
          ) : is_live ? (
            <TimeLeft timeEnding={auction?.time_ending} />
          ) : (
            ""
          )}
        </span>
      </div>
    </Link>
  );
};

export default CarCard;
