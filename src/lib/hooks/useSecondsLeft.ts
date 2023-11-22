import { useEffect, useState } from "react";

export const useSecondsLeft = (seconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState<number>();

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((currentSecondsLeft) => {
        if (currentSecondsLeft === undefined) {
          return seconds;
        } else if (currentSecondsLeft > 0) {
          return currentSecondsLeft - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return secondsLeft;
};
