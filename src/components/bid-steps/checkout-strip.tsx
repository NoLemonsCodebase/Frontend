import { sendErrorMessageToSlack } from "@/lib/car-actions";
import { useSteps } from "@/lib/context/steps-context";
import { ICar } from "@/lib/types";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

interface CheckOutStripProps {
  carDetail: ICar;
  stripePromise: Stripe | PromiseLike<Stripe | null> | null;
}

const CheckOutStrip: React.FC<CheckOutStripProps> = ({
  carDetail,
  stripePromise,
}) => {
  const [clientSecret, setClientSecret] = useState<string>("");

  const { name, phone, finalPrice } = useSteps();
  const { id, title, year, main_image, sale_price, buyers_fee, currency } =
    carDetail;

  // =============== prepare data for send to strip session ========
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
      const data = await res.json();

      if (!res.ok) {
        sendErrorMessageToSlack(
          `${data.error} | name: ${name} | phone: ${phone} | carId: ${id}`
        );
        return;
      }

      setClientSecret(data?.session.client_secret);
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

export default CheckOutStrip;
