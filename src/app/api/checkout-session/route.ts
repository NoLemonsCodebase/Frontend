import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(
  "sk_test_51JL5IsK7Uh3dA2avnQYplHSxoBlHLk8U8iig7OgXtjjvfZb1NjqdQUhzIf9dpLpm0Yx7DQKK9duoyV7Cee85LOAp003b0Gyb4p"
);

export async function POST(req: NextRequest) {
  try {
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
    console.error("Internal Error:", error);
    // Handle other errors (e.g., network issues, parsing errors)
    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const url = new URL(req.url);
    const sesstionId = url.searchParams.get("session_id");

    const session = await stripe.checkout.sessions.retrieve(sesstionId);

    return NextResponse.json({ session });
  } catch (error) {
    console.error("Internal Error:", error);

    return NextResponse.json(
      { error: `Internal Server Error: ${error}` },
      { status: 500 }
    );
  }
}
