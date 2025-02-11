"use client";
import React, { useEffect } from "react";
import DetailSuccessMessage from "./detail-success-message";
import { sendErrorMessageToSlack } from "@/lib/car-actions";

export default function StripCompleteMessage({ session }: any) {
  // refactor meta for backend
  const { metadata } = session;
  const { phone, id, currency, finalPrice, name } = metadata;

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
          `https://nolemons-dev.onrender.com/payment/completed-phone555/`,
          {
            method: "POST",
            body: JSON.stringify({ ...refactor_metadata }),
          }
        );
        if (!res.ok) {
          throw new Error(
            `Something went wrong with capturing the offer's details in the last confirm page. name: ${name} | phone: ${phone} carId: ${id}`
          );
        }
      } catch (error: any) {
        sendErrorMessageToSlack(error.message);
        console.error(error);
      }
    }
    SendMetaData();
  }, []);

  return <DetailSuccessMessage session={session} />;
}
