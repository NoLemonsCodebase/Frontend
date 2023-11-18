import CarImagesSection from "@/components/CarImagesSection";
import {
  ClockIcon,
  ArrowUpIcon,
  FrameIcon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";
import cn from "classnames";

import * as React from "react";

interface ICarPageProps {}

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

const CarPage: React.FunctionComponent<ICarPageProps> = (props) => {
  return (
    <section className="flex flex-col px-2 md:px-16 py-4">
      <div className="flex space-x-2">
        <h1 className="text-xl font-bold">2022 Porsche 911 GT3</h1>
        <div className="flex items-center">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <svg
              className="w-4 h-4 mr-2 fill-current text-green-600"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-3.5-3.5 1.6-1.6L10 12l4.9-5 1.6 1.6L10 15z" />
            </svg>
            verified <span className="hidden sm:block">by NoLemons</span>
          </span>
        </div>
      </div>
      <p className="text-md">
        ~2,100 Miles, 6-Speed Manual, 502-hp Flat-6, Carbon Fiber Bucket Seats
      </p>
      <CarImagesSection
        images={[
          "https://nolemons.ae/wp-content/uploads/2022/12/mclaren_senna_2019_cover.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_11.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_0.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_26.jpg",
          "https://nolemons.ae/wp-content/uploads/2022/12/mclaren_senna_2019_cover.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_11.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_0.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_26.jpg",
          "https://nolemons.ae/wp-content/uploads/2022/12/mclaren_senna_2019_cover.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_11.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_0.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_26.jpg",
        ]}
      />
      <div className="flex mt-4 z-10 space-x-4 sticky top-4">
        <div className="rounded bg-black bg-opacity-80 flex flex-grow items-center">
          <ul className="flex items-center justify-between space-x-6 px-4 py-2">
            <li className="basis-auto flex items-center space-x-2 text-white">
              <ClockIcon className="w-5 h-5" />
              <p className="hidden sm:block opacity-70">Time Left</p>
              <p className="font-semibold">2 Days</p>
            </li>
            <li className="basis-auto flex items-center space-x-2 text-white">
              <ArrowUpIcon className="w-5 h-5 hidden sm:block" />
              <p className="opacity-7 hidden sm:block">High bid</p>
              <p className="font-semibold">$26,000</p>
            </li>
            <li className="basis-auto hidden md:flex items-center space-x-2 text-white">
              <FrameIcon className="w-5 h-5" />
              <p className="opacity-70">Bids</p>
              <p className="font-semibold">8</p>
            </li>
            <li className="basis-auto items-center space-x-2 text-white hidden lg:flex">
              <ChatBubbleIcon className="w-5 h-5" />
              <p className="opacity-70">Comments</p>
              <p className="font-semibold">12</p>
            </li>
          </ul>
        </div>
        <button className="px-2 h-12 bg-green-400 rounded w-32 font-semibold">
          Place Bid
        </button>
      </div>
      <div className="flex space-x-8 mt-8">
        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-bold">Highlights</h2>
          <div className="mt-2">
            The Senna is the lightest, most powerful and most capable hypercar
            to ever be built for road by McLaren. Limited to a production of
            only 500 globally.
            <ul className="list-disc ml-10">
              <li>
                In excellent condition with only 5 km (3 mi) on the odometer
              </li>
              <li>#44 of only 500 produced globally</li>
              <li>
                Comes with an extended McLaren global warranty and full service
                history
              </li>
            </ul>
          </div>
          <h2 className="text-2xl font-bold mt-8">Overview</h2>
          <p className="mt-2">
            This Senna is #34 of only 500 produced globally by McLaren. This one
            owner’s vehicle was delivered new to McLaren Dubai and has since
            remained in a private collection. The car is stored at an enclosed
            and staffed car storage facility in Dubai, UAE. At the facility the
            car is regularly started, cleaned and remains under a cover on a
            battery tender. Moreover, the Senna comes with full dealer service
            history with all maintenance complete at McLaren Dubai.
          </p>
          <h2 className="text-2xl font-bold mt-8">Overview</h2>
          <p className="mt-2">
            This Senna is #34 of only 500 produced globally by McLaren. This one
            owner’s vehicle was delivered new to McLaren Dubai and has since
            remained in a private collection. The car is stored at an enclosed
            and staffed car storage facility in Dubai, UAE. At the facility the
            car is regularly started, cleaned and remains under a cover on a
            battery tender. Moreover, the Senna comes with full dealer service
            history with all maintenance complete at McLaren Dubai.
          </p>
          <h2 className="text-2xl font-bold mt-8">Service history</h2>
          <section className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap">
              {history.map((item, index) => (
                <div className="flex relative py-2 sm:items-center" key={index}>
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
          </section>
          <h2 className="text-2xl font-bold mt-8">Videos</h2>
          <h2 className="text-xl font-bold mt-4">• WALK-AROUND</h2>
          <div className="aspect-w-16 aspect-h-7 md:mr-20">
            <iframe
              src="https://www.youtube.com/embed/rlw0y1MPKT4"
              title="McLaren Senna Auction, nolemons.ae [Walk-Around]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <h2 className="text-xl font-bold mt-4">• Interior</h2>
          <div className="aspect-w-16 aspect-h-7 md:mr-20">
            <iframe
              src="https://www.youtube.com/embed/HgOUWGy6iLk"
              title="McLaren Senna Auction, nolemons.ae [Interior]"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <section className="hidden lg:block sticky top-20 self-start w-96">
          <div className="shadow bg-white p-4 flex flex-col space-y-2">
            <p>
              <strong>Location:</strong> Dubai, UAE
            </p>
            <p>
              <strong>VIN (Chassis #):</strong> Dubai, UAE
            </p>
            <p>
              <strong>Engine:</strong> Dubai, UAE
            </p>
            <p>
              <strong>Drivetrain:</strong> Dubai, UAE
            </p>
            <p>
              <strong>Transmission:</strong> Dubai, UAE
            </p>
            <p>
              <strong>Mileage:</strong> 5 km
            </p>
            <p>
              <strong>Exterior Color:</strong> Victory Grey
            </p>
            <p>
              <strong>Interior Color:</strong> Victory Grey
            </p>
            <p>
              <strong>Registration Status:</strong> Registered, Dubai
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default CarPage;
