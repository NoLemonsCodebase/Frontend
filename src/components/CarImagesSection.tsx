/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-img-element */

"use client";
import Image from "next/image";
import React from "react";
import Fancybox from "./ImageCarousel/Fancybox";
import { cn } from "@/lib/utils";

const CarImagesSection: React.FC<{
  images: string[];
  previewImages: string[];
}> = ({ images }) => {
  const previewImages = images.slice(1, 9);

  return (
    <Fancybox className="w-full flex space-x-2">
      {images.length > 0 && (
        <a
          className=" basis-[70%]  cursor-pointer relative"
          data-fancybox="gallery"
          href={images[0]}
        >
          <Image
            className=" absolute left-0 top-0 w-full h-full object-cover bg-center"
            src={images[0]}
            width={1100}
            height={720}
            alt="card image"
            priority
          />
        </a>
      )}

      <div className="grid grid-cols-2 gap-1.5 justify-center flex-[30%]">
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
    </Fancybox>
  );
};

export default CarImagesSection;
