import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIP_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const { amount, currency } = await req.json();

    console.log(amount, currency);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    // return NextResponse.json({ test: "slkjdf" });
  } catch (error) {
    console.error("Internal Error:", error);
    // Handle other errors (e.g., network issues, parsing errors)
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
