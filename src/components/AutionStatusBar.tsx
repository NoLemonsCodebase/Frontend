import * as React from "react";
import { ClockIcon, ArrowUpIcon, FrameIcon } from "@radix-ui/react-icons";
import { useSecondsLeft } from "@/lib/hooks/useSecondsLeft";
import numeral from "numeral";
import { IAuction, ICar } from "@/lib/types";
import { useTranslations } from "next-intl";

interface IAutionStatusBarProps {
  carDetail: ICar;
}

const TimeLeftText: React.FC<{ auction: IAuction }> = ({ auction }) => {
  const secondsLeft = useSecondsLeft(auction.time_ending);
  const t = useTranslations("default.car_page");

  // X days/day if X > 1, else h:MM:SS format
  const timeLeftText = () => {
    if (secondsLeft < 0) return ["00:00:00", ""];
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
      return [`${days} ${t("days")}`, hourPart];
    }
    if (days == 1) {
      return [`${days} ${t("day")}`, hourPart];
    }
    return [hourPart, ""];
  };

  return (
    <>
      <p className="hidden sm:block opacity-70">Time Left</p>
      <p className="font-semibold whitespace-nowrap">{timeLeftText()[0]}</p>
      <p className="hidden sm:block font-semibold whitespace-nowrap">
        {timeLeftText()[1]}
      </p>
    </>
  );
};

const AutionStatusBar: React.FunctionComponent<IAutionStatusBarProps> = ({
  carDetail,
}) => {
  const t = useTranslations("default");
  const currentAuction = carDetail.auction;

  return (
    <div className="rounded bg-black bg-opacity-80 flex flex-grow items-center">
      <ul className="flex items-center justify-between space-x-6 px-4 py-2">
        <li className="basis-auto flex items-center space-x-2 text-white">
          <ClockIcon className="w-5 h-5" />
          {(carDetail.status == "created" ||
            carDetail.status == "unverified") && (
            <p className="font-semibold whitespace-nowrap">
              {t("statuses.coming_soon")}
            </p>
          )}
          {carDetail.status == "sold" && (
            <p className="font-semibold whitespace-nowrap">
              {t("statuses.car_was_sold")} {" | "} {carDetail.currency}{" "}
              {numeral(carDetail.sale_price).format("0,0")}
            </p>
          )}
          {carDetail.status == "for_sale" && (
            <p className="font-semibold whitespace-nowrap">
              {t("statuses.for_sale")}
            </p>
          )}
          {carDetail.status == "live" && currentAuction && (
            <TimeLeftText auction={currentAuction} />
          )}
        </li>
        {(carDetail.status == "for_sale" || carDetail.status == "live") && (
          <li className="basis-auto flex items-center space-x-2 text-white">
            <ArrowUpIcon className="w-5 h-5 hidden sm:block" />
            <p className="opacity-7 hidden sm:block">
              {carDetail.status == "for_sale"
                ? t("car_page.starting_from")
                : t("car_page.high_bid")}
            </p>
            <p className="font-semibold whitespace-nowrap">
              {carDetail.currency}{" "}
              {numeral(
                carDetail.status == "for_sale"
                  ? carDetail.sale_price
                  : carDetail.auction?.latest_bid || 0
              ).format("0,0")}
            </p>
          </li>
        )}
        {currentAuction && carDetail.status == "live" && (
          <li className="basis-auto hidden md:flex items-center space-x-2 text-white">
            <FrameIcon className="w-5 h-5" />
            <p className="opacity-70">{t("car_page.bids")}</p>
            <p className="font-semibold">{currentAuction.number_of_bids}</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AutionStatusBar;
