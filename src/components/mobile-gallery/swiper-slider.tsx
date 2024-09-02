"use client";

import React, { SetStateAction, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function SwiperSlider({ allImages }: { allImages: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className=" grid place-content-center fixed bg-black inset-0 z-20">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="main-swiper"
      >
        {allImages.map((img, idx) => (
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
        spaceBetween={10}
        slidesPerView="auto"
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="small-swiper"
      >
        {allImages.map((img, idx) => (
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
