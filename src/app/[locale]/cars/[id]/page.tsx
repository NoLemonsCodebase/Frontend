import CarDetailPage from "@/components/cars-detail/car-detail-page";
import GtmTracking from "@/components/gtm-tracking";
import { ICar } from "@/lib/types";
import { builder } from "@builder.io/sdk";
import { Metadata } from "next";
import * as React from "react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

type Props = {
  params: { id: string };
};

const fetchCar = async (id: string) => {
  let reqUrl = "";

  if (Number.isInteger(Number(id))) {
    reqUrl = `https://nolemons2.onrender.com/api/v2/cars/${id}/`;
  } else {
    reqUrl = `https://nolemons2.onrender.com/cars/by-route/${id}/`;
  }

  const res = await fetch(reqUrl, { next: { revalidate: 0 } });

  if (!res.status || res.status !== 200) {
    throw new Error("Car not found");
  }

  const data: ICar = await res.json();

  return data;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const data: ICar = await fetchCar(params.id);
    // console.log(data.auction)
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
    const page_title = data.status == "live" ? "| NoLemons Online Auction" : "";
    return {
      title: `${data.title} ${data.year} ${page_title}`,
      description: carDescription,
      openGraph: {
        title: "NoLemons Online Auction",
        description: carDescription,
        images: [data.main_image],
      },
      alternates: {
        canonical: `/cars/${data.url_route}`,
      },
    };
  } catch (e) {
    return {
      title: `Car not found | NoLemons Online Auction`,
      description: "Car not found",
      openGraph: {
        title: "NoLemons Online Auction",
        description: "Car not found",
        images: [],
      },
      alternates: {
        canonical: `/cars/${params.id}`,
      },
    };
  }
}

const CarPage: React.FunctionComponent<{
  params: any;
  searchParams: any;
}> = async ({ params, searchParams }) => {
  const { id, locale } = params;

  try {
    const data: ICar = await fetchCar(id);

    return (
      <>
        <GtmTracking slug={id} />
        <CarDetailPage carDetail={data} utms={searchParams} />
      </>
    );
  } catch (e) {
    return <div>Car not found</div>;
  }
};

export default CarPage;
