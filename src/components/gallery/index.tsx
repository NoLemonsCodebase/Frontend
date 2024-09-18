// import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";
import FancyCarousel from "./fancy-carousel";
import PreviewImagesMobile from "./preview-images-mobile";
import { useWindowSize } from "@uidotdev/usehooks";
import PreviewImagesDesktop from "./preview-images-desktop";
import Loader from "../ui/loader";
import { FaCheck } from "react-icons/fa";
import { useTranslations } from "next-intl";

type CarImage = {
  image: string;
};

type MobileGalleryProps = {
  carImages: CarImage[];
  isVerified: boolean;
};

export default function Gallery({ carImages, isVerified }: MobileGalleryProps) {
  const [showGallery, setShowGallery] = useState<boolean>(false);
  const [curSlider, setCurSlider] = useState<number>(0);
  const t = useTranslations("default.car_page");

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
        className=" cursor-pointer rounded-md overflow-hidden lg:basis-[70%] relative"
      >
        <Image src={all_images[0]} alt="main image" width={1110} height={740} />
        {isVerified && (
          <div className="flex items-start absolute bottom-2 right-2">
            <span className="inline-flex items-center px-2 py-1 rounded-md text-sm font-medium bg-green-100/20 text-white">
              <FaCheck className=" mr-2 bg-green-700 text-[20px] p-1 rounded-md text-white" />
              {t("verified")}
              <span className="hidden xl:block ml-0.5">{t("by_nolemons")}</span>
            </span>
          </div>
        )}
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
