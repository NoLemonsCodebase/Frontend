"use client";
import AutionStatusBar from "@/components/AutionStatusBar";
import CarImagesSection from "@/components/CarImagesSection";
import Footer from "@/components/Footer";
import { BidSection } from "@/components/bid-section";
import cn from "classnames";
import { previewImages, fullImages } from "./images";
import * as React from "react";
import ImageCarousel from "@/components/ImageCarousel";
import { useWindowSize } from "@uidotdev/usehooks";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

interface ICarPageProps {
  auctionInfo: {
    endDate: string;
    lastBid: number;
  };
}

const history = [
  {
    title: "Aug 2021",
    description: "New battery installed",
  },
  {
    title: "Nov 2020",
    description:
      "Repair of oil leaks from the front main seal, cam seals (x2), and valve cover seals gasket. Replaced rear differential bushings at Al Rashid Auto Mechanic in Dubai, UAE. ",
  },
  {
    title: "Nov 2020",
    description: "Gear bushing purchased at Rukn Al Badei in Sharjah, UAE",
  },
];

const CarDetailPage: React.FunctionComponent<ICarPageProps> = ({
  auctionInfo,
}) => {
  const endDatetime = new Date(auctionInfo.endDate);
  const { width } = useWindowSize();

  const scrollToTarget = () => {
    var targetSection = document.getElementById("bid-section");

    // Scroll to the target section
    targetSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="flex flex-col px-4 md:px-16 py-4">
        <div className="flex sm:hidden py-2 -mt-3 mb-3 -mx-2 px-2 z-10 space-x-4 sticky top-0 bg-white border-b">
          <AutionStatusBar auctionInfo={auctionInfo} />
          <button
            className="px-2 h-12 bg-green-400 rounded w-32 font-semibold"
            onClick={scrollToTarget}
          >
            <span className="hidden sm:block">Place Bid</span>
            <span className="block sm:hidden">Bid</span>
          </button>
        </div>
        {width &&
          (width > 640 ? (
            <CarImagesSection images={fullImages} previewImages={fullImages} />
          ) : (
            <ImageCarousel images={fullImages} previewImages={previewImages} />
          ))}
        <div className="flex space-x-2 mt-2">
          <h1 className="text-xl font-bold">1996 Toyota LandCruiser VX</h1>
          <div className="flex items-center">
            <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              <svg
                className="w-4 h-4 mr-1 fill-current text-green-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-3.5-3.5 1.6-1.6L10 12l4.9-5 1.6 1.6L10 15z" />
              </svg>
              verified <span className="hidden sm:block"> by NoLemons</span>
            </span>
          </div>
        </div>
        {/* <p className="text-sm">
          1 Owner, Dual-Motor AWD, Texas-Owned, Reviewed by Alanis King
        </p> */}
        <p className="text-sm text-gray-500">
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
        <div className="hidden sm:flex mt-4 z-10 space-x-4 sticky top-4">
          <AutionStatusBar auctionInfo={auctionInfo} />
          <button
            className="px-2 h-12 bg-green-400 rounded w-32 font-semibold"
            onClick={scrollToTarget}
          >
            <span className="hidden sm:block">Place Bid</span>
            <span className="block sm:hidden">Bid</span>
          </button>
        </div>
        <div className="block md:hidden">
          <CarDetailList />
        </div>
        <div className="flex space-x-8 mt-8">
          <div className="flex-1 flex flex-col">
            {/* <h2 className="text-2xl font-bold">Highlights</h2> */}
            <div className="mt-2">
              This is a 1996 Toyota LandCruiser VX equipped with a 4.5L
              inline-six producing 212 horsepower mated to a 4 speed automatic.
              {/* <ul className="list-disc ml-10">
                <li>
                  In excellent condition with only 5 km (3 mi) on the odometer
                </li>
                <li>#44 of only 500 produced globally</li>
                <li>
                  Comes with an extended McLaren global warranty and full
                  service history
                </li>
              </ul> */}
            </div>
            <h2 className="text-2xl font-bold mt-8">Factory equipment</h2>
            <ul className="list-disc ml-6">
              <li>Hydraulic steering</li>
              <li>Front and rear air condition and heating</li>
              <li>Electric chairs, window, door locks and mirrors</li>
              <li>AM/FM stereo with cassette</li>
              <li>Sunroof </li>
            </ul>
            <h2 className="text-2xl font-bold mt-8">Aftermarket additions</h2>
            <ul className="list-disc ml-6">
              <li>Dual USB/USB-C charger port</li>
              <li>Remote locking and opening</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8">Good to know</h2>
            <p className="mt-2">
              The owner reports that the car does not have differential lockers.
              It is believed that a previous owner installed normal
              differentials without locks. As such please note the switch on the
              dashboard does not operate.
              <br />
              <br />
              There are no traffic records of previous accidents. However the
              owner reports a minor accident where the grill, bumper, headlight
              and bonnet were damaged. All items were replaced or repaired. The
              owner reports there was no damage to the engine or chassis.
            </p>
            <h2 className="text-2xl font-bold mt-8">
              A mobile inspection service by Mysyara found the following:
            </h2>
            <ul className="list-disc ml-6">
              <li>A/C works well</li>
              <li>Head and tail lamps are working </li>
              <li>Battery and connectors are in good condition</li>
              <li>Brakes work well and the brake fluid is topped up</li>
              <li>Filters are in good condition</li>
              <li>
                Tires are in good condition with the exception of the spare tire
                which will need to be replaced
              </li>
              <li>Comes with one key only (not original)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8">Exterior findings:</h2>
            <ul className="list-disc ml-6">
              <li>
                This vehicle has been fully repainted (paint thickness gauge
                readings can be found at the end of the report)
              </li>
              <li>There are some spots with rust (please review the photos)</li>
              <li>Scratches on the running boards (side step)</li>
              <li>Scratches on the edge of the rear left side door</li>
              <li>Scratches on the graphics on the bottom of the right side</li>
            </ul>
            <h2 className="text-2xl font-bold mt-8">Interior findings:</h2>
            <ul className="list-disc ml-6">
              <li>
                There is an issue with the fridge and icebox buttons. They work
                but require that you press and hold them.
              </li>
              <li>There are small cracks on the dashboard</li>
            </ul>

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
            <h2 className="text-2xl font-bold mt-8">Videos</h2>
            <h2 className="text-xl font-bold mt-4">• WALK-AROUND</h2>
            <div className="aspect-w-16 aspect-h-10 md:mr-20">
              <iframe
                src="https://www.youtube.com/embed/rlw0y1MPKT4"
                title="McLaren Senna Auction, nolemons.ae [Walk-Around]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="text-xl font-bold mt-4">• Interior</h2>
            <div className="aspect-w-16 aspect-h-10 md:mr-20">
              <iframe
                src="https://www.youtube.com/embed/HgOUWGy6iLk"
                title="McLaren Senna Auction, nolemons.ae [Interior]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <section className="hidden lg:block sticky top-20 self-start w-96">
            <CarDetailList isCard />
          </section>
        </div>
        <BidSection />
      </section>
      <Footer />
    </>
  );
};

const CarDetailList: React.FC<{ isCard?: boolean }> = ({ isCard }) => {
  const sections = [
    {
      title: "Location",
      value: "Dubai, UAE",
    },
    {
      title: "VIN (Chassis #)",
      value: "FZJ800143914",
    },
    {
      title: "Engine",
      value: "4.5L Inline-6",
    },
    {
      title: "Drivetrain",
      value: "4WD",
    },
    {
      title: "Transmission",
      value: "Automatic",
    },
    {
      title: "Mileage",
      value: "233,745",
    },
    {
      title: "Mileage Type",
      value: "km",
    },
    {
      title: "Exterior Color",
      value: "White",
    },
    {
      title: "Interior Color",
      value: "Dark Blue",
    },
  ];

  const inspectionPDF =
    "https://nolemons.ae/wp-content/uploads/2022/08/Inspection_1989_BMW_635CSi_66333.pdf";
  const reportHistoryPDF =
    "https://nolemons.ae/wp-content/uploads/2022/08/History_1989_BMW_635CSi_66333.pdf";

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
          <tr>
            <td className="py-2 whitespace-nowrap text-sm font-medium text-gray-900">
              الوصف (باللغة العربية)
            </td>
            <td className="py-2 whitespace-nowrap text-sm text-gray-500">
              <a
                href={reportHistoryPDF}
                target="_blank"
                className="text-blue-500 hover:text-blue-700"
              >
                <ExternalLinkIcon className="w-4 h-4 inline-block mr-1" />
                افتح الملف
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarDetailPage;
