"use client";

import CarCard from "../CarCard";
import * as React from "react";
import UpcomingCarCard from "../UpcomingCarCard";
import { ICar } from "@/lib/types";
import { TrackPageView } from "@/lib/services/pixels";

interface ICarsPageProps {
  cars: ICar[];
}

const CarsPage: React.FunctionComponent<ICarsPageProps> = ({ cars = [] }) => {
  // const activeAuctions = cars
  //   .filter(
  //     (item: ICar) =>
  //       item.status == "live" &&
  //       item.auction &&
  //       new Date(item.auction.time_ending).getTime() > new Date().getTime()
  //   )
  //   .sort(
  //     (a: ICar, b: ICar) =>
  //       new Date(b.auction!.time_ending).getTime() -
  //       new Date(a.auction!.time_ending).getTime()
  //   );

  // const forSaleAuctions = cars.filter(
  //   (item: ICar) => item.status == "for_sale"
  // );

  // const createdCars = cars.filter((item: ICar) => item.status == "created");

  // const pastAuctions = cars.filter((item: ICar) => item.status == "sold");

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
        {/* {forSaleAuctions.map((car) => {
            return <CarCard key={car.id} carDetails={car} />;
          })}
          {createdCars.map((car) => {
            return <CarCard key={car.id} carDetails={car} />;
          })} */}
        {/* <UpcomingCarCard
            title="Porsche Cayman GT4"
            location="Dubai, UAE"
            year="2016"
            mainImage="https://i.postimg.cc/x8XKgrf2/IMG-9065.jpg"
          /> */}
        {/* <UpcomingCarCard
            title="Mercedes  SLR"
            location="Dubai, UAE"
            year="2009"
            mainImage="https://i.postimg.cc/90ZCdL3K/HD1A9944.jpg"
          /> */}
        {/* <UpcomingCarCard
            title="Jaguar E Type Roadster"
            location="Dubai, UAE"
            year="1963"
            mainImage="https://i.postimg.cc/d0L85jYR/d4690d0b-d3fc-4600-a8c8-d1c4513ad2f3.jpg"
          /> */}
        {/* <UpcomingCarCard
            title="Porsche 911 Carrera Manual"
            location="Dubai, UAE"
            year="2008"
            mainImage="https://i.postimg.cc/764Z5qmC/6291873c-c0df-46f8-8d5a-2505449ed66c.jpg"
          /> */}
        {/* <UpcomingCarCard
            title="Mercedes 190SL"
            location="Dubai, UAE"
            year="1957"
            mainImage="https://i.postimg.cc/8zh8jM3H/2a927b83-3ba0-419b-97da-b5310b4ae697.jpg"
          />
          <UpcomingCarCard
            title="Shelby Cobra by Factory Five"
            location="Phoenix AZ, USA"
            year="2017"
            mainImage="https://i.postimg.cc/vmMQNpjC/PHOTO-2023-02-17-19-09-02.jpg"
          /> */}
        {/* {pastAuctions.map((car) => {
            return <CarCard key={car.id} carDetails={car} />;
          })} */}
      </section>
    </main>
  );
};

export default CarsPage;
