import { makeAnOfferAction } from "@/lib/actions";
import { ICar } from "@/lib/types";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { CiBadgeDollar } from "react-icons/ci";
import { TbArrowBackUpDouble } from "react-icons/tb";
import PhoneInput from "react-phone-input-2";
import XYAnim from "../anim/xy-anim";
import SuccessMessage from "./success-message";

type Props = {
  dirAnimation: string;
  carDetail: ICar;
  closeMake: () => void;
};

const initialState: any = {
  message: "",
  nameErr: "",
  phoneErr: "",
  error: "",
};

//========= const var
const PRICE_REGEX = /^[0-9,]+$/;
const UDS_TO_AED: number = 3.67;

export default function MakeAnOffer({
  carDetail,
  dirAnimation,
  closeMake,
}: Props) {
  const [state, formAction] = useFormState(makeAnOfferAction, initialState);
  const { id, title, year, sale_price, currency } = carDetail;

  const current_currency = currency ?? "USD";

  const inputStyle =
    "border outline-none ring-green-400 transition-all duration-300 focus:ring-2 block w-full p-2 mt-1 rounded-lg";
  return (
    <div className="z-[21] fixed inset-0 flex justify-center items-end md:items-center ">
      <XYAnim
        classes="rounded-t-xl bg-white w-full md:rounded-xl relative md:w-[500px]"
        xy={dirAnimation}
        dur={0.3}
      >
        {state.message ? (
          <SuccessMessage onCloseMake={closeMake} />
        ) : (
          <div className="px-4 py-10 md:p-10">
            <div className="left-1/2 w-20 h-20 -top-10 -translate-x-1/2 absolute rounded-full bg-white p-2 ">
              <CiBadgeDollar className=" m-auto text-5xl text-green-600 " />
            </div>

            <div className=" flex items-start gap-4 mb-2">
              <div className=" font-semibold text-xl">
                Make an offer for {year} {title}
              </div>
              <button className=" border p-1 rounded-md" onClick={closeMake}>
                <TbArrowBackUpDouble className="text-xl lg:text-2xl" />
              </button>
            </div>

            <div className=" font-semibold text-sm text-gray-500 ">
              Asking price: {current_currency} {sale_price.toLocaleString()}
            </div>

            <form className=" mt-4" action={formAction}>
              {/* Name Field */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First and Last Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={inputStyle}
                  placeholder="Ahmed Adel"
                  required
                />
                <Error errorMessage={state?.nameErr} />
              </div>

              {/* Phone Number Field */}
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  WhatsApp Number:
                </label>
                <PhoneInput
                  specialLabel=""
                  inputClass="custom-phone-input"
                  preferredCountries={["sa", "ae", "qa", "kw", "bh", "om"]}
                  
                  country={"ae"}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                />
                <Error errorMessage={state?.phoneErr} />
              </div>

              {/* Offer Price Field */}
              <OfferPriceFeilds
                inputStyle={inputStyle}
                currency={current_currency}
              />
              <Error errorMessage={state?.error} />

              <input name="sale_price" value={sale_price} hidden readOnly />
              <input name="car_id" value={id} hidden readOnly />
              <input name="currency" value={current_currency} hidden readOnly />
              {/* Submit Button */}
              <ButtonSumbit />
            </form>
          </div>
        )}
      </XYAnim>
    </div>
  );
}

// ========================================================
function ButtonSumbit() {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        disabled={pending}
        type="submit"
        className="bg-green-500  text-white font-bold mt-2 py-2 px-4 rounded w-full hover:bg-green-600 disabled:bg-green-900 disabled:cursor-not-allowed"
      >
        {pending ? "Submiting..." : "Submit Offer"}
      </button>
    </div>
  );
}

// ========================================================
function Error({ errorMessage }: any) {
  return (
    <>
      {errorMessage && (
        <span className=" bg-red-100 text-sm text-red-600 px-2 py-0.5 rounded-md mt-2 w-fit block max-w-[400px]">
          {errorMessage}
        </span>
      )}
    </>
  );
}

// ========================================================
function OfferPriceFeilds({
  inputStyle,
  currency,
}: {
  inputStyle: string;
  currency: string;
}) {
  const [price, setPrice] = useState<string>("");

  function handlePrice(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (!value) {
      setPrice("");
      return;
    }
    if (!PRICE_REGEX.test(value) || value.length > 9) return;
    const num = Number(value.split(",").join(""));
    setPrice(num.toLocaleString());
  }

  return (
    <div className="mb-4">
      <label
        htmlFor="offer_price"
        className="block text-sm font-medium text-gray-700"
      >
        Offer Price:
      </label>

      <input
        id="offer_price"
        name="offer_price"
        className={inputStyle}
        placeholder={`${currency} 1,000`}
        value={price}
        onChange={handlePrice}
        required
      />
    </div>
  );
}
