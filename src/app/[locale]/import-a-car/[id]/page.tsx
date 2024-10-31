import CarDetailPage from "@/components/cars-detail/car-detail-page";
import ChatWithUsBtn from "@/components/chat-with-us-btn";
import GtmTracking from "@/components/gtm-tracking";
import { getImportCar } from "@/lib/car-actions";
import { ICar, TSearchParams } from "@/lib/types";

type Props = {
  params: { id: string; locale: string };
  searchParams: TSearchParams;
};

export default async function ParsedCarPage({ params, searchParams }: Props) {
  const { id } = params;

  const data: ICar = await getImportCar(id);

  return (
    <>
      <GtmTracking slug={id} />
      <CarDetailPage carDetail={data} utms={searchParams} />
      <ChatWithUsBtn
        text={`Hi, I have a question about this ${data.title}`}
        number="971566633668"
      />
    </>
  );
}
