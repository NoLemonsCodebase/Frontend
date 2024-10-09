import ZoomEffect from "@/components/anim/zoom";
import useSoundCash from "@/lib/hooks/use-cash-sound";
import Link from "next/link";

import { MdOutlineDone } from "react-icons/md";

export default function SuccessMessage({ urlAfterComplete }: any) {
  useSoundCash();
  return (
    <div className=" flex flex-col justify-center items-center relative ">
      <ZoomEffect dur={0.4}>
        <MdOutlineDone className=" mb-4 bg-green-100 rounded-full text-green-600 p-4 text-9xl mx-auto" />
      </ZoomEffect>
      <p className=" uppercase mb-2 text-gray-600">Submission complete</p>
      <p className=" text-gray-400 text-center mb-6">
        Thank you for submitting your offer.
        <br /> The owner has been notified and will contact you directly if
        interested.
      </p>

      <Link
        href={urlAfterComplete}
        className=" bg-green-500 text-center hover:bg-green-600 px-4 py-2 rounded-full min-w-[150px] text-white"
      >
        Done!
      </Link>
    </div>
  );
}
