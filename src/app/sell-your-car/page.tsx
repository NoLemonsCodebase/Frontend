"use client";

import * as React from "react";

interface ISellYourCarPageProps {}

const sections = [
  {
    title: "No sale = No fee",
    description:
      "Listing with us is free. Plus, for a limited time only, our Seller’s Fee is as low as 2%, No sale? No fees. Truly risk-free.",
  },
  {
    title: "We’re on your side",
    description:
      "With NoLemons you have a team that appreciates that your car is special and works to get you the highest price possible.",
  },
  {
    title: "Hassle-free",
    description:
      "Since we’re your only point of contact, we’ll answer all questions until the auction is over. No more late night calls and “last price” messages.",
  },
  {
    title: "Pro photoshoot",
    description:
      "We work with some of the best car photographers in town. With up to 100 photos and up to 4 videos, buyers can see everything they need to decide.",
  },
  {
    title: "Garage inspection",
    description:
      "Pre-purchase inspections by specialists help give buyers a 360° view of your car. We give buyers, local or internationally, the confidence to bid on your car. Say goodbye to long viewings and test drives on your weekend.",
  },
  {
    title: "We market your car to enthusiasts only",
    description:
      "Our team will build your auction post which includes vehicle history, past maintenance and service records to ensure your car stands out. Your car will be then advertised online to fellow car lovers and serious buyers.",
  },
  {
    title: "International buyers",
    description:
      "50% of our cars sell internationally. We’ve exported cars all over the Gulf and beyond with bidders from UAE, KSA, Kuwait, Qatar, Bahrain, and Oman. We’ve even served buyers in destinations far as South Africa and the US. Even better NoLemons handles all the work including shipping and paperwork.",
  },
];

const SellYourCarPage: React.FunctionComponent<ISellYourCarPageProps> = (
  props
) => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `Hello! I'm ${name} and I want to sell my car.\nHere's a small description:\n${description}`
    );
    window.open(
      `https://api.whatsapp.com/send/?phone=971564404640&text=${text}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col p-4 space-y-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Sell your car</h2>
      <p>
        There are no fees to auction and sell your car with NoLemons. Even
        better, there are lots of benefits:
      </p>

      {sections.map((section, index) => (
        <div className="flex flex-col space-y-2" key={index}>
          <h3 className="text-xl font-bold">{`${index + 1}) ${
            section.title
          }`}</h3>
          <p>{section.description}</p>
        </div>
      ))}
      <div className="w-full border-b pt-4" />
      <p className="pt-4">
        Got a car that we can help sell on No Lemons? Fill in the form below and
        we’ll get in touch.
      </p>

      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <label htmlFor="name" className="font-bold">
          Name
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
          Description
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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellYourCarPage;
