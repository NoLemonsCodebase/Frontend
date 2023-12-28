/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useRef, useEffect } from "react";
import cn from "classnames";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import Fancybox from "./ImageCarousel/Fancybox";

const CarImagesSection: React.FC<{
  images: string[];
  previewImages: string[];
}> = ({ images }) => {
  const previewImages = images.slice(1, 9);

  return (
    <Fancybox className="w-full flex space-x-2">
      {images.length > 0 && (
        <a
          className="w-[70%] cursor-pointer"
          data-fancybox="gallery"
          data-src={images[0]}
        >
          <div
            style={{
              backgroundImage: `url(${images[0]})`,
              paddingBottom: "60%",
            }}
            className={cn("h-0 w-full", "bg-center bg-no-repeat bg-cover")}
          />
        </a>
      )}

      <div className="grid grid-cols-2 gap-1.5 justify-center flex-grow">
        {previewImages.map((image, idx) => (
          <a
            key={idx}
            data-fancybox="gallery"
            data-src={image}
            className="cursor-pointer"
          >
            <div
              style={{
                backgroundImage: `url(${image})`,
                paddingBottom: "65%",
              }}
              className={cn(
                "relative h-0 w-40 sm:w-full border-2 border-gray-50",
                "bg-center bg-no-repeat bg-cover"
              )}
            >
              {idx == 7 && (
                <div className="absolute w-full h-full flex items-center justify-center text-white bg-black font-semibold text-[8px] sm:text-xs lg:text-base text-center bg-opacity-60">
                  All photos ({images.length})
                </div>
              )}
            </div>
          </a>
        ))}
        {images.slice(9).map((image, idx) => (
          <a
            key={idx}
            data-fancybox="gallery"
            data-src={image}
            className="hidden"
          />
        ))}
      </div>
      {/* <ButtonBack
          className="fixed top-1/2 bg-white p-1 rounded-full left-0 transform -translate-y-1/2 bg-opacity-60"
          onClick={handleLeftClick}
        >
          <HeroIcon>outline/chevron-left</HeroIcon>
        </ButtonBack>
        <ButtonNext
          className="fixed top-1/2 bg-white p-1 rounded-full right-0 transform -translate-y-1/2  bg-opacity-60"
          onClick={handleRightClick}
        >
          <HeroIcon>outline/chevron-right</HeroIcon>
        </ButtonNext> */}
    </Fancybox>
  );
};

export default CarImagesSection;
