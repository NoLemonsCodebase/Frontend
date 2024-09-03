"use client";
import AutionStatusBar from "@/components/AutionStatusBar";
import CarImagesSection from "@/components/CarImagesSection";
import ImageCarousel from "@/components/ImageCarousel";
import { BidSection } from "@/components/bid-section";
import { TrackGetEarlyAccessClick, TrackPageView } from "@/lib/services/pixels";
import { ICar } from "@/lib/types";
import { useWindowSize } from "@uidotdev/usehooks";
import cn from "classnames";
import { useTranslations } from "next-intl";

import { Fragment, useEffect, useState } from "react";

import CarDetailList from "./car-detail-list";

import { FaCheck, FaWhatsapp } from "react-icons/fa";
import CarDescription from "./car-description";
import InterestedButton from "./interested-button";
import MobileGallery from "../mobile-gallery";

interface ICarPageProps {
  carDetail: ICar;

  utms: any;
}

export default function CarDetailPage({ carDetail, utms }: ICarPageProps) {
  const [auctionEnded, setAuctionEnded] = useState<boolean>(false);
  const [endDatetime, setEndDatetime] = useState<Date | null>(null);

  const t = useTranslations("default.car_page");
  const lastAuction = carDetail.auction;

  const { width } = useWindowSize();

  useEffect(() => {
    if (lastAuction) {
      setAuctionEnded(new Date(lastAuction.time_ending) >= new Date());
      setEndDatetime(new Date(lastAuction.time_ending));
    }
  }, []);

  const text = encodeURIComponent(
    `Hello! I'm interested in ${carDetail.title} ${carDetail.year}`
  );
  const whatsAppLink = `https://api.whatsapp.com/send/?phone=971566633668&text=${text}`;

  const scrollToTarget = () => {
    if (carDetail.status == "created") {
      TrackGetEarlyAccessClick();
      window.open(whatsAppLink, "_blank");
    }

    var targetSection = document.getElementById("bid-section");

    // Scroll to the target section
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  // extract car images
  const { car_image } = carDetail;
  console.log(carDetail);
  useEffect(() => {
    TrackPageView();
  }, []);

  return (
    <section className=" container m-auto flex flex-col px-4 md:px-16 py-4 overflow-clip">
      <div className="flex lg:hidden flex-wrap bg-white py-2 -mt-3 mb-3 z-10 gap-1 sticky top-14  border-b">
        {carDetail.status != "for_sale" ? (
          <Fragment>
            <AutionStatusBar carDetail={carDetail} />
            <button
              className="p-2 bg-green-400 rounded font-semibold flex flex-grow items-center justify-center"
              onClick={scrollToTarget}
            >
              {carDetail.status == "live" ? (
                t("bid")
              ) : (
                <FaWhatsapp className=" text-xl text-white" />
              )}
            </button>
          </Fragment>
        ) : null}
      </div>
      {/* {width &&
        (width > 640 ? (
          // <CarImagesSection
          //   images={carDetail.car_image.map((car: any) => car.image)}
          //   previewImages={carDetail.car_image.map((car: any) => car.image)}
          // />
          <MobileGallery carImages={car_image} />
        ) : (
          // <ImageCarousel
          //   images={carDetail.car_image.map((car: any) => car.image)}
          //   previewImages={carDetail.car_image.map((car: any) => car.image)}
          // />
        ))} */}
      <MobileGallery carImages={car_image} />
      <div className="flex items-center mt-4 gap-2">
        <div className="flex gap-4">
          <h1 className="text-xl font-bold">
            {carDetail.year} {carDetail.title}
          </h1>
          <div className="flex items-start">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <FaCheck className=" mr-2 text-[10px] text-green-600" />
              {t("verified")}
              <span className="hidden xl:block ml-0.5">{t("by_nolemons")}</span>
            </span>
          </div>
        </div>
        {carDetail.status == "for_sale" ? (
          <InterestedButton carDetail={carDetail} />
        ) : null}
      </div>
      {auctionEnded && carDetail.status == "live" ? (
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

      {carDetail.status != "for_sale" ? (
        <div className="hidden lg:flex mt-4 space-x-4">
          <AutionStatusBar carDetail={carDetail} />
          <button
            className="p-2 bg-green-400 rounded basis-[30%]  font-semibold flex items-center justify-center"
            onClick={scrollToTarget}
          >
            {carDetail.status == "live" ? (
              t("bid")
            ) : (
              <FaWhatsapp className=" text-xl text-white" />
            )}
          </button>
        </div>
      ) : null}

      <div className="block md:hidden">
        <CarDetailList carDetail={carDetail} />
      </div>
      <div className="flex space-x-8 mt-8 no-tailwindcss-base">
        <div className="flex-1">
          <div className="flex-1 flex flex-col">
            {/* car description text */}
            <CarDescription carDetail={carDetail} />

            {carDetail.car_image.length > 0 && (
              <p className="mt-4">{t("review_photos_note")}</p>
            )}
            {carDetail.car_video?.length > 0 && (
              <h2 className="text-2xl font-bold mt-8">{t("videos")}</h2>
            )}
            {carDetail.car_video?.map((video: any, index: number) => (
              <Fragment key={index}>
                <h2 className="text-xl font-bold my-4">{video.title}</h2>
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
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
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
