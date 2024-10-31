import { useMemo } from "react";

import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Fancybox from "../fancybox";
import Loader from "../ui/loader";
import OurImage from "../our-image";
//============
interface ImageCarouselProps {
  carImages: string[];
  isVerified: boolean;
  title: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  title,
  carImages,
  isVerified,
}) => {
  const { width } = useWindowSize();

  //memoize images and previewImages
  const all_images = useMemo(() => carImages, [carImages]);

  if (!width) return <Loader />;

  let preview_images_render = all_images.slice(1, 4);

  if (width > 1024) {
    preview_images_render = all_images.slice(1, 9);
  }

  let preview_images_length = preview_images_render.length;
  // ="gallery"

  return (
    <Fancybox
      delegate='[data-fancybox="gallery"]'
      options={{
        mainClass: "our-gallery",

        // hideScrollbar: true,
        Toolbar: {
          enabled: true,
        },
        Thumbs: {
          type: "classic",
        },
      }}
    >
      <div className="flex flex-col lg:flex-row gap-4 ">
        <button
          data-fancybox="gallery"
          data-src="#nolemons-img-0"
          className="rounded-md overflow-hidden lg:basis-[70%] relative"
        >
          <OurImage
            src={all_images[0]}
            alt={`image 1 of car ${title}`}
            width={1110}
            height={740}
          />
          {isVerified && (
            <div className="flex items-start absolute bottom-2 right-2">
              <span className="inline-flex items-center py-1 px-1.5 md:py-2 md:px-3 rounded-md text-sm font-medium bg-opacity-40 bg-black text-white">
                <FaCheck className=" mr-2 bg-green-500 text-[20px] p-1 rounded-md text-white" />
                verified
                <span className="hidden xl:block ml-0.5">by NoLemons</span>
              </span>
            </div>
          )}
        </button>

        <div className="basis-[30%] grid grid-cols-3 lg:grid-cols-2 gap-2">
          {preview_images_render.map((img: string, idx: number) => (
            <button
              key={idx}
              data-fancybox="gallery"
              data-src={`#nolemons-img-${idx + 1}`}
              className="rounded-md overflow-hidden relative cursor-pointer"
            >
              <OurImage
                classes=" w-full h-full object-cover"
                src={img}
                alt={`image ${idx + 1} of car ${title}`}
                width={1110}
                height={740}
              />

              {idx + 1 == preview_images_length && (
                <div className="absolute inset-0 text-white bg-black font-semibold flex items-center justify-center text-[8px] lg:text-base bg-opacity-60">
                  View all photos ({all_images.length})
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {all_images
        .slice(preview_images_length + 1)
        .map((img: string, idx: number) => (
          <button
            key={idx}
            data-fancybox="gallery"
            data-src={`#nolemons-img-${idx + preview_images_length + 1}`}
            className="hidden"
          >
            <Image src={img} alt="prev image" width={500} height={300} />
          </button>
        ))}

      {all_images.map((img: string, idx: number) => (
        <div
          key={idx}
          style={{ display: "none", position: "relative" }}
          id={`nolemons-img-${idx}`}
        >
          <div className="loader-sppiner absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"></div>
          <OurImage
            src={img}
            alt={`image ${idx} of car ${title}`}
            width={1110}
            height={740}
            classes=" relative"
          />
        </div>
      ))}
    </Fancybox>
  );
};

export default ImageCarousel;
