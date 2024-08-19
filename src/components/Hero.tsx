import React from "react";
import Image from "next/image";
import { CaretRightIcon } from "@radix-ui/react-icons";
import { FlipWords } from "./ui/flip-words";
import { RiArrowDropRightLine } from "react-icons/ri";

const wordsRender: string[] = [
  "Global Shipping",
  "Aftersales Support",
  "Fully Inspected",
  "Detailed Vehicle History",
  "Professional Photoshoots",
];

const Hero = () => {
  return (
    <section className=" overflow-hidden">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="https://www.nolemons.ae/en/p/buyer-protection"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200"
          role="alert"
        >
          <div className="px-4 py-1.5 mr-3">
            <Image
              src="/images/protected.png"
              alt="Protected"
              width={30}
              height={30}
              priority
            />
          </div>
          <span className="text-sm font-small">Full Buyer Protection</span>
          <RiArrowDropRightLine className=" text-3xl" />
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Exciting cars.
          <br /> Carefully checked & honestly presented.
        </h1>
        <FlipWords
          words={wordsRender}
          className="md:text-4xl text-2xl font-bold text-[#455e8b]"
        />
      </div>
    </section>
  );
};

export default Hero;
