"use client";

import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import SellYouCarAr from "./sell-you-car-ar";
import { Fragment, useState } from "react";
import { IoLanguage } from "react-icons/io5";
interface ISellYourCarPageProps {}

const SellYourCarPage: React.FunctionComponent<ISellYourCarPageProps> = (
  props
) => {
  const t = useTranslations("sell_your_car");
  const [lan, setLan] = useState<string>("en");

  const switchArabic = () => setLan("ar");
  const switchEnglish = () => setLan("en");

  // const [name, setName] = React.useState("");
  // const [description, setDescription] = React.useState("");

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const text = encodeURIComponent(
  //     `Hello! I'm ${name} and I want to sell my car.\nHere's a small description:\n${description}`
  //   );
  //   window.open(
  //     `https://api.whatsapp.com/send/?phone=971566633668&text=${text}`,
  //     "_blank"
  //   );
  // };

  return (
    <div className="max-w-xl mx-auto px-4">
      <SwitherButton
        lan={lan}
        switchArabic={switchArabic}
        switchEnglish={switchEnglish}
      />
      {lan == "en" ? (
        <div className="flex flex-col pt-5 pb-10 space-y-4">
          <h2 className="text-3xl font-bold text-center">
            {t("sell_your_car")}
          </h2>
          <p>{t("text_s_1")}</p>
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="flex flex-col space-y-2" key={index}>
              <h3 className="text-xl font-bold">{`${index + 1}) ${t(
                `item_${index + 1}_title`
              )}`}</h3>

              <p>{t(`item_${index + 1}_content`)}</p>
            </div>
          ))}
          <div className="w-full border-b pt-4" />
          <p className="pt-4">{t("text_s_2")}</p>

          <Link
            target="_blank"
            href="https://nw60ssq5era.typeform.com/to/CN1PoETZ/"
          >
            <Button className="w-full md:text-xl md:py-6 mt-1">
              Sell my car
            </Button>
          </Link>
        </div>
      ) : (
        <SellYouCarAr />
      )}
    </div>
  );
};

function SwitherButton({ switchArabic, switchEnglish, lan }: any) {
  return (
    <div className=" mt-10 relative flex items-center border w-[212px] p-1 rounded-full mb-8">
      <button
        onClick={switchEnglish}
        className={`basis-24 transition-colors duration-300 ${
          lan == "en" ? "text-white" : "text-black"
        }`}
      >
        English
      </button>
      <IoLanguage className="basis-5 text-white" />
      <button
        onClick={switchArabic}
        className={`basis-24 transition-colors duration-300 ${
          lan == "ar" ? "text-white" : "text-black"
        }`}
      >
        العربية
      </button>

      <span
        className={`left-0 -z-10 transition-transform duration-300 bg-black bg-opacity-80 w-32 h-full absolute rounded-full ${
          lan == "en" ? "translate-x-0" : "translate-x-[82px]"
        }`}
      ></span>
    </div>
  );
}
export default SellYourCarPage;
