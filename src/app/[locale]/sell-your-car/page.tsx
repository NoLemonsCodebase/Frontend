"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
interface ISellYourCarPageProps {}

const SellYourCarPage: React.FunctionComponent<ISellYourCarPageProps> = (
  props
) => {
  const t = useTranslations("sell_your_car");
  const locale = useLocale();
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hello! I'm ${name} and I want to sell my car.\nHere's a small description:\n${description}`
    );
    window.open(
      `https://api.whatsapp.com/send/?phone=971566633668&text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col p-4 py-10 space-y-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center">{t("sell_your_car")}</h2>
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
        <Button className="w-full md:text-xl md:py-6 mt-1">Sell my car</Button>
      </Link>

      {/* <Button type="button" className="backgroud-color:rgb(74,212,147) hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        <a target="_blank" href="https://nw60ssq5era.typeform.com/to/CN1PoETZ/">Sell car</a>
      </Button> */}

      {/* <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-bold">
          {t("name")}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="border border-gray-400 p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="description" className="font-bold">
          {t("description")}
        </label>
        <textarea
          name="description"
          id="description"
          className="border border-gray-400 p-2"
          value={description}
          rows={6}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-400 focus:ring-2 focus:ring-gray-400 shadow-sm text-white font-bold py-2 px-4 rounded"
        >
          {t("submit")}
        </button>
      </form> */}
    </div>
  );
};

export default SellYourCarPage;
