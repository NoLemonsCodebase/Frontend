import { useEffect, useState } from "react";

export const useSecondsLeft = (endDate?: string) => {
  const endDateUTC = endDate
    ? new Date(endDate).getTime()
    : new Date().getTime();
  const seconds = Math.floor((endDateUTC - new Date().getTime()) / 1000);
  const [secondsLeft, setSecondsLeft] = useState<number>(seconds);

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

  return secondsLeft;
};
