import { ICar } from "@/lib/types";

import CarCard from "../CarCard";
import TrackPageViewCom from "../track-page-view";
import { getCars } from "@/lib/car-actions";
import NoFoundCars from "../no-found-cars";

type Props = {
  category: string;
  search: string;
};

export default async function CarsPage({ category, search }: Props) {
  const cars: ICar[] = await getCars({ category, search });

  const cars_render = cars.filter((car) => car.status != "deactivate");

  if (cars_render.length == 0) return <NoFoundCars />;

  return (
    <section className="pb-40">
      <TrackPageViewCom />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars_render.map((car, idx) => {
          return <CarCard key={idx} carDetails={car} />;
        })}
      </div>
    </section>
  );
}
