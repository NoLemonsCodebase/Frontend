import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

if (process.env.NEXT_PUBLIC_STRIP_PUBLIC_KEY == undefined) {
  throw new Error("NEXT_PUBLIC_STRIP_PUBLIC_KEY is not defined!!");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIP_PUBLIC_KEY);
export default function FormStrip() {
  return <div>FormStrip</div>;
}
