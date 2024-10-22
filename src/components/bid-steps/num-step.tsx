import { useSteps } from "@/lib/context/steps-context";
import React from "react";

interface NumStepProps {
  step: number;
}
const NumStep: React.FC<NumStepProps> = ({ step }) => {
  const { curStep } = useSteps();

  const check = curStep >= step;

  let num_Style = `text-3xl font-bold pl-4`;

  if (check) {
    num_Style += " opacity-100";
  } else num_Style += " opacity-20";

  return <div className={num_Style}>Step {step}</div>;
};

export default NumStep;
