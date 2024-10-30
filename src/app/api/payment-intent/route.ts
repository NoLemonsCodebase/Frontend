import { sendErrorMessageToSlack } from "@/lib/car-actions";
import { NextRequest, NextResponse } from "next/server";

// const stripe = require("stripe")(process.env.STRIP_SECRET_KEY);

const stripe = require("stripe")(
  "sk_test_51JL5IsK7Uh3dA2avnQYplHSxoBlHLk8U8iig7OgXtjjvfZb1NjqdQUhzIf9dpLpm0Yx7DQKK9duoyV7Cee85LOAp003b0Gyb4p"
);

export async function POST(req: NextRequest) {
  try {
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
    // Handle other errors (e.g., network issues, parsing errors)
    sendErrorMessageToSlack("Dev Test Internal Error with strip gateway");
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
