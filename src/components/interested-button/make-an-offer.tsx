import { ICar } from "@/lib/types";
import { FaCommentsDollar } from "react-icons/fa";
import { TbArrowBackUpDouble } from "react-icons/tb";
import PhoneInput from "react-phone-input-2";
import XYAnim from "../anim/xy-anim";
import { useFormState, useFormStatus } from "react-dom";
import { makeAnOfferAction } from "@/lib/actions";

type Props = {
  dirAnimation: string;
  carDetail: ICar;
  closeMake: () => void;
};

const initialState: any = {
  message: "",
};

export default function MakeAnOffer({
  carDetail,
  dirAnimation,
  closeMake,
}: Props) {
  const [state, formAction] = useFormState(makeAnOfferAction, initialState);
  const { title, sale_price } = carDetail;
  const inputStyle =
    "border outline-none ring-green-400 transition-all duration-300 focus:ring-2 block w-full p-2 mt-1 rounded-lg";
  return (
    <div className="z-[12] fixed inset-0 flex justify-center items-end md:items-center ">
      <XYAnim xy={dirAnimation} dur={0.3}>
        <div className="bg-white rounded-t-xl md:rounded-xl px-4 py-10 relative md:p-10 md:w-[500px]">
          <div className="left-1/2 w-20 h-20 -top-10 -translate-x-1/2 absolute rounded-full bg-white p-2 ">
            <FaCommentsDollar className=" m-auto text-5xl text-green-600 " />
          </div>

          <div className=" flex items-start md:items-center gap-4 mb-2">
            <div className=" font-semibold text-xl">
              Make An Offer for {title}
            </div>
            <button className=" border p-1 rounded-md" onClick={closeMake}>
              <TbArrowBackUpDouble className="text-xl lg:text-2xl" />
            </button>
          </div>

          <div className=" font-semibold text-sm text-gray-500 ">
            Asking Price: ${sale_price.toLocaleString()}{" "}
          </div>

          <form className=" mt-4" action={formAction}>
            {/* Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={inputStyle}
                placeholder="John Doe"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Enter Your WhatsApp Number:
              </label>
              <PhoneInput
                specialLabel=""
                inputClass="custom-phone-input"
                preferredCountries={["sa", "ae", "qa", "kw", "bh", "om"]}
                country={"ae"}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />
            </div>

            {/* Offer Price Field */}
            <div className="mb-4">
              <label
                htmlFor="offer_price"
                className="block text-sm font-medium text-gray-700"
              >
                Offer Price:
              </label>
              <input
                type="number"
                id="offer_price"
                name="offer_price"
                className={inputStyle}
                placeholder="$1000"
                min="0"
                step="0.01"
                required
              />
              {state?.message && (
                <span className=" bg-red-100 text-sm text-red-600 px-2 py-0.5 rounded-md mt-2 w-fit block max-w-[400px]">
                  {state?.message}
                </span>
              )}
            </div>
            <input name="actual_price" value={sale_price} hidden readOnly />
            {/* Submit Button */}
            <ButtonSumbit />
          </form>
        </div>
      </XYAnim>
    </div>
  );
}

function ButtonSumbit() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        disabled={pending}
        type="submit"
        className="bg-green-500  text-white font-bold mt-2 py-2 px-4 rounded w-full hover:bg-green-600 disabled:bg-green-900"
      >
        {pending ? "Submiting..." : "Submit Offer"}
      </button>
    </div>
  );
}
