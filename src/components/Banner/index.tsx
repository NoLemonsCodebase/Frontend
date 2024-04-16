"use client";

import { useRouter } from 'next/router';
import * as React from 'react';

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

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  React.useEffect(() => {
    // window is accessible here.
    console.log("window.location", window.location.pathname);
  }, []);
  // 1) for urls starting with cars and for main page (userRouter of next.js)
  // 2) just plain tailwind code
  return  <div className="bg-yellow-50">
            <div className="py-2 md:py-3 lg:py-4">
              <div className="container flex items-center justify-center px-4 md:px-4">
                <div className="flex items-center space-x-4 text-yellow-600 dark:text-yellow-400">
                  <TruckIcon className="h-6 w-6" />
                  <span className="text-sm font-semibold">Special offer! Free shipping to the GCC</span>
                </div>
              </div>
            </div>
          </div>;
  // return undefined;
};

function ShoppingBagIcon(props: any) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

export default Banner;
