import convertToSubCurrency from "@/lib/convertToSubCurrency";
import { ICar } from "@/lib/types";
import {
  Elements,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Stripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { CiBadgeDollar } from "react-icons/ci";

interface CheckOutStripProps {
  carDetail: ICar;
  stripePromise: Stripe | PromiseLike<Stripe | null> | null;
}

const BidPrice: React.FC<CheckOutStripProps> = ({
  carDetail,
  stripePromise,
}) => {
  const { sale_price, currency } = carDetail;

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubCurrency(sale_price),
        currency: currency.toLowerCase(),
      }}
    >
      <CheckOutForm carDetail={carDetail} />
    </Elements>
  );
};

export default BidPrice;

interface CheckOutFormProps {
  carDetail: ICar;
}

const CheckOutForm: React.FC<CheckOutFormProps> = ({ carDetail }) => {
  const strip = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | undefined>("");
  const [clientSecret, setClientSecret] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { sale_price, currency, buyers_fee } = carDetail;

  useEffect(() => {
    async function fetchClientSecret() {
      const res = await fetch("/api/payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Added Content-Type header
        },
        body: JSON.stringify({
          amount: convertToSubCurrency(sale_price),
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

  const buyer_fee_num = (
    (Number(buyers_fee?.[0]) / 100) *
    sale_price
  ).toLocaleString("en-US");

  return (
    <div className="max-w-sm mt-10">
      <div className=" text-gray-500 text-sm mb-8">
        <p className=" mb-2">
          {" "}
          Please note offers are final. If you withdraw your offer we will not
          be able to refund the buyer fee.
        </p>
        <p>
          Your details are securely encrypted and processed directly via Stripe
          an international card payment gateway.
        </p>
      </div>
      <form
        className=" border pb-8 pt-2 rounded-md px-2"
        onSubmit={handleSubmit}
      >
        <div className=" text-green-600 text-6xl mb-2 ">
          <CiBadgeDollar className=" mx-auto" />
        </div>
        <span className=" block text-center mb-4 font-bold text-xl max-w-[300px] m-auto">
          Pay NoLemons Buyer Fee of {currency} {buyer_fee_num}
        </span>
        {clientSecret && <PaymentElement />}
        {error && <div>{error}</div>}
        <button
          disabled={!strip || loading}
          className=" bg-green-600 w-full text-white font-semibold py-3 rounded-md mt-4"
        >
          {!loading ? `Pay ${currency} ${buyer_fee_num} ` : "processing..."}
        </button>
      </form>
    </div>
  );
};
