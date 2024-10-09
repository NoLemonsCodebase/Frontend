"use client";

import Image from "next/image";
import React, { useState } from "react";
import StepOne from "./step-one";
import { ICar } from "@/lib/types";
import { StepsProvider } from "@/lib/context/steps-context";
import StepTwo from "./setp-two";
import StepThree from "./step-three";

interface BidStepsProps {
  carDetail: ICar;
}

const BidSteps: React.FC<BidStepsProps> = ({ carDetail }) => {
  const { year, title, main_image, sale_price } = carDetail;

  return (
    <section className=" py-20 px-4 max-w-2xl m-auto">
      <h1 className=" text-3xl font-semibold mb-4">Buy It Now</h1>
      <p className=" text-gray-600">
        We’ll guide you through the offer process in just 3 easy steps.
      </p>

      <div className=" my-10 border-b-2 pb-16 flex flex-col md:flex-row gap-8">
        <div className=" md:max-w-xs rounded-lg overflow-hidden">
          <Image
            className=" object-cover h-full"
            src={main_image}
            width={1110}
            height={740}
            priority
            alt="main image"
          />
        </div>
        <div>
          <div className="mb-8 font-semibold">
            {year} {title}
          </div>
          <SellerInfo sale_price={sale_price} />
        </div>
      </div>
      <StepsProvider>
        <StepOne />
        <StepTwo salePrice={sale_price} />
        <StepThree />
      </StepsProvider>
    </section>
  );
};

interface SellerInfoProps {
  sale_price: number;
}
const SellerInfo: React.FC<SellerInfoProps> = ({ sale_price }) => {
  const sale_price_render = sale_price.toLocaleString("en-US");
  const highest_offer = (sale_price * 0.7).toLocaleString("en-US");

  return (
    <div className=" flex flex-col gap-4">
      <div className=" font-semibold">
        <span className=" block mb-2 text-xs">Seller asking</span>
        <span className=" text-3xl">AED {sale_price_render}</span>
      </div>
      <div className=" font-semibold">
        <span className=" block mb-2 text-xs">Highest offer</span>
        <span className=" text-3xl">AED {highest_offer}</span>
      </div>
      <span className=" text-xs font-semibold mt-4 text-green-700">
        Accepting starting bids
      </span>
    </div>
  );
};

export default BidSteps;
