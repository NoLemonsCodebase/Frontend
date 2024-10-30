import ZoomEffect from "@/components/anim/zoom";
import StripCompleteMessage from "@/components/stripe-complete-message";
import { MdOutlineDone } from "react-icons/md";

export default function PaymentSuccessPage({ searchParams }: any) {
  const session = {
    metadata: {
      ...searchParams,
    },
  };
  return (
    <section className="py-20">
      <div className=" relative  max-w-xl m-auto px-4">
        <ZoomEffect dur={0.4}>
          <MdOutlineDone className=" mb-4 bg-green-100 rounded-full text-green-600 p-4 text-7xl mx-auto " />
        </ZoomEffect>
        <div className="  mb-8">
          <p className="text-center text-gray-900 font-semibold text-2xl md:text-4xl mb-4">
            Thank you. <br /> Your offer has been submitted.
          </p>
          <div className=" text-gray-400 ">
            <p className=" mb-2">We have notified the owner. Next steps?</p>

            <ul className=" pl-4">
              <li>
                The NoLemons buyer fee has been successfully charged. If the
                offer is accepted, the fee will be held until the sale is
                complete, including signing the sale contract and receiving the
                vehicle.
              </li>
              <li>
                If the offer is rejected, the buyer fee will be refunded in
                full.
              </li>
            </ul>
          </div>
        </div>
        <StripCompleteMessage session={session} />
      </div>
    </section>
  );
}
