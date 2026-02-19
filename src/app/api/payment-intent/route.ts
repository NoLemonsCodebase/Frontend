import { NextRequest, NextResponse } from "next/server";

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return require("stripe")(key);
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe();
    const url_after_complete = req?.headers?.get("referer")?.slice(0, -4) || "";

    const { amount, currency, prepare_data } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
      metadata: {
        ...prepare_data,
        url_after_complete,
      },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    if (error instanceof Error && error.message === "STRIPE_SECRET_KEY is not set") {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }
    return NextResponse.json(
      { error: `Stripe internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
