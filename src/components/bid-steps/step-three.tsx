import { useSteps } from "@/lib/context/steps-context";
import React, { useCallback } from "react";
import { FaCheck } from "react-icons/fa";
import FormStrip from "./form-strip";
import {
  Elements,
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Q7INO08IA0uLya05iW6lVNwyxY4ePIUNK845DNtOmvRJzaBpRNdBzGcy1LekyBqitcGDbIpaNRot1ICEouc0kx900IRKDPZ84"
);

export default function StepThree() {
  const { buy, step } = useSteps();

  const isStep3 = step == 3;
  const isStep2 = step == 2;

  // test
  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    const res = await fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Added Content-Type header
      },
      body: JSON.stringify({ customer: 3 }),
    });
    const data = await res.json();
    return data.clientSecret;
  }, []);

  const options = { fetchClientSecret };

  return (
    <div className=" pl-4 pb-20 border-l-[3px] border-green-300 relative">
      <span
        className={`absolute ${
          isStep3 ? "bg-green-300" : "bg-white"
        } border-2 border-green-300 -left-3.5 -top-4 w-6 h-6 flex justify-center items-center text-black rounded-full`}
      >
        {isStep3 && <FaCheck />}
      </span>
      <div
        className={`text-3xl font-bold pl-4 ${
          isStep2 ? "opacity-100" : "opacity-20"
        }`}
      >
        Step 3
      </div>
      {/* <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount,
          currency: "usd",
        }}
      >
        <FormStrip amount={amount} />
      </Elements> */}
      {isStep2 && (
        <div id="checkout" className=" mt-10">
          <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      )}
    </div>
  );
}
