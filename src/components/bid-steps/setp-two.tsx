import { useSteps } from "@/lib/context/steps-context";
import React from "react";
import { FaCheck } from "react-icons/fa";

const ONE = 1;

export default function StepTwo() {
  const { buy, step } = useSteps();

  const message =
    buy == "bid-offer"
      ? "Enter your offer amount."
      : "You agree to offer the asking price.";

  const isStep2 = step > ONE;

  return (
    <div className=" pl-4 border-l-[3px] border-green-300 relative">
      <span
        className={`absolute ${
          isStep2 ? "bg-green-300" : "bg-white"
        } border-2 border-green-300 -left-3.5 -top-4 w-6 h-6 flex justify-center items-center text-black rounded-full`}
      >
        {isStep2 && <FaCheck />}
      </span>

      <div className=" text-3xl font-bold pl-4">Step 2</div>

      <p className=" text-gray-700 my-6">{message}</p>
    </div>
  );
}
