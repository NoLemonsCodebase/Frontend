import React, { useEffect, useState } from "react";

export default function useSoundCash() {
  const audio = new Audio("/sounds/cash-sound.mp3");

  useEffect(() => {
    const playSound = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.error("Failed to play sound:", error);
      }
    };

    playSound();

    // Cleanup function to stop audio when component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio to start
    };
  }, []); // Dependency array includes audio, but it won't change
}
