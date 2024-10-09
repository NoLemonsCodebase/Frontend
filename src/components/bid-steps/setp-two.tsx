import { useSteps } from "@/lib/context/steps-context";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

import StartBid from "./start-bid";
import UserInfo from "./user-info";

const TWO = 2;

interface StepTowProps {
  salePrice: number;
}
const StepTwo: React.FC<StepTowProps> = ({ salePrice }) => {
  const { buy, step, setStep } = useSteps();

  const message =
    buy == "bid-offer"
      ? "Enter your offer amount."
      : "You agree to offer the asking price.";

  const isStep2 = step == TWO;

  return (
    <div className=" pl-4 pb-20 border-l-[3px] border-green-300 relative">
      <span
        className={`absolute ${
          isStep2 ? "bg-green-300" : "bg-white"
        } border-2 border-green-300 -left-3.5 -top-4 w-6 h-6 flex justify-center items-center text-black rounded-full`}
      >
        {isStep2 && <FaCheck />}
      </span>

      <div className=" text-3xl font-bold pl-4">Step 2</div>

      <p className=" text-gray-700 my-6">{message}</p>
      {buy == "bid-price" ? (
        <BuyItNow salePrice={salePrice} />
      ) : (
        <StartBid salePrice={salePrice} />
      )}

      <UserInfo />
      <Next />
    </div>
  );
};

const BuyItNow: React.FC<StepTowProps> = ({ salePrice }) => {
  const { setFinalPrice } = useSteps();
  const price_render = salePrice.toLocaleString();

  useEffect(() => {
    setFinalPrice(price_render);
  }, [salePrice]);

  return (
    <>
      <div className="border p-8 rounded-md">
        <p className=" mb-4 text-gray-600">Your buy it now price:</p>
        <p className=" flex items-center gap-4 font-bold">
          AED <span className=" text-3xl font-normal">{price_render}</span>
        </p>
      </div>
    </>
  );
};

// ========================================================

function Next() {
  const { finalPrice, name, phone, setStep } = useSteps();

  const disableButton =
    !Boolean(name) || !Boolean(phone) || !Boolean(finalPrice);

  return (
    <button
      onClick={() => setStep(2)}
      disabled={disableButton}
      className={`mt-16 border py-3 px-8  rounded-full text-xl font-semibold disabled:cursor-not-allowed ${
        disableButton ? "opacity-50" : "opacity-100"
      }`}
    >
      Next
    </button>
  );
}

export default StepTwo;
