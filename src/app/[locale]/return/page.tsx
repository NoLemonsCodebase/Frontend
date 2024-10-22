"use client";
import React, { useEffect, useState } from "react";
import { redirect, useSearchParams } from "next/navigation";
import SuccessMessage from "./seccess-message";

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
        <Complete session={session} />
      </section>
    );
  }

  return null;
}

function Complete({ session }: any) {
  // refactor meta for backend
  const { metadata } = session;
  const { phone, id, currency, finalPrice } = metadata;

  const refactor_metadata = {
    phone: `+${phone}`,
    car_id: id,
    currency,
    offer: finalPrice.split(",").join(""),
  };

  // useEffect(() => {
  //   async function SendMetaData() {
  //     try {
  //       const res = await fetch(
  //         `https://nolemons2.onrender.com/payment/completed-phone/`,
  //         {
  //           method: "POST",
  //           body: JSON.stringify({ ...refactor_metadata }),
  //         }
  //       );
  //       if (!res.ok) {
  //         throw new Error("Something went wrong");
  //       }
  //       const message = await res.json();
  //     } catch (error) {
  //       console.error("Error sending data to slack:", error);
  //     }
  //   }
  //   SendMetaData();
  // }, []);

  return <SuccessMessage session={session} />;
}
