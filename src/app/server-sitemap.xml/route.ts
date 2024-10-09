import { ICar } from "@/lib/types";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";



export async function GET(request: Request) {
  const res = await fetch("https://nolemons2.onrender.com/api/v2/cars/", {
    next: { revalidate: 0 },
  });

  const cars: ICar[] = await res.json();

  const fields: ISitemapField[] = cars.map((car) => ({
    loc: `https://www.nolemons.ae/cars/${car.url_route}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(fields);
}
