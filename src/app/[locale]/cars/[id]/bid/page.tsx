import BidSteps from "@/components/bid-steps";
import { getUaeCar } from "@/lib/car-actions";
import { ICar } from "@/lib/types";
import React from "react";

export default async function BidPage({ params }: any) {
  const { id, locale } = params;

  const data: ICar = await getUaeCar(id);

  return <BidSteps carDetail={data} />;
}
