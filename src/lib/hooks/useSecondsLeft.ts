import { useEffect, useState } from "react";

export const useSecondsLeft = (seconds: number) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((currentSecondsLeft) => {
        if (currentSecondsLeft > 0) {
          return currentSecondsLeft - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return secondsLeft;
};
