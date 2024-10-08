import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(
  "sk_test_51Q7INO08IA0uLya0IWzdbPi1FUlAzrETo71Y8tHKQp5WBVm3IcnTnTEQFspxvTPhxYDbRbYmOXzDmBrABj6ixwhS00bNGp67vO"
);

export async function POST(request: NextRequest) {
  try {
    // const { amount } = await request.json();

    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: amount,
    //   currency: "usd",
    //   automatic_payment_methods: { enabled: true },
    // });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "setup",
      ui_mode: "embedded",
      redirect_on_completion: "never",
    });

    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    // Handle other errors (e.g., network issues, parsing errors)
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
