"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import DropDownMenu from "./DropDownMenu";

export function Navbar() {
  const { width } = useWindowSize();
  return (
    <nav className="sticky top-0 z-[11] flex items-center justify-between px-4 md:px-16 py-4 bg-white  shadow">
      <div className="flex items-center w-full">
        <a href="/">
          <Image src="/logo.png" width={90} height={16} alt="logo" />
        </a>
        {width! > 640 ? (
          <div className="flex items-center space-x-4">
            <div className="border-l border-gray-300 h-5 mx-4" />
            <div className="flex items-center space-x-4">
              <a
                className="text-sm md:text-base text-gray-700  hover:bg-gray-200  rounded-md px-2 py-1"
                href="/how-it-works"
              >
                How it works?
              </a>
              <a
                className="text-sm md:text-base text-gray-700  hover:bg-gray-200  rounded-md px-2 py-1"
                href="/sell-your-car"
              >
                Sell your car
              </a>
              <a
                className="text-sm md:text-base text-gray-700  hover:bg-gray-200  rounded-md px-2 py-1"
                href="/about-us"
              >
                About us
              </a>
            </div>
          </div>
        ) : (
          <DropDownMenu
            items={[
              { label: "How it works?", link: "/how-it-works" },
              { label: "Sell your car", link: "/sell-your-car" },
              { label: "About us", link: "/about-us" },
            ]}
            withBackground={false}
            className="ml-auto"
          />
        )}
      </div>
    </nav>
  );
}
