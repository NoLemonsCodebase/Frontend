import * as React from "react";
import Fancybox from "./Fancybox";
import Carousel from "./Carousel";
import Image from "next/image";

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
      <div className="flex flex-col">
        <Carousel
          // Sample options
          options={{ infinite: false }}
        >
          {images.map((image, index) => (
            <div
              className="f-carousel__slide"
              data-fancybox="gallery"
              data-src={image}
              key={index}
            >
              <Image
                alt=""
                src={image}
                width="400"
                height="300"
                style={{ maxHeight: 280, objectFit: "contain" }}
              />
            </div>
          ))}
        </Carousel>
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
      </div>
    </Fancybox>
  );
};

export default React.memo(ImageCarousel);
