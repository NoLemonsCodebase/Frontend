import { useSteps } from "@/lib/context/steps-context";
import React from "react";
import { FaCheck } from "react-icons/fa";

export default function StepThree() {
  const { buy, step } = useSteps();

  const isStep3 = step == 3;
  const isStep2 = step == 2;

  return (
    <div className=" pl-4 pb-20 border-l-[3px] border-green-300 relative">
      <span
        className={`absolute ${
          isStep3 ? "bg-green-300" : "bg-white"
        } border-2 border-green-300 -left-3.5 -top-4 w-6 h-6 flex justify-center items-center text-black rounded-full`}
      >
        {isStep3 && <FaCheck />}
      </span>

      <div
        className={`text-3xl font-bold pl-4 ${
          isStep2 ? "opacity-100" : "opacity-20"
        }`}
      >
        Step 3
      </div>
    </div>
  );
}
