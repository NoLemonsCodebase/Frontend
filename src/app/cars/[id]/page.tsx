import CarDetailPage from "@/components/pages/CarDetailPage";
import { ICar } from "@/lib/types";
import { Metadata } from "next";
import * as React from "react";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(
    `https://nolemons2.onrender.com/api/v2/cars/${params.id}/`,
    { next: { revalidate: 0 } }
  );

  const data: ICar = await res.json();

  const carDescription =
    data.auction?.length > 0
      ? `For sale: ${data.year} ${data.title};\nAuction ends on ${new Date(
          data.auction[0].time_ending
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
    title: "NoLemons Online Auction",
    description: carDescription,
    openGraph: {
      images: [data.main_image],
    },
    metadataBase: new URL("https://nolemons.co"),
  };
}

const CarPage: React.FunctionComponent<{ params: any }> = async ({
  params,
}) => {
  const res = await fetch(
    `https://nolemons2.onrender.com/api/v2/cars/${params.id}/`,
    { next: { revalidate: 0 } }
  );

  const data: ICar = await res.json();

  return <CarDetailPage carDetail={data} />;
};

export default CarPage;
