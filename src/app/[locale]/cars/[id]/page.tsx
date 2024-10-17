import CarDetailPage from "@/components/cars-detail/car-detail-page";
import GtmTracking from "@/components/gtm-tracking";
import { getUaeCar } from "@/lib/car-actions";
import { ICar } from "@/lib/types";

import { Metadata } from "next";
import * as React from "react";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const data: ICar = await getUaeCar(params.id);
    const carDescription =
      data.auction && data.status == "live"
        ? `For sale: ${data.year} ${data.title};\nAuction ends on ${new Date(
            data.auction.time_ending
          ).toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}`
        : data.status == "created"
        ? `Coming soon: ${data.year} ${data.title}`
        : `For sale: ${data.year} ${data.title}`;

    return {
      title: `${data.title} ${data.year}`,
      description: carDescription,
      openGraph: {
        title: data.title,
        description: carDescription,
        images: [data.main_image],
      },
      alternates: {
        canonical: `/cars/${data.url_route}`,
      },
    };
  } catch (e) {
    return {
      title: `Car not found`,
      description: "Car not found",
      openGraph: {
        title: "NoLemons Car Sales",
        description: "Car not found",
        images: [],
      },
      alternates: {
        canonical: `/cars/${params.id}`,
      },
    };
  }
}

export default async function CarPage({ params, searchParams }: any) {
  const { id, locale } = params;

  const data: ICar = await getUaeCar(id);
  // console.log(data);
  // return null;
  return (
    <>
      <GtmTracking slug={id} />
      <CarDetailPage carDetail={data} utms={searchParams} />
    </>
  );
}
