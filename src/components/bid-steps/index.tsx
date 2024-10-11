"use client";

import Image from "next/image";

import StepOne from "./step-one";
import { ICar } from "@/lib/types";
import { StepsProvider } from "@/lib/context/steps-context";
import StepTwo from "./setp-two";
import StepThree from "./step-three";

import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

interface BidStepsProps {
  carDetail: ICar;
}

const BidSteps: React.FC<BidStepsProps> = ({ carDetail }) => {
  const { year, title, main_image, sale_price, category } = carDetail;
  const currency = category == "uae" ? "AED" : "USD";

  return (
    <section className=" py-10 pb-20 px-4 max-w-2xl m-auto">
      <BackBtn />
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
          <SellerInfo currency={currency} sale_price={sale_price} />
        </div>
      </div>
      <StepsProvider>
        <StepOne />
        <StepTwo salePrice={sale_price} currency={currency} />
        <StepThree carDetail={carDetail} />
      </StepsProvider>
    </section>
  );
};

interface SellerInfoProps {
  sale_price: number;
  currency: string;
}
const SellerInfo: React.FC<SellerInfoProps> = ({ sale_price, currency }) => {
  const sale_price_render = sale_price.toLocaleString("en-US");
  const highest_offer = (sale_price * 0.7).toLocaleString("en-US");

  return (
    <div className=" flex flex-col gap-4">
      <div className=" font-semibold">
        <span className=" block mb-2 text-xs">Seller asking</span>
        <span className=" text-3xl">
          {currency} {sale_price_render}
        </span>
      </div>
      <div className=" font-semibold">
        <span className=" block mb-2 text-xs">Highest offer</span>
        <span className=" text-3xl">
          {currency} {highest_offer}
        </span>
      </div>
      <span className=" text-xs font-semibold mt-4 text-green-700">
        The owner is accepting offers
      </span>
    </div>
  );
};

function BackBtn() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-green-600 hover:text-white transition-colors duration-300  bg-green-100 rounded-md py-2 pr-4 pl-1 font-semibold mb-8  relative overflow-hidden group"
    >
      <span className=" absolute bg-green-600 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 scale-0 group-hover:scale-100  block w-28 h-28 scale-1 rounded-full"></span>

      <div className=" relative flex items-center gap-4 ">
        <IoIosArrowBack className="  text-xl" />
        <span>Back</span>
      </div>
    </button>
  );
}

export default BidSteps;
