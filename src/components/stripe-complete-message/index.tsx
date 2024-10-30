"use client";
import React, { useEffect } from "react";
import DetailSuccessMessage from "./detail-success-message";

export default function StripCompleteMessage({ session }: any) {
  // refactor meta for backend
  const { metadata } = session;
  const { phone, id, currency, finalPrice } = metadata;

  const refactor_metadata = {
    phone: `+${phone}`,
    car_id: id,
    currency,
    offer: finalPrice.split(",").join(""),
  };

  useEffect(() => {
    async function SendMetaData() {
      try {
        const res = await fetch(
          `https://nolemons2.onrender.com/payment/completed-phone/`,
          {
            method: "POST",
            body: JSON.stringify({ ...refactor_metadata }),
          }
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const message = await res.json();
      } catch (error) {
        console.error("Error sending data to slack:", error);
      }
    }
    SendMetaData();
  }, []);

  return <DetailSuccessMessage session={session} />;
}
