import { ICar } from "@/lib/types";

import CarCard from "../CarCard";
import TrackPageViewCom from "../track-page-view";
import { getCars } from "@/lib/car-actions";
import NoFoundCars from "../no-found-cars";
import { shuffleArray } from "@/lib/utils";

type CarsPageProps = {
  category: string;
  search: string;
};

const hideFromHomePage: string[] = [
  "2019-BMW--M2-Competition--8550",
  "2022-Lexus-ES-250-X315",
  "2020-Porsche-Taycan-X667",
];

const CarsPage: React.FC<CarsPageProps> = async ({ category, search }) => {
  // fetch cars based on filter & search
  const cars: ICar[] = await getCars({ category, search });
  console.log(cars);

  return null
  const cars_render: ICar[] = cars.filter(
    (car) => !hideFromHomePage.includes(car.url_route ?? "none")
  );

  const cars_len = cars_render.length;

  if (category == "import-a-car") shuffleArray(cars_render);
  if (cars_len == 0) return <NoFoundCars />;

  return (
    <section className="pb-40 pt-4 md:pt-8">
      <TrackPageViewCom />
      <div className="md:mb-4 mb-2 md:text-xl">({cars_len}) Cars Found</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars_render.map((car, idx) => (
          <CarCard key={idx} carDetails={car} />
        ))}
      </div>
    </section>
  );
};

export default CarsPage;
