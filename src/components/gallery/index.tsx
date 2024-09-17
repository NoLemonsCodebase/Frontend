// import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import FancyCarousel from "./fancy-carousel";
import PreviewImagesMobile from "./preview-images-mobile";
import { useWindowSize } from "@uidotdev/usehooks";
import PreviewImagesDesktop from "./preview-images-desktop";
import Loader from "../ui/loader";

type CarImage = {
  image: string;
};

type MobileGalleryProps = {
  carImages: CarImage[];
};

export default function Gallery({ carImages }: MobileGalleryProps) {
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const [curSlider, setCurSlider] = useState<number>(0);
  const { width } = useWindowSize();

  // const curWidth = width ?? 100;

  const all_images = useMemo(
    () => carImages.map((ob) => ob.image),
    [carImages]
  );

  function openGalleryHandler(cur: number) {
    setCurSlider(cur);
    setShowGallery(true);
  }

  function closeGalleryHandler() {
    setShowGallery(false);
  }

  if (!width) return <Loader />;
  const screen: "desktop" | "mobile" = width > 1024 ? "desktop" : "mobile";

  return (
    <div className=" flex flex-col overflow-hidden lg:flex-row gap-4">
      <div
        onClick={() => openGalleryHandler(0)}
        className=" cursor-pointer rounded-md overflow-hidden lg:basis-[70%]"
      >
        <Image src={all_images[0]} alt="main image" width={1110} height={740} />
      </div>
      {screen == "desktop" ? (
        <PreviewImagesDesktop
          images={all_images}
          openGallery={openGalleryHandler}
        />
      ) : (
        <PreviewImagesMobile
          images={all_images}
          openGallery={openGalleryHandler}
        />
      )}

      {showGallery && (
        <FancyCarousel
          screen={screen}
          initial={curSlider}
          onCloseGallery={closeGalleryHandler}
          allImages={all_images}
        />
      )}
    </div>
  );
}
