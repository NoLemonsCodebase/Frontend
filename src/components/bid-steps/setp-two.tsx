import { useSteps } from "@/lib/context/steps-context";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";

const ONE = 1;

interface StepTowProps {
  salePrice: number;
}
const StepTwo: React.FC<StepTowProps> = ({ salePrice }) => {
  const { buy, step } = useSteps();

  const message =
    buy == "bid-offer"
      ? "Enter your offer amount."
      : "You agree to offer the asking price.";

  const isStep2 = step > ONE;

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
    </div>
  );
};

const BuyItNow: React.FC<StepTowProps> = ({ salePrice }) => {
  const { setStep } = useSteps();

  const price_render = salePrice.toLocaleString();
  return (
    <>
      <div className="border p-8 rounded-md">
        <p className=" mb-4 text-gray-600">Your buy it now price:</p>
        <p className=" flex items-center gap-4 font-bold">
          AED <span className=" text-3xl font-normal">{price_render}</span>
        </p>
      </div>
      <button
        onClick={() => setStep(2)}
        className="mt-16 border py-3 px-8  rounded-full text-xl font-semibold"
      >
        Next
      </button>
    </>
  );
};

//========= const var
const PRICE_REGEX = /^[0-9,]+$/;

const StartBid: React.FC<StepTowProps> = ({ salePrice }) => {
  const { setStep } = useSteps();
  const [price, setPrice] = useState<string>("");
  const [difference, setDifference] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const lowest_price = salePrice * 0.7;
  const highest_price = salePrice * 1.3;

  function handlePrice(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (!value) {
      setPrice("");
      return;
    }
    if (!PRICE_REGEX.test(value) || value.length > 9) return;
    const num = Number(value.split(",").join(""));
    setPrice(num.toLocaleString("en-US"));
  }

  function handleBlure(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const num = Number(value.split(",").join(""));

    const persentage = (num / salePrice) * 100;
    setDifference(persentage - 100);

    if (num <= lowest_price) {
      setError(
        `Your offer is lower than the minimum price of AED ${lowest_price.toLocaleString(
          "en-US"
        )}`
      );
      return;
    }

    if (num >= highest_price) {
      setError(
        `Your offer is higher than the highest price of AED ${highest_price.toLocaleString(
          "en-US"
        )}`
      );
      return;
    }

    setError("");
  }

  useEffect(() => {
    setPrice(salePrice.toLocaleString("en-US"));
  }, []);

  return (
    <>
      <div className="border p-8 rounded-md">
        <p className=" mb-4 text-gray-600">Your buy it now price:</p>
        <div className="flex items-center flex-wrap gap-4 font-bold">
          AED{" "}
          <input
            id="offer_price"
            name="offer_price"
            value={price}
            className=" border p-4 rounded-md max-w-[150px] focus:border-gray-500 outline-none"
            onChange={handlePrice}
            onBlur={handleBlure}
            required
          />
          <span className=" text-sm text-gray-700">
            ({difference.toFixed(2)} %)
          </span>
        </div>
      </div>
      <span className=" block mt-4 text-sm text-red-600 bg-red-100 w-fit p-1 rounded-md">
        {error}
      </span>
      <button
        onClick={() => setStep(2)}
        disabled={Boolean(error)}
        className={`mt-16 border py-3 px-8  rounded-full text-xl font-semibold disabled:cursor-not-allowed ${
          !error ? "border-opacity-100" : "opacity-50"
        }`}
      >
        Next
      </button>
    </>
  );
};

// ========================================================

export default StepTwo;
