"use client";

import { useRouter } from "next/router";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface IBannerProps {
}

function TruckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
      <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
      <circle cx="7" cy="18" r="2" />
      <path d="M15 18H9" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  )
}

const RequestCar: React.FunctionComponent<IBannerProps> = (props) => {
  React.useEffect(() => {
    // window is accessible here.
    // console.log("window.location", window.location.pathname);
  }, []);
  // 1) for urls starting with cars and for main page (userRouter of next.js)
  // 2) just plain tailwind code
  return  (
        <div className="bg-[#FEFCE8] py-3 px-4 text-center">
            <div className="flex items-center justify-center">
                <BellIcon className="mr-2 h-5 w-5" />
                <p className="text-sm font-medium text-gray-900">Can&apos;t find your dream car?</p>
                <Link
                className="ml-4 inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus:ring-gray-300"
                href="/request-a-car"
                >
                Request it
                </Link>
            </div>
        </div>
    );
//   <div className="bg-yellow-50">
//             <div className="py-2 md:py-3 lg:py-4">
//               <div className="container flex items-center justify-center px-4 md:px-4">
//                 <div className="flex items-center space-x-4 text-yellow-600 dark:text-yellow-400">
//                   <TruckIcon className="h-6 w-6" />
//                   <span className="text-sm font-semibold">Special offer! Free shipping to the GCC</span>
//                 </div>
//               </div>
//             </div>
//           </div>;
  // return undefined;
};

function BellIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    )
  }
  
export default RequestCar;
