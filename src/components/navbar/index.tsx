"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNavbar from "./mobile-navbar";
import DesktopNavbar from "./desktop-navbar";
import { useWindowSize } from "@uidotdev/usehooks";

// navbar links
export const menuBtns = [
  {
    id: "for-buyers",
    title: "For Buyers",
    links: [
      {
        name: "UAE Buyer Guide",
        link: "https://nolemons.help/uae-buyer-guide",
      },
      {
        name: "International Buyer Guide",
        link: "https://nolemons.help/international-buyer-guide/",
      },
    ],
    height: "h-[88px]",
    mobileHeight: "group-hover:h-[88px]",
  },
  {
    id: "for-sellers",
    title: "For Sellers",
    links: [
      {
        name: "Sell Your Car",
        link: "/sell-your-car",
      },
      {
        name: "How Selling Works",
        link: "https://nolemons.help/how-selling-works/",
      },
    ],
    height: "h-[88px]",
    mobileHeight: "group-hover:h-[88px]",
  },
  {
    id: "about",
    title: "About",
    links: [
      {
        name: "About Us",
        link: "https://nolemons.help/about-us/",
      },
      {
        name: "FAQs",
        link: "https://nolemons.help/faqs/",
      },
      {
        name: "What is NoLemons ?",
        link: "https://nolemons.help/what-is-nolemons/",
      },
      {
        name: "Testimonials",
        link: "https://nolemons.help/testimonials/",
      },
    ],
    height: "h-[176px]",
    mobileHeight: "group-hover:h-[176px]",
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      {
        name: "Sell Agreement",
        link: "https://nolemons.help/seller-agreement/",
      },
      {
        name: "Privacy Policy",
        link: "https://nolemons.help/privacy-policy/",
      },
      {
        name: "Term and Conditions",
        link: "https://nolemons.help/terms-and-conditions/",
      },
    ],
    height: "h-[132px]",
    mobileHeight: "group-hover:h-[132px]",
  },
];

export default function Navbar() {
  const { width } = useWindowSize();

  return (
    <nav className="sticky top-0 z-[11] bg-white shadow">
      <div className=" container m-auto flex justify-between items-center px-4 md:px-16">
        <Link href="/">
          <Image
            className="w-24"
            src="/logo.png"
            width={1500}
            height={238}
            alt="logo"
            priority
          />
        </Link>
        {width! > 1280 ? <DesktopNavbar /> : <MobileNavbar />}
      </div>
    </nav>
  );
}
