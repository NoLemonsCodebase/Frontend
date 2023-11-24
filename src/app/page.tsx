import { ActionsHeader } from "@/components/actions-header";
import CarCard from "@/components/CarCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NoLemons.ae - The online auction for car people, by car people",
  description: "1996 Toyota Land Cruiser VX",
  openGraph: {
    images: ["/images/land-cruiser/social.jpeg"],
  },
  metadataBase: new URL("https://nolemons.co"),
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-6 px-16 py-8">
      <ActionsHeader />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CarCard
          img={
            "https://nolemons.ae/wp-content/uploads/2023/01/mclaren_senna_2019_cover_alt_sammy-600x400.jpeg"
          }
        />
        <CarCard img="https://nolemons.ae/wp-content/uploads/2022/11/project_ford_mustang_1966_cabrio_thumbnail-600x400.jpg" />
        <CarCard img="https://nolemons.ae/wp-content/uploads/2022/11/porsche_911_997_c2s_2-600x400.jpg" />
        <CarCard img="https://nolemons.ae/wp-content/uploads/2022/11/lotus_exige_sport_380_2017_7-600x400.jpg" />
      </section>
    </main>
  );
}
