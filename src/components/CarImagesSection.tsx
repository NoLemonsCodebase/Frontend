"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  Image,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import cn from "classnames";
import { useWindowSize } from "@uidotdev/usehooks";
import ImageViewer from "./ReactSimpleImageViewer";

const CarImagesSection: React.FC<{
  images: string[];
  previewImages: string[];
}> = ({ images, previewImages }) => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string>();
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
      const container = carouselContainerRef?.current;
      const clickedItem = carouselItemsRef?.current[newIdx];
      if (container && clickedItem) {
        const visibleItemsCount =
          container.offsetWidth / clickedItem.offsetWidth;
        const offsetToCenter =
          (container.offsetWidth - clickedItem.offsetWidth) / 2;
        const isLocatedAfterCenter = clickedItem.offsetLeft > offsetToCenter;
        const newScrollLeft =
          clickedItem.offsetLeft -
          (visibleItemsCount / 2) * clickedItem.offsetWidth +
          clickedItem.offsetWidth / 2;
        container.scroll({
          left: isLocatedAfterCenter ? newScrollLeft : 0,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (isViewerOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.documentElement.style.position = "fixed";
    } else {
      document.documentElement.style.overflow = "scroll";
      document.body.style.position = "static";
      document.documentElement.style.position = "static";
    }
  }, [isViewerOpen]);

  const handleRightClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex + 1;
      if (newIdx >= images.length) {
        newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1;
      if (newIdx < 0) {
        newIdx = images.length - 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <>
      <CarouselProvider
        naturalSlideWidth={windowWidth ? windowWidth : 100}
        naturalSlideHeight={
          windowHeight ? (windowWidth! < 500 ? 300 : windowHeight * 1.2) : 60
        }
        totalSlides={images ? images.length : 0}
        className="w-full flex flex-col sm:flex-row space-x-2"
      >
        <div
          style={{
            maxHeight: "calc(100vh - 200px)",
            flexGrow: 1,
          }}
        >
          <Slider className="h-full">
            {images.map((url, index) => (
              <Slide
                index={index}
                key={index}
                onFocus={() => console.log("focused", index)}
              >
                {(windowWidth || 0) > 700 ? (
                  <ImageWithZoom
                    src={url}
                    isPinchZoomEnabled={false}
                    imageClassName="bg-contain bg-center bg-no-repeat"
                    overlayClassName="bg-contain bg-center bg-no-repeat"
                  />
                ) : (
                  <Image
                    hasMasterSpinner
                    src={url}
                    alt="image"
                    onClick={() => setIsViewerOpen(true)}
                    className="max-h-112 md:max-h-96 object-contain"
                  />
                )}
              </Slide>
            ))}
          </Slider>
        </div>
        <div
          className="relative overflow-y-scroll overflow-x-scroll w-full sm:w-40 md:w-72 lg:w-96"
          ref={(el) => (carouselContainerRef.current = el)}
          style={{
            maxHeight: "calc(100vh - 200px)",
          }}
        >
          <div className="flex sm:grid grid-cols-1 lg:grid-cols-2 gap-1.5 justify-center">
            {previewImages &&
              previewImages.map((image, idx) => (
                <Dot
                  slide={idx}
                  onClick={() => handleSelectedImageChange(idx)}
                  key={idx}
                >
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                      paddingBottom: "60%",
                    }}
                    className={cn(
                      "relative h-0 w-40 sm:w-full border-2 border-gray-50",
                      "bg-center bg-no-repeat bg-cover",
                      selectedImageIndex === idx && "border-green-400"
                    )}
                    ref={(el) => (carouselItemsRef.current[idx] = el)}
                  />
                </Dot>
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
        </div>
      </CarouselProvider>
      {isViewerOpen && images && (
        <div style={{ zIndex: 1000 }}>
          <ImageViewer
            src={images}
            currentIndex={selectedImageIndex}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={() => setIsViewerOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default CarImagesSection;
