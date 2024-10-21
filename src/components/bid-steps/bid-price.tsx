import convertToSubCurrency from "@/lib/convertToSubCurrency";
import { ICar } from "@/lib/types";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface CheckOutStripProps {
  carDetail: ICar;
  stripePromise: Stripe | PromiseLike<Stripe | null> | null;
}

const BidPrice: React.FC<CheckOutStripProps> = ({
  carDetail,
  stripePromise,
}) => {
  const {
    id,
    title,
    year,
    main_image,
    sale_price,
    currency,
    category,
    buyers_fee,
  } = carDetail;

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubCurrency(sale_price),
        currency: currency.toLowerCase(),
      }}
    >
      <CheckOutForm amount={sale_price} currency={currency} />
    </Elements>
  );

  // return <p>sdf</p>;
};

export default BidPrice;

function CheckOutForm({
  amount,
  currency,
}: {
  amount: number;
  currency: string;
}) {
  const pathname = usePathname();
  const strip = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | undefined>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchClientSecret() {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Added Content-Type header
        },
        body: JSON.stringify({
          amount: convertToSubCurrency(amount),
          currency,
        }),
      });
      const data = await res.json();

      setClientSecret(data.clientSecret);
    }

    fetchClientSecret();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    if (!strip || !elements) return;

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setError(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await strip.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "https://nolemons-dev.vercel.app/en/payment-success",
      },
    });

    if (error) {
      setError(error.message);
    }

    setLoading(false);
  }

  if (!clientSecret || !strip || !elements) {
    return <p className=" my-4">loading...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className=" max-w-sm mt-10">
      {clientSecret && <PaymentElement />}
      {error && <div>{error}</div>}
      <button
        disabled={!strip || loading}
        className=" bg-green-600 w-full text-white font-semibold py-3 rounded-md mt-4"
      >
        {!loading
          ? `Pay ${amount.toLocaleString()} ${currency}`
          : "processing..."}
      </button>
    </form>
  );
}
