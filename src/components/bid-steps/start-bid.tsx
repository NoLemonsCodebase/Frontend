import { useSteps } from "@/lib/context/steps-context";
import { useEffect, useState } from "react";

interface StepTowProps {
  salePrice: number;
  currency: string;
}

//========= const var
const PRICE_REGEX = /^[0-9,]+$/;

const StartBid: React.FC<StepTowProps> = ({ salePrice, currency }) => {
  const { setFinalPrice } = useSteps();

  //==================
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
      setFinalPrice("");
      return;
    }

    if (num >= highest_price) {
      setError(
        `Your offer is higher than the highest price of AED ${highest_price.toLocaleString(
          "en-US"
        )}`
      );
      setFinalPrice("");

      return;
    }

    setError("");
    setFinalPrice(value);
  }

  useEffect(() => {
    const salePriceToLcalString = salePrice.toLocaleString("en-US");
    setPrice(salePriceToLcalString);
    setFinalPrice(salePriceToLcalString);
  }, []);

  return (
    <>
      <div className="border p-8 rounded-md">
        <div className="flex items-center flex-wrap gap-4 font-bold">
          {currency}{" "}
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
            ({Math.round(difference)} %)
          </span>
        </div>
      </div>
      {error && (
        <span className=" block mt-4 text-sm text-red-600 bg-red-100 w-fit p-1 rounded-md">
          {error}
        </span>
      )}
    </>
  );
};

export default StartBid;
