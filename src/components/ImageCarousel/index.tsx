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
  return (
    <div>
      <Fancybox
        // Sample options
        options={{
          Carousel: {
            infinite: false,
          },
        }}
      >
        <Carousel
          // Sample options
          options={{ infinite: false }}
        >
          {images.map((image, index) => (
            <div
              className="f-carousel__slide"
              data-fancybox="gallery"
              data-src={image}
              data-thumb-src={previewImages[index]}
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
      </Fancybox>
    </div>
  );
};

export default React.memo(ImageCarousel);
