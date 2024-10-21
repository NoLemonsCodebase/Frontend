"use client";

import Link from "next/link";
import * as React from "react";
import { FaRegBell } from "react-icons/fa";
interface IBannerProps {}

const RequestCar: React.FunctionComponent<IBannerProps> = (props) => {
  React.useEffect(() => {
    // window is accessible here.

  }, []);
  // 1) for urls starting with cars and for main page (userRouter of next.js)
  // 2) just plain tailwind code
  return (
    <div className="bg-[#FEFCE8] xl:hidden py-3 px-4 text-center">
      <div className="flex items-center justify-center">
        <FaRegBell className="mr-2 text-xl" />
        <p className="text-sm font-medium text-gray-900">
          Limited spots available
        </p>
        <Link
          className="ml-4 inline-flex items-center rounded-md px-4 py-2 xl:hidden text-sm font-medium bg-green-700 text-white shadow-sm transition-colors hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 "
          href="/sell-your-car"
        >
          Sell your car
        </Link>
      </div>
    </div>
  );
};

export default RequestCar;
