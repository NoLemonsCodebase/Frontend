import { ICar } from "@/lib/types";
import { ArrowUpIcon, ClockIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import numeral from "numeral";
import TimeLeft from "./CarCard/time-left";

interface IAutionStatusBarProps {
  carDetail: ICar;
}

export default function AutionStatusBar({
  carDetail,
}: IAutionStatusBarProps): JSX.Element {
  // for translation
  const t = useTranslations("default");

  // info we need from carDetail
  const { auction: currentAuction, status, sale_price, currency } = carDetail;

  return (
    <div className="rounded bg-black bg-opacity-80 flex-grow items-center">
      <ul className="flex items-center justify-between md:justify-normal  px-4 py-3">
        <li className=" flex items-center text-white">
          <ClockIcon className="w-5 h-5 mr-1" />
          {(status == "created" || status == "unverified") && (
            <p className="font-semibold whitespace-nowrap">
              {t("statuses.coming_soon")}
            </p>
          )}
          {status == "sold" && (
            <p className="font-semibold whitespace-nowrap">
              {t("statuses.car_was_sold")} {" | "} {currency}{" "}
              {numeral(sale_price).format("0,0")}
            </p>
          )}
          {status == "for_sale" && (
            <p className="font-semibold whitespace-nowrap">
              {t("statuses.for_sale")}
            </p>
          )}
          {status == "live" && currentAuction && (
            <TimeLeft timeEnding={currentAuction?.time_ending} />
          )}
        </li>
        {(status == "for_sale" || status == "live") && (
          <li className="flex items-center  text-white">
            <ArrowUpIcon className="w-5 h-5 mr-1 hidden sm:block" />
            <p className="opacity-7 hidden sm:block">
              {status == "for_sale"
                ? t("car_page.starting_from")
                : t("car_page.high_bid")}
            </p>
            <p className="font-semibold ml-2 whitespace-nowrap">
              {currency}{" "}
              {numeral(
                status == "for_sale"
                  ? sale_price
                  : currentAuction?.latest_bid || 0
              ).format("0,0")}
            </p>
          </li>
        )}
        {currentAuction &&
          status == "live" &&
          currentAuction.number_of_bids > 1 && (
            <li className="basis-auto hidden md:flex items-center space-x-2 text-white">
              <p className="opacity-70 ml-2">{t("car_page.bids")}</p>
              <p className="font-semibold">{currentAuction.number_of_bids}</p>
            </li>
          )}
      </ul>
    </div>
  );
}
