// pages/api/create-checkout-session.js

import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIP_SECRET_KEY);

export default async function POST(req: NextRequest) {
  console.log("hsdfkjsdklfjlskdj");
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "setup",
      ui_mode: "embedded",
      return_url:
        "https://example.com/checkout/return?session_id={CHECKOUT_SESSION_ID}",
    });
    console.log("Hi ");
    return NextResponse.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("internal Error", error);
    return NextResponse.json(
      { error: `internal server error ${error}` },
      {
        status: 500,
      }
    );
  }
}
