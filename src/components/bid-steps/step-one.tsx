import { useSteps } from "@/lib/context/steps-context";
import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function StepOne() {
  return (
    <div className=" pl-4 pb-20 border-l-[3px] border-green-300 relative">
      <span className="absolute bg-green-300 -left-3.5 -top-4 w-6 h-6 flex justify-center items-center text-black rounded-full">
        <FaCheck />
      </span>

      <div className=" text-3xl font-bold pl-4">Step 1</div>

      <p className=" text-gray-700 my-6">Select an offer option.</p>
      <div className=" flex flex-col gap-10">
        <StepOneButton
          title="Buy It Now at Asking Price"
          subtitle="Your full price bid will end the listing immediately with you as the
            winner."
          value="bid-price"
        />
        <StepOneButton
          title="Make a Starting Bid Offer Below Asking Price"
          subtitle="The seller will review your offer. If they accept, the live auction
            will commence."
          value="bid-offer"
        />
      </div>
    </div>
  );
}

interface StepOneButtonProps {
  title: string;
  subtitle: string;
  value: string;
}
const StepOneButton: React.FC<StepOneButtonProps> = ({
  title,
  subtitle,
  value,
}) => {
  const { buy, setBuy, setStep } = useSteps();

  function handleClick() {
    setBuy(value);
    setStep(1);
  }
  return (
    <button
      onClick={handleClick}
      className={` text-left border p-8 rounded-md ${
        buy == value ? " border-black" : ""
      }`}
    >
      <p className=" font-semibold mb-4">{title}</p>
      <span className=" text-gray-700">{subtitle}</span>
    </button>
  );
};
