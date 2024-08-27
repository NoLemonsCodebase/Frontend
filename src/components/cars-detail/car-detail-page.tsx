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

import RichText from "../RichText";
import WhatsappIcon from "../icons/whatsapp";
import CarDetailList from "./car-detail-list";
import { Fragment, useEffect, useState } from "react";

import { FaCheck } from "react-icons/fa";
import CarDescription from "./car-description";

interface ICarPageProps {
  carDetail: ICar;

  utms: any;
}

export default function CarDetailPage({
  carDetail,
  utms,
}: ICarPageProps): JSX.Element {
  const [auctionEnded, setAuctionEnded] = useState<boolean>(false);
  const [endDatetime, setEndDatetime] = useState<Date | null>(null);

  const t = useTranslations("default.car_page");
  const lastAuction = carDetail.auction;

  const { width } = useWindowSize();

  useEffect(() => {
    if (lastAuction) {
      setAuctionEnded(new Date(lastAuction.time_ending) < new Date());
      setEndDatetime(new Date(lastAuction.time_ending));
    }
  }, []);

  const scrollToTarget = () => {
    if (carDetail.status == "created") {
      const text = encodeURIComponent(
        `Hello! I'm interested in ${carDetail.title} ${carDetail.year}`
      );
      TrackGetEarlyAccessClick();
      window.open(
        `https://api.whatsapp.com/send/?phone=971566633668&text=${text}`,
        "_blank"
      );
    }

    var targetSection = document.getElementById("bid-section");

    // Scroll to the target section
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    TrackPageView();
  }, []);

  return (
    <section className=" container m-auto flex flex-col px-4 md:px-16 py-4 car-description">
      <div className="flex sm:hidden py-2 -mt-3 mb-3 -mx-2 px-2 z-10 space-x-4 sticky top-14 bg-white border-b">
        <AutionStatusBar carDetail={carDetail} />

        <button
          className="px-2 h-12 bg-green-400 rounded w-32 font-semibold flex items-center justify-center"
          onClick={scrollToTarget}
        >
          {carDetail.status == "live" ? (
            t("bid")
          ) : (
            <WhatsappIcon className="text-white" />
          )}
        </button>
      </div>
      {width &&
        (width > 640 ? (
          <CarImagesSection
            images={carDetail.car_image.map((car: any) => car.image)}
            previewImages={carDetail.car_image.map((car: any) => car.image)}
          />
        ) : (
          <ImageCarousel
            images={carDetail.car_image.map((car: any) => car.image)}
            previewImages={carDetail.car_image.map((car: any) => car.image)}
          />
        ))}
      <div className="flex space-x-2 mt-4">
        <h1 className="text-xl font-bold">
          {carDetail.year} {carDetail.title}
        </h1>
        <div className="flex items-center">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <FaCheck className=" mr-2 text-[10px] text-green-600" />
            {t("verified")}
            <span className="hidden sm:block ml-0.5">{t("by_nolemons")}</span>
          </span>
        </div>
      </div>
      {auctionEnded || carDetail.status == "live" ? (
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
      <div className="hidden sm:flex mt-4 space-x-4">
        <AutionStatusBar carDetail={carDetail} />
        <button
          className="px-2 h-12 bg-green-400 rounded w-32 font-semibold flex items-center justify-center"
          onClick={scrollToTarget}
        >
          {carDetail.status == "live" ? (
            t("bid")
          ) : (
            <WhatsappIcon className="text-white" />
          )}
        </button>
      </div>
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
        <section className="hidden lg:block sticky top-20 self-start w-96">
          <CarDetailList isCard carDetail={carDetail} />
        </section>
      </div>
      <BidSection carDetail={carDetail} utms={utms} />
    </section>
  );
}
