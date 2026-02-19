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
    const root_url = req?.headers.get("origin");
    const url_after_complete = req?.headers?.get("referer")?.slice(0, -4) || "";

    const body = await req.json(); // Parse the incoming request body as JSON
    const { prepare_data } = body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "setup",

      ui_mode: "embedded",
      metadata: {
        ...prepare_data,
        url_after_complete,
      },
      return_url: `${root_url}/en/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({ session });
  } catch (error) {
    if (error instanceof Error && error.message === "STRIPE_SECRET_KEY is not set") {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }
    return NextResponse.json(
      { error: `Stripe internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const stripe = getStripe();
    const url = new URL(req.url);
    const sesstionId = url.searchParams.get("session_id");

    const session = await stripe.checkout.sessions.retrieve(sesstionId);

    return NextResponse.json({ session });
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
