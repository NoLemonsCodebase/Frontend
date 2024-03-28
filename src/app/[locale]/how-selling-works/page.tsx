import * as React from "react";
import { useTranslations } from "next-intl";

interface IHowSellingWorksPageProps {}

const HowSellingWorksPage: React.FunctionComponent<
  IHowSellingWorksPageProps
> = (props) => {
  const t = useTranslations("how_selling_works");

  return (
    <main className="p-4 h-screen w-full overflow-y-scroll pt-4 pb-8">
      <div className="flex flex-col mx-auto max-w-xl text-lg font-normal">
        <div className="text-4xl font-bold my-4 text-center">
          {t("how_selling_works")}
        </div>
        <div className="text-3xl font-bold my-6">{t("approach")}</div>
        <p>{t("intro.list_title")}</p>
        <ol className="mt-3">
          <li>{t("intro.list_1")}</li>
          <li>{t("intro.list_2")}</li>
          <li>{t("intro.list_3")}</li>
        </ol>
        <p className="my-3">{t("intro.text_1")}</p>
        <p>
          {t("intro.text_2_1")}{" "}
          <span
            style={{
              textDecoration: "underline",
            }}
          >
            {t("intro.text_2_2")}
          </span>
        </p>

        <div className="flex flex-col space-y-4 mt-10">
          <div className="text-3xl font-bold">{t("section_1.title")}</div>
          <p>{t("section_1.text_1")}</p>
          <p className="italic">{t("section_1.text_2")}</p>
          <ul className="list-disc ml-4">
            <li>{t("section_1.list_item_1")}</li>
            <li>{t("section_1.list_item_2")}</li>
            <li>{t("section_1.list_item_3")}</li>
            <li>{t("section_1.list_item_4")}</li>
            <li>{t("section_1.list_item_5")}</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 mt-10">
          <div className="text-3xl font-bold">{t("section_2.title")}</div>
          <p className="italic">{t("section_2.text_1")}</p>
          <ul className="list-disc ml-4">
            <li>{t("section_2.list_item_1")}</li>
            <li>{t("section_2.list_item_2")}</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4 mt-10">
          <div className="text-3xl font-bold">{t("section_3.title")}</div>
          <p className="italic">{t("section_3.text_1")}</p>
          <ul className="list-disc ml-4">
            <li>{t("section_3.list_item_1")}</li>
            <li>{t("section_3.list_item_2")}</li>
            <li>{t("section_3.list_item_3")}</li>
            <li>{t("section_3.list_item_4")}</li>
            <li>{t("section_3.list_item_5")}</li>
          </ul>
          <p className="underline">{t("section_3.text_2")}</p>
        </div>

        <div className="flex flex-col space-y-4 mt-12">
          <div className="text-3xl font-bold">{t("section_4.title")}</div>
          <ul className="list-disc ml-4">
            <li>
              {t("section_4.list_item_1")}
              <ul className="list-disc ml-6">
                <li>{t("section_4.list_item_1_1")}</li>
              </ul>
            </li>
            <li>
              {t("section_4.list_item_2.1")}{" "}
              <a href="mailto:ameer@nolemons.co" className="underline">
                ameer@nolemons.co
              </a>{" "}
              {t("section_4.list_item_2.2")}{" "}
              <a
                href="https://wa.me/971566633668"
                className="underline"
                target="_blank"
              >
                +971 56 663 3668
              </a>
            </li>
            <li>{t("section_4.list_item_3")}</li>
            <li>
              <p className="font-bold">{t("section_4.list_item_4.title")}</p>
              <ol className="list-decimal ml-6">
                <li>{t("section_4.list_item_4.1")}</li>
                <li>{t("section_4.list_item_4.2")}</li>
                <li>{t("section_4.list_item_4.3")}</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default HowSellingWorksPage;
