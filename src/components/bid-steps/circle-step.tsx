import { useSteps } from "@/lib/context/steps-context";
import React from "react";
import { FaCheck } from "react-icons/fa";

interface CirlceStepProps {
  step: number;
  position?: string;
}
const CircleStep: React.FC<CirlceStepProps> = ({
  step,
  position = " -top-4",
}) => {
  const { curStep } = useSteps();

  const check = curStep >= step;

  let circle_Style = `absolute border-2 -left-3.5 w-6 h-6 flex justify-center items-center text-black rounded-full ${position}`;

  if (check) {
    circle_Style += " bg-green-300 border-green-300";
  } else circle_Style += " bg-white border-gray-200";

  return <span className={circle_Style}>{check && <FaCheck />}</span>;
};

export default CircleStep;
