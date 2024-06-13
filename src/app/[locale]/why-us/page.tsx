import React from "react";
import { useTranslations } from "next-intl";
// comment

const NoLemons = () => {
  const t = useTranslations("why_us");
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Why NoLemons?</h1>
      <div className="space-y-8">
        {/* Section 1: Cool Cars Only */}
        <section className="bg-blue-100 p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-2">{t("page.whyus.coolcarsonly")} 😎</h2>
          <p>
            {t("page.whyus.coolcarsonly_section")}
          </p>
        </section>

        {/* Section 2: No More Lemons */}
        <section className="bg-yellow-100 p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-2">
            {t("page.whyus.nomorelemons")} ❌🍋
          </h2>
          <p>
            {t("page.whyus.nomorelemons_section")}
          </p>
        </section>

        {/* Section 3: No Deal = No Fees */}
        <section className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-2">
            {t("page.whyus.nodealnofees")} 🤝
          </h2>
          <p>
            {t("page.whyus.nodealnofees_section")}
          </p>
        </section>

        {/* Section 4: Global Buying */}
        <section className="bg-purple-100 p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-2">
            {t("page.whyus.buyanywhere")} 🌏
          </h2>
          <p>
            {t("page.whyus.buyanywhere_section")}
          </p>
        </section>

        {/* Lemon Definition */}
        <section className=" p-6 rounded-lg shadow-md">
          <h2 className="font-semibold text-2xl mb-2">{t("page.whyus.whatisalemon")} 🍋</h2>
          <p>
            {t("page.whyus.whatisalemon_section")}
          </p>
        </section>

        {/* Our Story */}
        <section className="p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-xl mb-4">{t("page.whyus.ourstory")}</h3>
          <div className="flex flex-col space-y-2">
            <p>
              {t("page.whyus.ourstory_section")}
            </p>
          </div>
        </section>

        {/* TL;DR */}
        <section className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h3 className="font-bold text-xl mb-4">{t("page.whyus.tldr")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">NO:</h4>
              <ul className="list-disc ml-4">
                <li>{t("page.whyus.tldrno")}</li>
                <li>Boring commuter cars.</li>
                <li>
                  Cars with misleading or dishonest descriptions. Not cool.
                </li>
                <li>Dishonest sellers hiding issues and repairs.</li>
                <li>
                  Sellers that are dishonest or hide issues and repairs. Not
                  welcome
                </li>
                <li>
                  Haggling sellers. Let’s treat each other with respect. Every
                  car has its fair price. Don’t be that guy trying to get it for
                  a ‘steal’. Not nice.
                </li>
                <li>Fees just to sign up. Not here.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">YES:</h4>
              <ul>
                <li>Cool cars are sold here</li>
                <li>
                  Honest cars with 100% transparency about all issues, faults,
                  and imperfections
                </li>
                <li>
                  Inspections for each and every car. It’s your right to know
                  what your buying
                </li>
                <li>
                  Pro photography for all cars. Beauty shots and scratches, we
                  want to see it all.
                </li>
                <li>
                  Fair fees for results. 5% for buyers and 2% for sellers only
                  when deals are done.
                </li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default NoLemons;
