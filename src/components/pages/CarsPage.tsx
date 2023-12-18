"use client";

import CarCard from "../CarCard";
import * as React from "react";
import UpcomingCarCard from "../UpcomingCarCard";

interface ICarsPageProps {
  cars: any[];
}

const CarsPage: React.FunctionComponent<ICarsPageProps> = ({ cars }) => {
  return (
    <main className="flex min-h-screen space-x-6 px-8 sm:px-16 py-4">
      <div className="flex flex-col">
        <p className="text-2xl font-bold mb-4">Auctions</p>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <UpcomingCarCard
            title="Porsche Cayman GT4"
            location="Dubai, UAE"
            year="2016"
            mainImage="https://i.postimg.cc/VNBNsYnY/PHOTO-2023-12-16-00-29-04.jpg"
          />

          <UpcomingCarCard
            title="Mercedes  SLR"
            location="Dubai, UAE"
            year="2009"
            mainImage="https://i.postimg.cc/90ZCdL3K/HD1A9944.jpg"
          />
          <UpcomingCarCard
            title="BMW i8"
            location="Dubai, UAE"
            year="2016"
            mainImage="https://i.postimg.cc/PxGbY6kG/GR3-0862.jpg"
          />
          <UpcomingCarCard
            title="Shelby Cobra by Factory Five"
            location="Phoenix AZ, USA"
            year="2017"
            mainImage="https://i.postimg.cc/vmMQNpjC/PHOTO-2023-02-17-19-09-02.jpg"
          />
          {cars.map((car) => {
            return <CarCard key={car.id} carDetails={car} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default CarsPage;
