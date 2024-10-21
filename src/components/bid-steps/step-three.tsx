import { useSteps } from "@/lib/context/steps-context";
import React from "react";

import { ICar } from "@/lib/types";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutStrip from "./checkout-strip";
import CircleStep from "./circle-step";
import NumStep from "./num-step";
import BidPrice from "./bid-price";

// live mode key
// const stripePromise = loadStripe(
//   "pk_live_51JL5IsK7Uh3dA2avrcaKQsmpPwAVX6zC0Jt1VWes2KJEVT9QxjfkQ1Q7hMMMC9pmNEfbLEgiZtR1dbZjSVZwG4Sw00I8Ei9Fmq"
// );

// test key
const stripePromise = loadStripe(
  "pk_test_51JL5IsK7Uh3dA2av4dbj9UHxOR85jRY6JNpw3yX2KISMKgPzVnXMsTlQkEiO4K2CLSntNiCHnlJtAX1CVQhujPEn004D7AUAgS"
);

interface StepThreeProps {
  carDetail: ICar;
}

const StepThree: React.FC<StepThreeProps> = ({ carDetail }) => {
  const { curStep, buy } = useSteps();

  const is_step_3 = curStep == 3;
  let box_style = `pl-4 pt-20  border-l-[3px] relative`;
  if (is_step_3) box_style += ` border-green-300`;
  else box_style += ` border-white`;
  ///        ------------- test
  // ====================== JSX ====================
  return (
    <div className={box_style}>
      <CircleStep step={4} position=" top-20" />
      <NumStep step={3} />
      {/* {is_step_3 && buy == "bid-offer" && (
        <CheckOutStrip stripePromise={stripePromise} carDetail={carDetail} />
      )}

      {is_step_3 && buy == "bid-price" && (
        <BidPrice stripePromise={stripePromise} carDetail={carDetail} />
      )} */}

      {is_step_3 && (
        <CheckOutStrip stripePromise={stripePromise} carDetail={carDetail} />
      )}
    </div>
  );
};

export default StepThree;
