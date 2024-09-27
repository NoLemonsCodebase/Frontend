import useSoundCash from "@/lib/hooks/use-cash-sound";

import { FaHandshake } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

export default function SuccessMessage({ onCloseMake }: any) {
  useSoundCash();
  return (
    <div className=" flex flex-col justify-center items-center relative w-full min-h-[400px]">
      <button
        onClick={onCloseMake}
        className="border absolute right-4 top-4 p-1 rounded-md"
      >
        <IoCloseOutline className="text-xl lg:text-2xl" />
      </button>
      <FaHandshake className=" text-green-600 text-8xl mx-auto" />
      <p>Thank you for submitting your offer</p>
    </div>
  );
}
