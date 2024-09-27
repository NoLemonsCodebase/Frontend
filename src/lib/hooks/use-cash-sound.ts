import React, { useEffect, useState } from "react";

export default function useSoundCash() {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const audio = new Audio("/sounds/cash-sound.mp3");

    if (play) {
      audio.play().catch((error) => {
        console.error("Failed to play sound:", error);
      });
    } else {
      audio.pause();
    }

    // // Cleanup function to stop audio when component unmounts or when play state changes
    return () => {
      audio.pause();
    };
  }, [play]);

  return { setPlay };
}
