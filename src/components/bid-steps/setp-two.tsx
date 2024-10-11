import { useSteps } from "@/lib/context/steps-context";
import React, { useEffect } from "react";

import CircleStep from "./circle-step";
import NumStep from "./num-step";
import StartBid from "./start-bid";
import UserInfo from "./user-info";

interface StepTowProps {
  salePrice: number;
  currency: string;
}
const StepTwo: React.FC<StepTowProps> = ({ salePrice, currency }) => {
  const { buy, curStep } = useSteps();

  const message =
    buy == "bid-offer"
      ? "Enter your offer amount."
      : "You agree to offer the asking price.";

  const is_step_2 = curStep >= 2;
  let box_style = `pl-4 pt-20  border-l-[3px] relative`;
  if (is_step_2) box_style += ` border-green-300`;
  else box_style += ` border-white`;

  // =============== JSX ========================
  return (
    <div className={box_style}>
      <CircleStep position="top-20" step={3} />
      <NumStep step={2} />
      {is_step_2 && (
        <div>
          <p className=" text-gray-700 my-6">{message}</p>
          {buy == "bid-price" ? (
            <BuyItNow salePrice={salePrice} currency={currency} />
          ) : (
            <StartBid salePrice={salePrice} currency={currency} />
          )}
          <UserInfo />
          <Next />
        </div>
      )}
    </div>
  );
};

const BuyItNow: React.FC<StepTowProps> = ({ salePrice, currency }) => {
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
          {currency}{" "}
          <span className=" text-3xl font-normal">{price_render}</span>
        </p>
      </div>
    </>
  );
};

// ========================================================

function Next() {
  const { finalPrice, name, phone, setCurStep } = useSteps();

  const disableButton =
    !Boolean(name) || !Boolean(phone) || !Boolean(finalPrice);

  return (
    <button
      onClick={() => setCurStep(3)}
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
