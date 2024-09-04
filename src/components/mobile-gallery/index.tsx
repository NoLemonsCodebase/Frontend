import Image from "next/image";
import SwiperSlider from "./swiper-slider";
import { useMemo, useState } from "react";

type CarImage = {
  image: string;
};

type MobileGalleryProps = {
  carImages: CarImage[];
};

export default function MobileGallery({ carImages }: MobileGalleryProps) {
  const [showGallery, setShowGallery] = useState<boolean>(false);

  const all_images = useMemo(
    () => carImages.map((ob) => ob.image),
    [carImages]
  );

  const preview_images = all_images.slice(0, 8);
  console.log(preview_images);
  function openGalleryHandler() {
    setShowGallery(true);
  }

  function closeGalleryHandler() {
    setShowGallery(false);
  }

  return (
    <div className=" flex flex-col overflow-hidden lg:flex-row gap-4">
      <div
        onClick={openGalleryHandler}
        className=" cursor-pointer rounded-md overflow-hidden lg:basis-[70%]"
      >
        <Image src={all_images[0]} alt="main image" width={1110} height={740} />
      </div>
      <div className="overflow-x-scroll basis-[30%]">
        <div className=" flex gap-2 w-[200%] md:w-auto lg:flex-wrap">
          {preview_images.map((img, idx) => (
            <div
              onClick={openGalleryHandler}
              key={idx}
              className=" basis-[16%] lg:basis-[45%] rounded-md overflow-hidden relative cursor-pointer"
            >
              <Image src={img} alt="prev image" width={1110} height={740} />
              {idx == 7 && (
                <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-white bg-black font-semibold text-[8px] text-base text-center bg-opacity-60">
                  View all photos ({all_images.length})
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {showGallery && (
        <SwiperSlider
          onCloseGallery={closeGalleryHandler}
          allImages={all_images}
        />
      )}
    </div>
  );
}
