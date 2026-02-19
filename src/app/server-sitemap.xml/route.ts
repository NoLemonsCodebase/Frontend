import { ICar } from "@/lib/types";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";

export async function GET(request: Request) {
  const apiUrl = process.env.OUR_API ?? "";
  const res = await fetch(`${apiUrl}/api/v2/cars/`, {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    return new Response("Failed to fetch cars for sitemap", { status: 502 });
  }

  const cars: ICar[] = await res.json();

  const fields: ISitemapField[] = cars.map((car) => ({
    loc: `https://www.nolemons.ae/cars/${car.url_route}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(fields);
}
