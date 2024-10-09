import { useSteps } from "@/lib/context/steps-context";
import React, { useEffect, useState } from "react";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51JL5IsK7Uh3dA2av4dbj9UHxOR85jRY6JNpw3yX2KISMKgPzVnXMsTlQkEiO4K2CLSntNiCHnlJtAX1CVQhujPEn004D7AUAgS"
);

export default function StepThree() {
  const { step } = useSteps();

  const isStep2 = step == 2;

  return (
    <div className=" pl-4 pb-20 border-l-[3px] border-green-300 relative">
      <span
        className={`absolute border-2 border-green-300 bg-white -left-3.5 -top-4 w-6 h-6 flex justify-center items-center text-black rounded-full`}
      ></span>
      <div
        className={`text-3xl font-bold pl-4 ${
          isStep2 ? "opacity-100" : "opacity-20"
        }`}
      >
        Step 3
      </div>

      {isStep2 && <CheckOutStrip />}
    </div>
  );
}

function CheckOutStrip() {
  const [clientSecret, setClientSecret] = useState<string>("");

  const { name, phone, finalPrice } = useSteps();

  useEffect(() => {
    async function fetchClientSecret() {
      const res = await fetch("/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Added Content-Type header
        },
        body: JSON.stringify({ name, phone, finalPrice }),
      });
      const { session } = await res.json();

      setClientSecret(session.client_secret);
    }

    fetchClientSecret();
  }, []);

  const options = { clientSecret };

  return (
    <div id="checkout" className=" mt-10">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}
