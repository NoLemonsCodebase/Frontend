import * as React from "react";
import { ClockIcon, ArrowUpIcon, FrameIcon } from "@radix-ui/react-icons";
import { useSecondsLeft } from "@/lib/hooks/useSecondsLeft";

interface IAutionStatusBarProps {
  auctionInfo: {
    endDate: string;
    lastBid: number;
    numBids: number;
  };
}

const AutionStatusBar: React.FunctionComponent<IAutionStatusBarProps> = ({
  auctionInfo: { lastBid, endDate, numBids },
}) => {
  const secondsLeft = useSecondsLeft(endDate);

  // X days/day if X > 1, else h:MM:SS format
  const timeLeftText = () => {
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
      return [`${days} days`, hourPart];
    }
    if (days == 1) {
      return [`${days} day`, hourPart];
    }
    return [hourPart, ""];
  };

  return (
    <div className="rounded bg-black bg-opacity-80 flex flex-grow items-center">
      <ul className="flex items-center justify-between space-x-6 px-4 py-2">
        <li className="basis-auto flex items-center space-x-2 text-white">
          <ClockIcon className="w-5 h-5" />
          <p className="hidden sm:block opacity-70">Time Left</p>
          {secondsLeft == 0 ? (
            <p className="font-semibold">--:--:--</p>
          ) : (
            <>
              <p className="font-semibold whitespace-nowrap">
                {timeLeftText()[0]}
              </p>
              <p className="hidden sm:block font-semibold whitespace-nowrap">
                {timeLeftText()[1]}
              </p>
            </>
          )}
        </li>
        <li className="basis-auto flex items-center space-x-2 text-white">
          <ArrowUpIcon className="w-5 h-5 hidden sm:block" />
          <p className="opacity-7 hidden sm:block">High bid</p>
          <p className="font-semibold whitespace-nowrap">AED {lastBid}</p>
        </li>
        <li className="basis-auto hidden md:flex items-center space-x-2 text-white">
          <FrameIcon className="w-5 h-5" />
          <p className="opacity-70">Bids</p>
          <p className="font-semibold">{numBids}</p>
        </li>
      </ul>
    </div>
  );
};

export default AutionStatusBar;
