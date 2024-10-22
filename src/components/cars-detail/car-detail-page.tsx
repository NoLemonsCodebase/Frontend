"use client";
import AutionStatusBar from "@/components/AutionStatusBar";
import { BidSection } from "@/components/bid-section";
import { TrackGetEarlyAccessClick, TrackPageView } from "@/lib/services/pixels";
import { ICar } from "@/lib/types";
import cn from "classnames";
import { useTranslations } from "next-intl";

import { Fragment, useEffect, useState } from "react";

import CarDetailList from "./car-detail-list";

import { FaWhatsapp } from "react-icons/fa";
import CarDescription from "./car-description";
import InterestedButton from "../interested-button";

import ImageCarousel from "../ImageCarousel";

interface ICarPageProps {
  carDetail: ICar;

  utms: any;
}

export default function CarDetailPage({ carDetail, utms }: ICarPageProps) {
  const [auctionEnded, setAuctionEnded] = useState<boolean>(false);
  const [endDatetime, setEndDatetime] = useState<Date | null>(null);
  const t = useTranslations("default.car_page");

  const {
    title,
    year,
    auction,
    status,
    verified,
    car_image,
    parsed_car_image,
    car_video,
    category,
    parsed_car_video,
  } = carDetail;

  const is_parded = category == "import_a_car";

  const car_images_render = is_parded ? parsed_car_image : car_image;
  const car_video_render = is_parded ? parsed_car_video : car_video;
  const lastAuction = auction;
  const verified_render = verified && !is_parded;

  useEffect(() => {
    if (lastAuction) {
      setAuctionEnded(new Date(lastAuction.time_ending) > new Date());
      setEndDatetime(new Date(lastAuction.time_ending));
    }
  }, []);

  const text = encodeURIComponent(`Hello! I'm interested in ${title} ${year}`);
  const whatsAppLink = `https://api.whatsapp.com/send/?phone=971566633668&text=${text}`;

  const scrollToTarget = () => {
    if (status == "created") {
      TrackGetEarlyAccessClick();
      window.open(whatsAppLink, "_blank");
    }

    var targetSection = document.getElementById("bid-section");

    // Scroll to the target section
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    TrackPageView();
  }, []);

  return (
    <section className=" our-container flex flex-col py-4 overflow-clip">
      <div className="flex lg:hidden flex-wrap bg-white py-2 -mt-3 mb-3 gap-1 border-b">
        <AutionStatusBar carDetail={carDetail} />
        {status == "for_sale" ? (
          <InterestedButton carDetail={carDetail} />
        ) : (
          <button
            className="p-2 bg-green-400 rounded basis-[30%]  font-semibold flex items-center justify-center"
            onClick={scrollToTarget}
          >
            {status == "live" ? (
              t("bid")
            ) : (
              <FaWhatsapp className=" text-xl text-white" />
            )}
          </button>
        )}
      </div>

      {car_images_render && car_images_render.length > 1 ? (
        <ImageCarousel
          carImages={car_images_render.map((img) => img.image)}
          isVerified={verified_render}
        />
      ) : null}

      <div className="flex items-center mt-4 gap-2">
        <div className="flex gap-4">
          <h1 className="text-xl font-bold">
            {year} {title}
          </h1>
        </div>
      </div>

      {auctionEnded && status == "live" ? (
        <p className="text-sm text-gray-500 font-semibold">
          {`${t("ending")} ${endDatetime?.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}`}
        </p>
      ) : null}

      <div className="hidden lg:flex mt-4 gap-4">
        <AutionStatusBar carDetail={carDetail} />
        {status == "for_sale" ? (
          <InterestedButton carDetail={carDetail} />
        ) : (
          <button
            className="p-2 bg-green-400 rounded basis-[30%]  font-semibold flex items-center justify-center"
            onClick={scrollToTarget}
          >
            {status == "live" ? (
              t("bid")
            ) : (
              <FaWhatsapp className=" text-xl text-white" />
            )}
          </button>
        )}
      </div>

      <div className="block md:hidden">
        <CarDetailList carDetail={carDetail} />
      </div>

      <div className="flex space-x-8 mt-8 no-tailwindcss-base">
        <div className="flex-1">
          <div className="flex-1 flex flex-col">
            <CarDescription carDetail={carDetail} />

            {car_images_render && car_images_render.length > 0 && (
              <p className="mt-4">{t("review_photos_note")}</p>
            )}
            {car_video_render && car_video_render?.length > 0 && (
              <h2 className="text-2xl font-bold mt-8">{t("videos")}</h2>
            )}

            {car_video_render &&
              car_video_render?.map((video: any, index: number) => (
                <Fragment key={index}>
                  <h2 className="text-xl font-bold my-4">{video.title}</h2>
                  {is_parded ? (
                    <div className=" w-full overflow-hidden aspect-[16/9]">
                      <iframe
                        src={`${video.video}?controls=0&modestbranding=1&rel=0&showinfo=0&autohide=1`}
                        className=" w-[300%] h-full ml-[-100%]"
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                        allowFullScreen
                      >
                        vedio 1
                      </iframe>
                    </div>
                  ) : (
                    <div
                      className={cn(
                        "md:mr-20",
                        video.aspect_ratio == "16:9"
                          ? "aspect-w-16 aspect-h-10"
                          : "aspect-w-4 aspect-h-7 max-h-64"
                      )}
                    >
                      <iframe
                        src={video.video}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
                        allowFullScreen
                      >
                        vedio 1
                      </iframe>
                    </div>
                  )}
                </Fragment>
              ))}
          </div>
        </div>
        <section className="hidden lg:block sticky top-20 self-start w-[30%]">
          <CarDetailList isCard carDetail={carDetail} />
        </section>
      </div>
      <BidSection carDetail={carDetail} utms={utms} />
    </section>
  );
}
