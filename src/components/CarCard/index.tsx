import { ICar } from "@/lib/types";
import cn from "classnames";

import { useTranslations } from "next-intl";
import Link from "next/link";
import numeral from "numeral";

import TimeLeft from "./time-left";

// icons
import { FaWhatsapp } from "react-icons/fa";
import { MdArrowForward, MdOutlineAccessTime } from "react-icons/md";
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

  const statusBadge = is_sold
    ? { label: t("statuses.sold"), dot: "bg-zinc-400" }
    : is_for_sale
    ? { label: t("statuses.for_sale"), dot: "bg-emerald-500" }
    : is_live
    ? { label: t("car_card.live"), dot: "bg-red-500 animate-pulse" }
    : is_created
    ? { label: t("statuses.upcoming"), dot: "bg-amber-400" }
    : is_unverified
    ? { label: t("statuses.verifying"), dot: "bg-yellow-500" }
    : null;

  const price =
    is_live && auction?.latest_bid
      ? auction.latest_bid
      : is_sold && sale_price > 0
      ? sale_price
      : null;

  return (
    <Link
      href={singleCarUrl}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-16px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_28px_56px_-20px_rgba(0,0,0,0.28)]"
    >
      {/* Image */}
      <div className="relative aspect-[5/4] overflow-hidden bg-zinc-100">
        {main_image && (
          <OurImage
            src={main_image}
            alt={`main_image of ${title}`}
            width={800}
            height={640}
            classes="block h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}

        {statusBadge && (
          <span className="absolute start-4 top-4 inline-flex items-center gap-2 rounded-full bg-zinc-900/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-md">
            <span className={cn("h-2 w-2 rounded-full", statusBadge.dot)} />
            {statusBadge.label}
          </span>
        )}

        {is_live && (
          <span className="absolute bottom-4 end-4 inline-flex items-center gap-1 rounded-lg bg-zinc-900/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-md">
            <MdOutlineAccessTime className="text-sm" />
            <TimeLeft timeEnding={auction?.time_ending} />
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
          {year}
        </p>
        <h3
          className="mt-1.5 line-clamp-1 text-xl font-bold tracking-tight text-zinc-900"
          title={title}
        >
          {title}
        </h3>

        {price && (
          <p className="mt-2 text-base font-semibold text-zinc-900">
            <span className="me-1.5 text-xs font-normal text-zinc-500">
              {is_live ? t("car_card.current_bid") : t("car_card.sold_for")}
            </span>
            {currency} {numeral(price).format("0,0")}
          </p>
        )}

        <div className="mt-auto pt-4">
          <div className="flex items-center justify-between gap-3 border-t border-zinc-200/70 pt-4">
            <div className="flex min-w-0 items-center gap-2.5">
              {country && (
                <Image
                  src={`https://flagcdn.com/w40/${country.toLowerCase()}.png`}
                  width={40}
                  height={27}
                  alt={country}
                  className="w-[22px] shrink-0 rounded-[2px]"
                />
              )}
              <span className="truncate text-base text-zinc-500">
                {location}
              </span>
            </div>

            <span
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-900 ring-1 ring-zinc-200 transition-all duration-300 group-hover:bg-zinc-900 group-hover:text-white group-hover:ring-zinc-900"
              aria-label={
                is_created || is_unverified
                  ? t("home_page.get_early_access")
                  : t("car_card.view")
              }
            >
              {is_created || is_unverified ? (
                <FaWhatsapp className="text-xl" />
              ) : (
                <MdArrowForward className="text-xl transition-transform duration-300 group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
