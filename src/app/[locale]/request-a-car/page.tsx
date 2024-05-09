"use client";

import * as React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import path from "path";

interface IRequestACarProps {}

const RequestACar: React.FunctionComponent<IRequestACarProps> = (
  props
) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("name", name);
    // const url_request = `https://nolemons2.onrender.com/thank-you/`;
    // const res = fetch(
    //   url_request,
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       phone,
    //       auction_id: carDetail.auction?.id,
    //     }),
    //   }
    // );
    // const text = encodeURIComponent(
    //   `Hello! I'm ${name}\nHere's a small description:\n${description}`
    // );
    window.open(
      `https://nolemons-staging.vercel.app/en/thank-you/`,
      "_parent"
    );
  };

  return (
    <div className="flex flex-col p-4 space-y-4 max-w-xl mx-auto">

      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-bold">
          {"Name"}
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
          {"Description of the car you want"}
        </label>
        <textarea
          name="description"
          id="description"
          className="border border-gray-400 p-2"
          value={description}
          rows={6}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {"Submit"}
        </Button>
      </form>
    </div>
  );
};

export default RequestACar;
