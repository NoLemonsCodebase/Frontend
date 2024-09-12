import React, { useRef, useEffect, PropsWithChildren, useMemo } from "react";

import { Carousel as NativeCarousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";

import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

import type { OptionsType } from "@fancyapps/ui/types/Carousel/options";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface Props {
  options?: Partial<OptionsType>;
  carImages: any;
}

// const defaults: Partial<OptionsType> = {
//   Dots: false,
//   // Thumbs: {
//   //   type: "modern",
//   // },
// };

function Carousel(props: PropsWithChildren<Props>) {
  const all_images = useMemo(
    () => props.carImages.map((ob: any) => ob.image),
    [props.carImages]
  );

  // const preview_images = all_images.slice(1, 9);

  const mainContainerRef: any = useRef(null);
  const navContainerRef = useRef(null);

  // const mainCarouselRef = useRef<any>(null);

  let mainCarousel: any; // store the main carousel instance

  useEffect(() => {
    const mainContainer = mainContainerRef.current;
    const navContainer = navContainerRef.current;

    if (!mainContainer || !navContainer) return;

    const mainOptions: Partial<OptionsType> = {
      Dots: false,
      infinite: false,
    };

    mainCarousel = new NativeCarousel(mainContainer, mainOptions);
    // mainCarouselRef.current = mainCarousel;
    console.log(mainCarousel);
    const navOptions: Partial<OptionsType> = {
      infinite: false,
      transition: false,
      center: true,
      fill: true,
      dragFree: true,
      Dots: false,

      Sync: {
        target: mainCarousel,
      },
    };

    const navCarousel = new NativeCarousel(navContainer, navOptions);

    return () => {
      mainCarousel.destroy();
      navCarousel.destroy();
    };
  }, []);

  function handleGoToSlide(slideNumber: number) {
    console.log(mainCarousel);
    // const mainCarousel = mainCarouselRef.current;

    // if (mainCarousel) {
    //   mainCarousel.slideTo(slideNumber); // Use the carousel instance to navigate to a slide
    // }
  }
  return (
    <div className=" fixed bg-black/80 inset-0 w-full z-50">
      <button
        onClick={() => handleGoToSlide(50)}
        className=" text-2xl group w-14 h-14  bg-gray-600/30 rounded-sm  text-white absolute right-0 top-0"
      >
        <IoClose className=" m-auto group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <div className="my-carousel" ref={mainContainerRef}>
        {all_images.map((img: string, idx: number) => (
          <div key={idx} className="f-carousel__slide">
            <Image
              key={idx}
              src={img}
              alt={`nolemons-img-${idx}`}
              width={1110}
              height={740}
            />
          </div>
        ))}
      </div>

      <div className="f-carousel nav-carousel" ref={navContainerRef}>
        {all_images.map((img: string, idx: number) => (
          <div key={idx} className="f-carousel__slide">
            <Image
              key={idx}
              src={img}
              alt={`nolemons-img-${idx}`}
              width={500}
              height={300}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
