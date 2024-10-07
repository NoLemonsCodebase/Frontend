import { useCallback, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
  PaymentElement,
  Elements,
} from "@stripe/react-stripe-js";

// if (process.env.NEXT_PUBLIC_STRIP_PUBLIC_KEY == undefined) {
//   throw new Error("process.env.NEXT_PUBLIC_STRIP_PUBLIC_KEY is undefiend");
// }

const stripePromise = loadStripe(
  "pk_test_51Q7INO08IA0uLya05iW6lVNwyxY4ePIUNK845DNtOmvRJzaBpRNdBzGcy1LekyBqitcGDbIpaNRot1ICEouc0kx900IRKDPZ84"
);

const FormStrip = () => {
  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
    });
    const data = await res.json();
    return data.clientSecret;
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default FormStrip;
