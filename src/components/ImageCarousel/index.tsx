import * as React from "react";
import Fancybox from "./Fancybox";
import Carousel from "./Carousel";
import Image from "next/image";
import { Carousel as ImageSlider } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface IImageCarouselProps {
  images: string[];
  previewImages: string[];
}

const ImageCarousel: React.FunctionComponent<IImageCarouselProps> = ({
  images,
  previewImages,
}) => {
  //memoize images and previewImages
  images = React.useMemo(() => images, [images]);
  previewImages = images.slice(1, 6);

  //...
  return (
    <Fancybox
      // Sample options
      options={{
        Carousel: {
          infinite: false,
        },
      }}
    >
      <ImageSlider showThumbs={false} showIndicators={false} showStatus={false}>
        {images.slice(0, 6).map((image, index) => (
          <div
            key={index}
            className="relative"
            data-src={image}
            data-fancybox="gallery"
          >
            <Image
              alt=""
              src={image}
              width={1100}
              height={720}
              // style={{ maxHeight: 300, objectFit: "contain" }}
            />
            {index == 5 && (
              <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center text-white bg-black font-semibold text-[8px] text-base text-center bg-opacity-60">
                View all photos ({images.length})
              </div>
            )}
          </div>
        ))}
      </ImageSlider>
      {images.slice(6).map((image, index) => (
        <div key={index} data-src={image} data-fancybox="gallery" />
      ))}
      <div className="flex space-x-2 align-center justify-center flex-grow overflow-x-scroll">
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
              className={
                "relative h-0 w-20 sm:w-full border-2 border-gray-50 bg-center bg-no-repeat bg-cover"
              }
            >
              {idx == 4 && (
                <div className="absolute w-full h-full flex items-center justify-center text-white bg-black font-semibold text-[8px] sm:text-xs lg:text-base text-center bg-opacity-60">
                  All photos ({images.length})
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </Fancybox>
  );
};

export default React.memo(ImageCarousel);
