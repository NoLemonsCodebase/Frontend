"use client";
import AutionStatusBar from "@/components/AutionStatusBar";
import CarImagesSection from "@/components/CarImagesSection";
import Footer from "@/components/Footer";
import { BidSection } from "@/components/bid-section";
import cn from "classnames";
import * as React from "react";
import ImageCarousel from "@/components/ImageCarousel";
import { useWindowSize } from "@uidotdev/usehooks";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import {
  TrackGetEarlyAccessClick,
  TrackPageView,
} from "@/lib/services/snapPixels";
import { ICar } from "@/lib/types";

interface ICarPageProps {
  carDetail: ICar;
}

const convertToHTML = (text: string) => {
  return text
    .replace(/<\/li>\r\n<li>/g, "</li><li>")
    .replace(/<\/p>\r\n<ul>/g, "</p><ul>")
    .replace(/\n/g, "<br/>");
};

const CarDetailPage: React.FunctionComponent<ICarPageProps> = ({
  carDetail,
}) => {
  const lastAuction = carDetail.auction;

  const auctionEnded = lastAuction
    ? new Date(lastAuction.time_ending) < new Date()
    : true;
  const endDatetime = lastAuction
    ? new Date(lastAuction.time_ending)
    : undefined;

  const { width } = useWindowSize();

  const scrollToTarget = () => {
    if (carDetail.status == "created") {
      const text = encodeURIComponent(
        `Hello! I'm interested in ${carDetail.title} ${carDetail.year}`
      );
      TrackGetEarlyAccessClick();
      window.open(
        `https://api.whatsapp.com/send/?phone=971564404640&text=${text}`,
        "_blank"
      );
    }

    var targetSection = document.getElementById("bid-section");

    // Scroll to the target section
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  React.useEffect(() => {
    TrackPageView();
  }, []);

  return (
    <>
      <section className="flex flex-col px-4 md:px-16 py-4 car-description">
        <div className="flex sm:hidden py-2 -mt-3 mb-3 -mx-2 px-2 z-10 space-x-4 sticky top-14 bg-white border-b">
          <AutionStatusBar carDetail={carDetail} />
          <button
            className="px-2 h-12 bg-green-400 rounded w-32 font-semibold"
            onClick={scrollToTarget}
          >
            {carDetail.status == "created" ? "Contact us" : "Bid"}
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
        <div className="flex space-x-2 mt-2">
          <h1 className="text-xl font-bold">
            {carDetail.year} {carDetail.title}
          </h1>
          <div className="flex items-center">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <svg
                className="w-4 h-4 mr-1 fill-current text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-3.5-3.5 1.6-1.6L10 12l4.9-5 1.6 1.6L10 15z" />
              </svg>
              verified{" "}
              <span className="hidden sm:block ml-0.5"> by NoLemons</span>
            </span>
          </div>
        </div>
        {/* <p className="text-sm">
          1 Owner, Dual-Motor AWD, Texas-Owned, Reviewed by Alanis King
        </p> */}
        {!auctionEnded && (
          <p className="text-sm text-gray-500 font-semibold">
            Ending{" "}
            {endDatetime?.toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </p>
        )}
        <div className="hidden sm:flex mt-4 space-x-4">
          <AutionStatusBar carDetail={carDetail} />
          <button
            className="px-2 h-12 bg-green-400 rounded w-32 font-semibold"
            onClick={scrollToTarget}
          >
            {carDetail.status == "created" ? "Contact us" : "Bid"}
          </button>
        </div>
        <div className="block md:hidden">
          <CarDetailList carDetail={carDetail} />
        </div>
        <div className="flex space-x-8 mt-8">
          <div className="flex-1 flex flex-col">
            {/* <h2 className="text-2xl font-bold">Highlights</h2> */}
            <div
              className="mt-2"
              dangerouslySetInnerHTML={{
                __html: convertToHTML(carDetail.description),
              }}
            />
            {carDetail.car_text_section.map((section: any, index: number) => (
              <React.Fragment key={index}>
                <h2 className="text-2xl font-bold mt-8">{section.title}</h2>
                <p
                  className="mt-2"
                  dangerouslySetInnerHTML={{
                    __html: convertToHTML(section.content),
                  }}
                />
              </React.Fragment>
            ))}

            <p className="mt-4">
              *Please review the photos for all the findings.
            </p>

            {/* <section className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap">
                {history.map((item, index) => (
                  <div
                    className="flex relative py-2 sm:items-center"
                    key={index}
                  >
                    <div className="h-full w-2 absolute inset-0 flex items-center justify-center">
                      <div
                        className={cn(
                          "h-full w-1 bg-gray-200 pointer-events-none",
                          index == 0 && "h-1/2 absolute top-1/2",
                          index == history.length - 1 && "h-1/2 absolute top-0"
                        )}
                      ></div>
                    </div>
                    <div className="flex-shrink-0 w-2 h-2 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm"></div>
                    <div className="flex-grow pl-2 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                          {item.title}
                        </h2>
                        <p className="leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section> */}
            {carDetail.car_video?.length > 0 && (
              <h2 className="text-2xl font-bold mt-8">Videos</h2>
            )}
            {carDetail.car_video?.map((video: any, index: number) => (
              <React.Fragment key={index}>
                <h2 className="text-xl font-bold mt-4">{video.title}</h2>
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
              </React.Fragment>
            ))}
          </div>
          <section className="hidden lg:block sticky top-20 self-start w-96">
            <CarDetailList isCard carDetail={carDetail} />
          </section>
        </div>
        <BidSection carDetail={carDetail} />
      </section>
      <Footer />
    </>
  );
};

const CarDetailList: React.FC<{ isCard?: boolean; carDetail: any }> = ({
  isCard,
  carDetail,
}) => {
  const sections = [
    {
      title: "Location",
      value: carDetail.location,
    },
    {
      title: "VIN (Chassis #)",
      value: carDetail.vin,
    },
    {
      title: "Engine",
      value: carDetail.engine,
    },
    {
      title: "Drivetrain",
      value: carDetail.drivetrain,
    },
    {
      title: "Transmission",
      value: carDetail.transmission,
    },
    {
      title: "Mileage",
      value: carDetail.mileage,
    },
    {
      title: "Mileage Type",
      value: carDetail.mileage_type,
    },
    {
      title: "Exterior Color",
      value: carDetail.exterior_color,
    },
    {
      title: "Interior Color",
      value: carDetail.interior_color,
    },
  ];

  const inspectionPDF = carDetail.inspection_report_link;
  const reportHistoryPDF = carDetail.history_report_link;

  const arabicDescPDF = carDetail.arabic_description_link;

  return (
    <div
      className={cn(
        "flex flex-col mt-2",
        isCard && "sm:mt-0 shadow bg-white p-4"
      )}
    >
      <table className="min-w-full divide-y divide-gray-200">
        <tbody className="divide-y divide-gray-200">
          {sections.map((section, index) => (
            <tr key={index}>
              <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                {section.title}:
              </td>
              <td className="py-2 whitespace-nowrap text-sm text-gray-500">
                {section.value}
              </td>
            </tr>
          ))}
          {inspectionPDF && (
            <tr>
              <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                Inspection report
              </td>
              <td className="py-2 whitespace-nowrap text-sm text-gray-500">
                <a
                  href={inspectionPDF}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Open report
                  <ExternalLinkIcon className="w-4 h-4 inline-block ml-1" />
                </a>
              </td>
            </tr>
          )}
          {reportHistoryPDF && (
            <tr>
              <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                History Report
              </td>
              <td className="py-2 whitespace-nowrap text-sm text-gray-500">
                <a
                  href={reportHistoryPDF}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  Open report
                  <ExternalLinkIcon className="w-4 h-4 inline-block ml-1" />
                </a>
              </td>
            </tr>
          )}
          {arabicDescPDF && (
            <tr>
              <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                الوصف (باللغة العربية)
              </td>
              <td className="py-2 whitespace-nowrap text-sm text-gray-500">
                <a
                  href={arabicDescPDF}
                  target="_blank"
                  className="text-blue-500 hover:text-blue-700"
                >
                  <ExternalLinkIcon className="w-4 h-4 inline-block mr-1" />
                  افتح الملف
                </a>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CarDetailPage;
