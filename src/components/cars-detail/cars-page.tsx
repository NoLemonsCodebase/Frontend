import { ICar } from "@/lib/types";

import CarCard from "../CarCard";
import TrackPageViewCom from "../track-page-view";
import { getCars } from "@/lib/car-actions";
import NoFoundCars from "../no-found-cars";

type CarsPageProps = {
  category: string;
  search: string;
};

const CarsPage: React.FC<CarsPageProps> = async ({ category, search }) => {
  // fetch cars based on filter & search
  const cars: ICar[] = await getCars({ category, search });
  const cars_render: ICar[] = cars.filter((car) => car.status != "deactivate");
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
};

export default CarsPage;
