import { ICar } from "@/lib/types";
import { ArrowUpIcon, ClockIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import numeral from "numeral";
import AuctionBid from "./AuctionBid";

interface IAutionStatusBarProps {
  carDetail: ICar;
}

export default function StatusBar({
  carDetail,
}: IAutionStatusBarProps): JSX.Element {
  // for translation
  const t = useTranslations("default");

  // info we need from carDetail
  const {
    auction: currentAuction,
    status,
    sale_price,
    currency,
    id,
  } = carDetail;

  const is_comming = status == "created" || status == "unverified";

  return (
    <div className="rounded bg-black bg-opacity-80 flex-grow items-center">
      <div className="flex items-center justify-between md:justify-normal  px-4 py-3">
        <div className=" flex items-center text-white">
          {status != "for_sale" && <ClockIcon className="w-5 h-5 mr-1" />}
          {is_comming && (
            <p className="font-semibold whitespace-nowrap">
              Coming soon on{" "}
              <a
                target="_blank"
                className=" underline text-blue-300"
                href="https://collectingcars.com/buy"
              >
                Collecting Cars
              </a>
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

          {status == "for_sale" && (
            <p className="font-semibold ml-2 whitespace-nowrap">
              {currency} {numeral(sale_price).format("0,0")}
            </p>
          )}

          {/* {status == "live" && currentAuction && (
            <AuctionTimeLeft
              carId={id}
              timeEnding={currentAuction?.time_ending}
            />
          )} */}

          {status == "live" && (
            <AuctionBid
              carId={id}
              currency={currency}
              currentAuction={currentAuction}
            />
          )}
        </div>

        {/* {currentAuction &&
          status == "live" &&
          currentAuction.number_of_bids > 1 && (
            <div className="basis-auto hidden md:flex items-center space-x-2 text-white">
              <p className="opacity-70 ml-2">Offers</p>
              <p className="font-semibold">{currentAuction.number_of_bids}</p>
            </div>
          )} */}
      </div>
    </div>
  );
}
