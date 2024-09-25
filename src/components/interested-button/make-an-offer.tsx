import { ICar } from "@/lib/types";
import { FaCommentDollar, FaCommentsDollar } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import XYAnim from "../anim/xy-anim";

type Props = {
  dirAnimation: string;
  carDetail: ICar;
  closeMake: () => void;
};

export default function MakeAnOffer({
  carDetail,
  dirAnimation,
  closeMake,
}: Props) {
  const { title, sale_price } = carDetail;
  return (
    <div className="z-[12] fixed inset-0 flex justify-center items-end md:items-center">
      <XYAnim xy={dirAnimation} dur={0.3}>
        <div className="bg-white rounded-t-xl p-4 pt-10  relative">
          <div className="left-1/2 w-20 h-20 -top-10 -translate-x-1/2 absolute rounded-full bg-white p-2">
            <FaCommentsDollar className=" m-auto text-5xl text-green-600 " />
          </div>

          <div className=" flex items-start gap-4">
            <div className=" font-semibold text-xl">
              Make An Offer for {title}
            </div>
            <button className=" border p-1 rounded-md" onClick={closeMake}>
              <IoCloseOutline className="text-xl lg:text-2xl" />
            </button>
          </div>

          <div className=" font-semibold text-sm text-gray-500">
            Asking Price: ${sale_price.toLocaleString()}{" "}
          </div>

          <form className=" mt-4" action="">
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
                className="border block w-full p-2 mt-1 rounded-lg"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your WhatsApp Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border block w-full p-2 rounded-lg mt-1"
                placeholder="+978 545456464"
                required
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
                className="border block w-full p-2 mt-1 rounded-lg"
                placeholder="$1000"
                min="0"
                step="0.01"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-green-500 text-white font-bold mt-2 py-2 px-4 rounded w-full hover:bg-green-600"
              >
                Submit Offer
              </button>
            </div>
          </form>
        </div>
      </XYAnim>
    </div>
  );
}
