"use client";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";

// import required modules
import {
  FreeMode,
  Navigation,
  Thumbs,
  Pagination,
  EffectCreative,
} from "swiper/modules";
import Image from "next/image";

import { IoClose } from "react-icons/io5";

export default function SwiperSlider({ allImages, onCloseGallery }: any) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = "hidden";
    }
    return () => {
      if (html) {
        html.style.overflow = "auto"; // Reset on unmount
      }
    };
  }, []);

  return (
    <div className=" py-4 flex flex-col items-center justify-center md:justify-between fixed bg-black/90 inset-0 z-20">
      <button
        onClick={onCloseGallery}
        className=" text-2xl group w-14 h-14  bg-gray-600/30 rounded-sm  text-white absolute right-0 top-0"
      >
        <IoClose className=" m-auto group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{
          type: "fraction",
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500],
          },
          next: {
            shadow: true,
            translate: ["120%", 0, -500],
          },
        }}
        modules={[FreeMode, Navigation, Thumbs, Pagination, EffectCreative]}
        className="main-swiper"
      >
        {allImages.map((img: string, idx: number) => (
          <SwiperSlide key={idx}>
            <Image
              width={1170}
              height={600}
              alt={`car-image${idx}`}
              src={img}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP09Q35DwADzAHvIGCw/QAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="small-swiper"
      >
        {allImages.map((img: string, idx: number) => (
          <SwiperSlide key={idx}>
            <Image
              width={600}
              height={300}
              alt={`car-image${idx}`}
              src={img}
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP09Q35DwADzAHvIGCw/QAAAABJRU5ErkJggg=="
              placeholder="blur"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
