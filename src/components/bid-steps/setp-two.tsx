import { useSteps } from "@/lib/context/steps-context";
import React, { useEffect } from "react";

import CircleStep from "./circle-step";
import NumStep from "./num-step";
import StartBid from "./start-bid";
import UserInfo from "./user-info";
import RegectedOffer from "./regected-offer";
import { ICar } from "@/lib/types";
import { sendErrorMessageToSlack } from "@/lib/car-actions";

interface StepsProps {
  carDetail: ICar;
}

const StepTwo: React.FC<StepsProps> = ({ carDetail }) => {
  const { buy, curStep } = useSteps();

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
        <div className=" mt-6">
          <RegectedOffer carDetail={carDetail} />
          <p className=" text-gray-700 my-6">Your offer:</p>
          {buy == "bid-price" ? (
            <BuyItNow carDetail={carDetail} />
          ) : (
            <StartBid carDetail={carDetail} />
          )}
          <UserInfo />
          <Next carDetail={carDetail} />
        </div>
      )}
    </div>
  );
};

const BuyItNow: React.FC<StepsProps> = ({ carDetail }) => {
  const { setFinalPrice } = useSteps();

  const { sale_price, currency } = carDetail;

  const price_render = sale_price.toLocaleString();

  useEffect(() => {
    setFinalPrice(price_render);
  }, [sale_price]);

  return (
    <>
      <div className="border p-8 rounded-md">
        <p className=" flex items-center gap-4 font-bold">
          {currency}{" "}
          <span className=" text-3xl font-normal">{price_render}</span>
        </p>
      </div>
    </>
  );
};

// ========================================================

const Next: React.FC<StepsProps> = ({ carDetail }) => {
  const { finalPrice, name, phone, setCurStep } = useSteps();
  const { sale_price, currency, id: carId, category } = carDetail;

  const disableButton =
    !Boolean(name) || !Boolean(phone) || !Boolean(finalPrice);

  // prepare data to send it to the backend
  const prepare_data = {
    name,
    phone: `+${phone}`,
    car_id: carId,
    category,
    currency,
    offer: finalPrice.replaceAll(",", ""),
    sale_price,
  };
  // make request
  async function sendDataHandler() {
    setCurStep(3);
    // try {
    //   const res = await fetch("https://nolemons2.onrender.com/user-offer/", {
    //     method: "POST",
    //     body: JSON.stringify(prepare_data),
    //   });
    //   if (!res.ok) {
    //     throw new Error(
    //       "Something went wrong with capturing the user's details in step 2."
    //     );
    //   }
    // } catch (e: any) {
    //   sendErrorMessageToSlack(e.message);
    // }
  }

  return (
    <button
      onClick={sendDataHandler}
      disabled={disableButton}
      className={`mt-16 border py-3 px-8  rounded-full text-xl font-semibold disabled:cursor-not-allowed ${
        disableButton ? "opacity-50" : "opacity-100"
      }`}
    >
      Next
    </button>
  );
};

export default StepTwo;
