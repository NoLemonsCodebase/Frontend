"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface TimeLeftProps {
  timeEnding?: string;
}

export default function TimeLeft({ timeEnding }: TimeLeftProps) {
  const t = useTranslations("default");

  const [secondsLeft, setSecondsLeft] = useState<number>(-10);

  useEffect(() => {
    const endDateUTC = timeEnding
      ? new Date(timeEnding).getTime()
      : new Date().getTime();
    const seconds = Math.floor((endDateUTC - new Date().getTime()) / 1000);
    setSecondsLeft(seconds);
  }, [timeEnding]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((currentSecondsLeft) => {
        if (currentSecondsLeft > 0) {
          return currentSecondsLeft - 1;
        } else {
          clearInterval(interval);
          return -1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // to show in the first render
  if (secondsLeft == -10) return "Checking...";

  if (secondsLeft <= 0) return t("statuses.auction_ended");

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
    return (
      <div className=" min-w-[130px]">{`${days} ${t(
        "car_page.days"
      )} ${hourPart}`}</div>
    );
  } else if (days == 1) {
    return <div className=" min-w-[130px]">{`${days} day ${hourPart}`}</div>;
  } else {
    return <div className=" min-w-[70px]">{hourPart}</div>;
  }
}
