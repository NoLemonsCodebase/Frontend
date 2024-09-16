"use client";
import { useSearchParams } from "next/navigation";
import FullBuyerBtn from "./full-buyer-btn";
// import { FlipWords } from "./ui/flip-words";
// const wordsRender: string[] = [
//   "Global Shipping",
//   "Aftersales Support",
//   "Fully Inspected",
//   "Detailed Vehicle History",
//   "Professional Photoshoots",
// ];

function Hero() {
  const search_params = useSearchParams();
  // const curr_active = search_params.get("cat") ?? "uae";

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-7 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Exciting cars.
          <br /> Carefully checked & honestly presented
          {/* {curr_active == " uae"
            ? " honestly presented"
            : curr_active == " import-a-car"
            ? " honestly import a car"
            : " private sale"}{" "} */}
        </h1>
        {/* <FlipWords
          words={wordsRender}
          className="md:text-4xl text-xl font-bold text-[#455e8b] mb-4"
        /> */}
        <FullBuyerBtn />
      </div>
    </section>
  );
}

export default Hero;
