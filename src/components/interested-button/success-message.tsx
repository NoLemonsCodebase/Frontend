import useSoundCash from "@/lib/hooks/use-cash-sound";

import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import ZoomEffect from "../anim/zoom";
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
      <ZoomEffect dur={0.4}>
        <MdOutlineDone className=" mb-4 bg-green-100 rounded-full text-green-600 p-4 text-9xl mx-auto" />
      </ZoomEffect>
      <p className=" uppercase mb-1 text-gray-600">Submition complete</p>
      <p className=" text-gray-400 text-center mb-6">
        Thank you for submitting your offer
      </p>

      <button
        onClick={onCloseMake}
        className=" bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full min-w-[150px] text-white"
      >
        Done!
      </button>
    </div>
  );
}
