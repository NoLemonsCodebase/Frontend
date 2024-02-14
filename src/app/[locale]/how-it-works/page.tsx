import * as React from "react";
import { useTranslations } from "next-intl";

interface IHowItWorksPageProps {}

const HowItWorksPage: React.FunctionComponent<IHowItWorksPageProps> = (
  props
) => {
  const t = useTranslations("how_it_works");

  const section1ItemsCount = Object.keys(t.raw("section_1")).length / 2;
  const section2ItemsCount = Object.keys(t.raw("section_2")).length / 2;
  return (
    <main className="p-4 h-screen w-full overflow-y-scroll pt-4 pb-8">
      <div className="flex flex-col mx-auto items-center">
        <div className="text-4xl font-bold my-4">{t("i_want_to_buy")}</div>
        <div className="bg-white w-full sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200">
          {section1ItemsCount > 0 &&
            Array.from({ length: section1ItemsCount }).map((_, index) => (
              <details key={index}>
                <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none bg-[#fafafa]">
                  {t(`section_1.item_${index + 1}_title`)}
                </summary>
                <p className="pt-1 pb-3 px-4">
                  {t(`section_1.item_${index + 1}_content`)}
                </p>
              </details>
            ))}
        </div>
        <div className="text-4xl font-bold mb-4 mt-6">
          {t("i_want_to_sell")}
        </div>
        <div className="bg-white w-full sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200">
          {section2ItemsCount > 0 &&
            Array.from({ length: section2ItemsCount }).map((_, index) => (
              <details key={index}>
                <summary className="question py-3 px-4 cursor-pointer select-none w-full outline-none bg-[#fafafa]">
                  {t(`section_2.item_${index + 1}_title`)}
                </summary>
                <p className="pt-1 pb-3 px-4">
                  {t(`section_2.item_${index + 1}_content`)}
                </p>
              </details>
            ))}
        </div>
      </div>
    </main>
  );
};

export default HowItWorksPage;
