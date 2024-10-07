// pages/api/create-checkout-session.js

import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(
  "sk_test_51Q7INO08IA0uLya0IWzdbPi1FUlAzrETo71Y8tHKQp5WBVm3IcnTnTEQFspxvTPhxYDbRbYmOXzDmBrABj6ixwhS00bNGp67vO"
);

export default async function POST(req: NextRequest) {
  return NextResponse.json({ message: "fuck you " });
}

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "fuck you" });
}
