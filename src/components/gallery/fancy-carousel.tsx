import { PropsWithChildren, useEffect, useRef, useState } from "react";

import { Carousel as NativeCarousel } from "@fancyapps/ui";
import "@fancyapps/ui/dist/carousel/carousel.css";

import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";

import type { OptionsType } from "@fancyapps/ui/types/Carousel/options";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface Props {
  options?: Partial<OptionsType>;
  allImages: any;
  onCloseGallery: any;
  initial: number;
  screen: "desktop" | "mobile";
}

function FancyCarousel(props: PropsWithChildren<Props>) {
  const mainContainerRef: any = useRef(null);
  const navContainerRef = useRef(null);

  const mainCarouselRef = useRef<any>(null);

  const [curIndex, setCurentIndex] = useState(1);
  // let mainCarousel: any; // store the main carousel instance

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = "hidden";
    }
    return () => {
      if (html) {
        html.style.overflow = "unset"; // Reset on unmount
      }
    };
  }, []);

  useEffect(() => {
    const mainContainer = mainContainerRef.current;
    const navContainer = navContainerRef.current;

    if (!mainContainer || !navContainer) return;

    const mainOptions: Partial<OptionsType> = {
      Dots: false,
      slidesPerPage: 1,
      // slides:
      transition: "classic",
      initialPage: props.initial,
      Panzoom: {
        zoom: true,
        on: {
          click: (panzoom, event) => {
            event.preventDefault();

            if (panzoom.targetScale > 1) {
              panzoom.zoomTo(0.5);
            } else {
              panzoom.zoomTo(2, { event });
            }
          },
        },
      },
      on: {
        change: (instance) => {
          setCurentIndex(instance.page + 1);
        },
      },
    };

    const mainCarousel = new NativeCarousel(mainContainer, mainOptions);
    mainCarouselRef.current = mainCarousel;

    const navOptions: Partial<OptionsType> = {
      infinite: false,
      transition: false,
      center: true,
      fill: true,
      slidesPerPage: 1,
      dragFree: false,
      Navigation: false,
      Dots: false,

      Sync: {
        target: mainCarousel,
      },
    };

    const navCarousel = new NativeCarousel(navContainer, navOptions);

    // Add keyboard navigation
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        mainCarousel.slideNext(); // Navigate to the next slide
      } else if (event.key === "ArrowLeft") {
        mainCarousel.slidePrev(); // Navigate to the previous slide
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      mainCarousel.destroy();
      navCarousel.destroy();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className=" fixed bg-black/80 inset-0 w-full z-50 flex flex-col items-center justify-center show-slider">
      <div className="h-14 min-w-[80px] px-3 absolute bg-gray-600/30 left-0 top-0 text-white flex justify-center items-center">
        {curIndex} / {props.allImages?.length}
      </div>
      <button
        onClick={props.onCloseGallery}
        className=" text-2xl group w-14 h-14  bg-gray-600/30 rounded-sm  text-white absolute right-0 top-0"
      >
        <IoClose className=" m-auto group-hover:rotate-180 transition-transform duration-300" />
      </button>
      <div id="my-carousel" ref={mainContainerRef}>
        {props.allImages.map((img: string, idx: number) => (
          <div key={idx} className="f-carousel__slide">
            <Image
              key={idx}
              src={img}
              alt={`nolemons-img-${idx}`}
              width={1110}
              height={740}
              quality={props.screen == "mobile" ? 75 : 90}
            />
          </div>
        ))}
      </div>

      <div className="f-carousel" id="nav-carousel" ref={navContainerRef}>
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
