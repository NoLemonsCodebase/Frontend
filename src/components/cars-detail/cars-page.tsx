import { ICar } from "@/lib/types";

import CarCard from "../CarCard";
import TrackPageViewCom from "../track-page-view";
import { getCars } from "@/lib/car-actions";

export default async function CarsPage({ category }: { category: any }) {
  const cars: ICar[] = await getCars({ category });

  return (
    <section className="pb-40">
      <TrackPageViewCom />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car, idx) => {
          return <CarCard key={idx} carDetails={car} />;
        })}
      </div>
    </section>
  );
}
