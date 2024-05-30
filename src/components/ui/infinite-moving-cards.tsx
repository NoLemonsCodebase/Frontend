"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from 'next/image';

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
      <div className="relative flex flex-wrap justify-center items-center space-x-10 space-y-5">
        <Image className="mx-5" src="/images/car-logos/aston.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/audi.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/bentley.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/bmw.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/ferrari.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/ford.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/gmc.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/jaguar.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/jeep.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/lamborghini.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/mercedes.png" width={100} height={100} alt="logo" />
        <Image className="mx-5" src="/images/car-logos/porsche.png" width={100} height={100} alt="logo" />
      </div>
      {/* <div className="relative flex flex-row items-center">      
        <Image className="ml-5 mr-10" src="/images/car-logos/aston.png" width={200} height={200} alt="logo" />
        <Image src="/images/car-logos/audi.png" width={200} height={200} alt="logo" />
        <Image src="/images/car-logos/bentley.png" width={200} height={200} alt="logo" />
        <Image src="/images/car-logos/bmw.png" width={200} height={200} alt="logo" />
        <Image src="/images/car-logos/ferrari.png" width={200} height={200} alt="logo" />
        <Image className="ml-5 mr-10" src="/images/car-logos/ford.png" width={200} height={200} alt="logo" />
        <Image src="/images/car-logos/gmc.png" width={200} height={200} alt="logo" />
        <Image src="/images/car-logos/jaguar.png" width={200} height={200} alt="logo" />
        <Image className="ml-5 mr-10" src="/images/car-logos/jeep.png" width={200} height={200} alt="logo" />
        <Image src="/images/car-logos/lamborghini.png" width={200} height={200} alt="logo" />
        <Image src="/images/car-logos/mercedes.png" width={200} height={200} alt="logo" />
        <Image src="/images/car-logos/porsche.png" width={200} height={200} alt="logo" />
      </div> */}
      </ul>
    </div>
  );
};
