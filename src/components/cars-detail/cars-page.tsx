"use client";

import { TrackPageView } from "@/lib/services/pixels";
import { ICar } from "@/lib/types";
import * as React from "react";
import CarCard from "../CarCard";

interface ICarsPageProps {
  cars: ICar[];
}

const CarsPage: React.FunctionComponent<ICarsPageProps> = ({ cars = [] }) => {
  React.useEffect(() => {
    TrackPageView();
  }, []);

  return (
    <main className=" container m-auto min-h-screen space-x-6 px-8 sm:px-16  pb-20">
      {/* <p className="text-2xl font-bold mb-4">Auctions</p> */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map((car) => {
          return <CarCard key={car.id} carDetails={car} />;
        })}
      </section>
    </main>
  );
};

export default CarsPage;
