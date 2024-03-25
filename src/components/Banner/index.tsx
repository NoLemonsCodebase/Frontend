"use client";

import { useRouter } from 'next/router';
import * as React from 'react';

interface IBannerProps {
}

const Banner: React.FunctionComponent<IBannerProps> = (props) => {
  console.log("router.pathname", window.location);
  // 1) for urls starting with cars and for main page (userRouter of next.js)
  // 2) just plain tailwind code
  return  <div className="bg-blue-500">
  <div className="w-full py-2">
    <div className="container flex items-center justify-between px-4 text-white md:px-6">
      <div className="flex items-center space-x-4">
        <ShoppingBagIcon className="h-4 w-4" />
        <span className="text-sm font-semibold">Free Shipping on All Cars!</span>
      </div>
      <p className="text-xs tracking-wide-[-0.5]">Limited Time Offer</p>
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
