"use client";

import { TrackPageView } from "@/lib/services/pixels";
import { ICar } from "@/lib/types";

import CarCard from "../CarCard";
import { useEffect, useState } from "react";
import CarsFilter from "../cars-filter";
import { useSearchParams } from "next/navigation";

interface ICarsPageProps {
  cars: ICar[];
}

export default function CarsPage({ cars = [] }: ICarsPageProps) {
  const [showSpinner, setShowSpinner] = useState(false);
  const search_params = useSearchParams();

  const render_cars = cars.filter((car) => {
    if (search_params.get("cat") == "uae") {
      return true;
    } else if (search_params.get("cat") == "import-a-car") {
      return car.status == "for_sale";
    }
    return car.status == "sold";
  });

  useEffect(() => {
    TrackPageView();
  }, []);

  useEffect(() => {
    setShowSpinner(true);
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [search_params]);

  return (
    <main className=" container m-auto min-h-screen px-8 pb-20">
      <CarsFilter />

      {showSpinner ? (
        <div className=" flex justify-center pt-32">
          <div className="loader"></div>
        </div>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {render_cars.map((car) => {
            return <CarCard key={car.id} carDetails={car} />;
          })}
        </section>
      )}
    </main>
  );
}
