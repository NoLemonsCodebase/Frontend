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

  return {
    title: "NoLemons.ae - The online auction for car people, by car people",
    description: `${data.year} ${data.title}`,
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
