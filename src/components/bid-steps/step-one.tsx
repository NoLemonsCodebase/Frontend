import { useSteps } from "@/lib/context/steps-context";
import React from "react";

import CircleStep from "./circle-step";

export default function StepOne() {
  return (
    <div className=" pl-4  border-l-[3px] border-green-300 relative">
      <CircleStep step={2} />

      <div className=" text-3xl font-bold pl-4">Step 1</div>

      <p className=" text-gray-700 my-6">Select an offer option.</p>
      <div className=" flex flex-col gap-10">
        <StepOneButton title="Buy It Now" value="bid-price" />
        <StepOneButton
          title="Make an Offer"
          subtitle="The seller will review your offer."
          moreTxt="If they accept, the car will be yours."
          value="bid-offer"
        />
      </div>
    </div>
  );
}

interface StepOneButtonProps {
  title: string;
  subtitle?: string;
  moreTxt?: string;
  value: string;
}
const StepOneButton: React.FC<StepOneButtonProps> = ({
  title,
  subtitle,
  moreTxt,
  value,
}) => {
  const { buy, setBuy, setCurStep } = useSteps();

  function handleClick() {
    setBuy(value);
    setCurStep(2);
  }
  return (
    <button
      onClick={handleClick}
      className={` text-left  border p-6 rounded-md ${
        buy == value ? " border-black" : ""
      }`}
    >
      <p className=" font-semibold">{title}</p>
      <span className=" text-gray-700 block">{subtitle}</span>
      <span className=" text-gray-700 block">{moreTxt}</span>
    </button>
  );
};
