import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const messages = {
    default: (await import(`../locales/${locale}/default.json`)).default,
    how_it_works: (await import(`../locales/${locale}/how_it_works.json`))
      .default,
    how_selling_works: (
      await import(`../locales/${locale}/how_selling_works.json`)
    ).default,
    sell_your_car: (await import(`../locales/${locale}/sell_your_car.json`))
      .default,
    why_us: (await import(`../locales/${locale}/why_us.json`)).default,
  };

  return {
    messages,
  };
});
