import { useMemo } from "react";
import Fancybox from "./Fancybox";

import Image from "next/image";

interface IImageCarouselProps {
  images: string[];
  previewImages: string[];
}

export default function ImageCarousel({ carImages }: any) {
  //memoize images and previewImages
  const all_images = useMemo(
    () => carImages.map((ob: any) => ob.image),
    [carImages]
  );

  const preview_images = all_images.slice(1, 9);
  //...
  return (
    <Fancybox
      options={{
        mainClass: "our-gallery",
        Toolbar: {
          enabled: true,
        },
        hideScrollbar: true,
        Thumbs: {
          type: "classic",
        },
      }}
    >
      <div className="flex flex-col lg:flex-row gap-4">
        <button
          data-fancybox="gallery"
          data-src="#nolemons-img-0"
          className="rounded-md overflow-hidden lg:basis-[70%]"
        >
          <Image
            src={all_images[0]}
            alt="main image"
            width={1110}
            height={740}
          />
        </button>
        <div className="overflow-x-scroll lg:overflow-auto basis-[30%]">
          <div className=" grid grid-cols-8 lg:grid-cols-2 h-full gap-2 w-[300%] lg:w-auto ">
            {preview_images.map((img: string, idx: number) => (
              <button
                key={idx}
                data-fancybox="gallery"
                data-src={`#nolemons-img-${idx + 1}`}
                className="rounded-md overflow-hidden relative cursor-pointer"
              >
                <Image
                  className=" w-full h-full object-cover"
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
              </button>
            ))}
          </div>
        </div>
      </div>
      {all_images.slice(9).map((img: string, idx: number) => (
        <button
          key={idx}
          data-fancybox="gallery"
          data-src={`#nolemons-img-${idx + 9}`}
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
          <Image
            src={img}
            alt={`nolemons-${idx}`}
            width={1110}
            height={740}
            className=" relative"
          />
        </div>
      ))}
    </Fancybox>
  );
}
