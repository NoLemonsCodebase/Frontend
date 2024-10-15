import { useSteps } from "@/lib/context/steps-context";
import React, { useEffect, useState } from "react";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import NumStep from "./num-step";
import CircleStep from "./circle-step";
import { ICar } from "@/lib/types";

const stripePromise = loadStripe(
  "pk_live_51JL5IsK7Uh3dA2avrcaKQsmpPwAVX6zC0Jt1VWes2KJEVT9QxjfkQ1Q7hMMMC9pmNEfbLEgiZtR1dbZjSVZwG4Sw00I8Ei9Fmq"
);

interface StepThreeProps {
  carDetail: ICar;
}

const StepThree: React.FC<StepThreeProps> = ({ carDetail }) => {
  const { curStep } = useSteps();

  const is_step_3 = curStep == 3;
  let box_style = `pl-4 pt-20  border-l-[3px] relative`;
  if (is_step_3) box_style += ` border-green-300`;
  else box_style += ` border-white`;

  // ====================== JSX ====================
  return (
    <div className={box_style}>
      <CircleStep step={4} position=" top-20" />
      <NumStep step={3} />
      {is_step_3 && <CheckOutStrip carDetail={carDetail} />}
    </div>
  );
};

export default StepThree;

const CheckOutStrip: React.FC<StepThreeProps> = ({ carDetail }) => {
  const [clientSecret, setClientSecret] = useState<string>("");

  const { name, phone, finalPrice } = useSteps();
  const { id, title, year, main_image, sale_price, category, buyers_fee } =
    carDetail;

  // =============== prepare data for send to strip session ========
  const currency = category == "uae" ? "AED" : "USD";
  const prepare_data = {
    id,
    title,
    year,
    main_image,
    sale_price,
    name,
    phone,
    finalPrice,
    currency,
    buyers_fee,
  };

  useEffect(() => {
    async function fetchClientSecret() {
      const res = await fetch("/api/checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Added Content-Type header
        },
        body: JSON.stringify({ prepare_data }),
      });
      const { session } = await res.json();

      setClientSecret(session.client_secret);
    }

    fetchClientSecret();
  }, []);

  const options = { clientSecret };

  // ==========================

  const buyer_fee_num = (
    (Number(buyers_fee?.[0]) / 100) *
    sale_price
  ).toLocaleString("en-US");

  return (
    <div id="checkout" className=" mt-10">
      <div className=" max-w-sm">
        <div className=" text-gray-500 text-sm mb-8">
          <p className=" mb-2">
            {" "}
            Your details are securely encrypted and processed directly via
            Stripe an international card payment gateway.
          </p>
          NoLemons does not process or store any credit or debit card
          information.
          <p className=" mt-2">
            You will only be authorized (hold) for the{" "}
            <span className=" font-bold mr-0.5">{buyers_fee}</span>
            buyer fee
            <span className=" font-bold ml-0.5">
              {currency} {buyer_fee_num}
            </span>{" "}
            if an offer is accepted.
          </p>
        </div>

        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
};
