import React, {
  useRef,
  useEffect,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";

import { Carousel as NativeCarousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";

// import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

import type { OptionsType } from "@fancyapps/ui/types/Carousel/options";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import ZoomEffect from "../anim/zoom";

interface Props {
  options?: Partial<OptionsType>;
  allImages: any;
  onCloseGallery: any;
  initial: number;
}

function FancyCarousel(props: PropsWithChildren<Props>) {
  // const preview_images = all_images.slice(1, 9);

  const mainContainerRef: any = useRef(null);
  const navContainerRef = useRef(null);
  const mainCarouselRef = useRef<any>(null);

  let mainCarousel: any; // store the main carousel instance

  useEffect(() => {
    const mainContainer = mainContainerRef.current;
    const navContainer = navContainerRef.current;

    if (!mainContainer || !navContainer) return;

    const mainOptions: Partial<OptionsType> = {
      slidesPerPage: 1,
      Dots: false,
      infinite: false,
      transition: "classic",
      initialPage: props.initial,
    };

    mainCarousel = new NativeCarousel(mainContainer, mainOptions);
    mainCarouselRef.current = mainCarousel;

    const navOptions: Partial<OptionsType> = {
      infinite: false,
      transition: false,
      center: true,
      fill: true,
      dragFree: false,
      Dots: false,
      Navigation: false,

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

  // function handleGoToSlide(slideNumber: number) {
  //   console.log(mainCarousel);
  //   // const mainCarousel = mainCarouselRef.current;

  //   // if (mainCarousel) {
  //   //   mainCarousel.slideTo(slideNumber); // Use the carousel instance to navigate to a slide
  //   // }
  // }

  return (
    <div className=" fixed bg-black/80 inset-0 w-full z-50 flex flex-col items-center justify-center show-slider">
      <button
        onClick={props.onCloseGallery}
        className=" text-2xl group w-14 h-14  bg-gray-600/30 rounded-sm  text-white absolute right-0 top-0"
      >
        <IoClose className=" m-auto group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <div className="my-carousel" ref={mainContainerRef}>
        {props.allImages.map((img: string, idx: number) => (
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
        {props.allImages.map((img: string, idx: number) => (
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

export default FancyCarousel;
