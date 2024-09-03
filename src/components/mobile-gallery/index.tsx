import Image from "next/image";
import SwiperSlider from "./swiper-slider";
import { useState } from "react";

type CarImage = {
  image: string;
};

type MobileGalleryProps = {
  carImages: CarImage[];
};

export default function MobileGallery({ carImages }: MobileGalleryProps) {
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const all_images = carImages.map((ob) => ob.image);

  function openGalleryHandler() {
    setShowGallery(true);
  }

  function closeGalleryHandler() {
    setShowGallery(false);
  }

  return (
    <div>
      <div onClick={openGalleryHandler} className=" cursor-pointer">
        <Image src={all_images[0]} alt="main image" width={1110} height={740} />
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
