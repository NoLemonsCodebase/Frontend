import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import FancyCarousel from "./fancy-carousel";

type CarImage = {
  image: string;
};

type MobileGalleryProps = {
  carImages: CarImage[];
};

export default function Gallery({ carImages }: MobileGalleryProps) {
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const [curSlider, setCurSlider] = useState<number>(0);

  const all_images = useMemo(
    () => carImages.map((ob) => ob.image),
    [carImages]
  );

  const preview_images = all_images.slice(1, 9);

  function openGalleryHandler(cur: number) {
    setCurSlider(cur);
    setShowGallery(true);
  }

  function closeGalleryHandler() {
    setShowGallery(false);
  }

  return (
    <div className=" flex flex-col overflow-hidden lg:flex-row gap-4">
      <div
        onClick={() => openGalleryHandler(0)}
        className=" cursor-pointer rounded-md overflow-hidden lg:basis-[70%]"
      >
        <Image src={all_images[0]} alt="main image" width={1110} height={740} />
      </div>
      <div className="overflow-x-scroll lg:overflow-auto basis-[30%]">
        <div className=" grid grid-cols-8 lg:grid-cols-2 h-full gap-2 w-[300%] lg:w-auto ">
          {preview_images.map((img, idx) => (
            <div
              onClick={() => openGalleryHandler(idx + 1)}
              key={idx}
              className="rounded-md overflow-hidden relative cursor-pointer"
            >
              <Image
                className=" h-full object-cover"
                src={img}
                alt="prev image"
                width={1110}
                height={740}
              />
              {idx == 7 && (
                <div className="absolute inset-0 text-white bg-black font-semibold flex items-center justify-center text-[8px] lg:text-base bg-opacity-60">
                  View all photos ({all_images.length})
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {showGallery && (
          <FancyCarousel
            initial={curSlider}
            onCloseGallery={closeGalleryHandler}
            allImages={all_images}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
