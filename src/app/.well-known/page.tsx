import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "NoLemons.co - The online auction for car people, by car people",
  description: "By car people. For car people.",
  metadataBase: new URL("https://nolemons.co"),
};

export default async function Home() {
  const res = await fetch("https://nolemons2.onrender.com/api/v2/cars/", {
    next: { revalidate: 0 },
  });

  const data = await res.json();

  return (
    <div>
      Thank you!
    </div>
  );
}
