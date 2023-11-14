import CarImagesSection from "@/components/CarImagesSection";
import * as React from "react";

interface ICarPageProps {}

const CarPage: React.FunctionComponent<ICarPageProps> = (props) => {
  return (
    <section className="flex flex-col px-16 py-4">
      <h1 className="text-xl font-bold">2022 Porsche 911 GT3</h1>
      <p className="text-md">
        ~2,100 Miles, 6-Speed Manual, 502-hp Flat-6, Carbon Fiber Bucket Seats
      </p>
      <CarImagesSection
        images={[
          "https://nolemons.ae/wp-content/uploads/2022/12/mclaren_senna_2019_cover.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_11.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_0.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_26.jpg",
          "https://nolemons.ae/wp-content/uploads/2022/12/mclaren_senna_2019_cover.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_11.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_0.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_26.jpg",
          "https://nolemons.ae/wp-content/uploads/2022/12/mclaren_senna_2019_cover.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_11.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_0.jpg",
          "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_26.jpg",
        ]}
      />
    </section>
  );
};

export default CarPage;
