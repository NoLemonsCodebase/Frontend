"use client";

import CarCard from "../CarCard";
import * as React from "react";

interface ICarsPageProps {
  cars: any[];
}

const CarsPage: React.FunctionComponent<ICarsPageProps> = ({ cars }) => {
  return (
    <main className="flex min-h-screen space-x-6 px-8 sm:px-16 py-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold mb-4">Auctions</p>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cars.map((car) => {
            return <CarCard key={car.id} carDetails={car} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default CarsPage;
