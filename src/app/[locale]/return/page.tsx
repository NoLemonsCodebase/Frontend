"use client";
import React, { useEffect, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";

import StripCompleteMessage from "@/components/stripe-complete-message";
import ZoomEffect from "@/components/anim/zoom";
import { MdOutlineDone } from "react-icons/md";

export default function Return() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const search_params = useSearchParams();

  useEffect(() => {
    if (!search_params) return; // Early return if search_params is not available

    const sessionId = search_params.get("session_id") ?? "";

    async function getSession(sessionId: string) {
      try {
        const res = await fetch(
          `/api/checkout-session?session_id=${sessionId}`
        );

        if (!res.ok) {
          throw new Error("Something went wrong");
        }

        const { session } = await res.json();
        setSession(session);
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setLoading(false);
      }
    }
    getSession(sessionId);
  }, []);

  if (session?.status === "open") {
    return redirect("/");
  }

  if (loading)
    return (
      <section className=" py-20  ">
        <div className=" py-10 flex flex-col items-center justify-center gap-6">
          <div className="loader-sppiner relative"></div>
          <p className=" text-xl">loading...</p>
        </div>
      </section>
    );

  if (session?.status === "complete") {
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
                  If the offer is accepted the NoLemons buyer fee will be held
                  until the sale is complete. Including signing the sale
                  contract and receiving the vehicle.
                </li>
                <li>
                  If the offer is rejected you will not be charged any fees.
                </li>
              </ul>
            </div>
          </div>
          <StripCompleteMessage session={session} />
        </div>
      </section>
    );
  }

  return null;
}
