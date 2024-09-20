"use client";
import { useSearchParams } from "next/navigation";
import FullBuyerBtn from "./full-buyer-btn";
import XYAnim from "./anim/xy-anim";

function Hero() {
  const search_params = useSearchParams();
  const cat = search_params.get("cat") ?? "uae";
  const anim_render = cat == "uae" || cat == "all" ? "first" : "second";

  return (
    <section>
      <div className="mx-auto max-w-screen-xl py-8 text-center lg:px-12 lg:py-16">
        <h1 className="mb-7 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          {cat == "uae" || cat == "all" ? (
            <XYAnim dis={30} dur={1} key={anim_render}>
              Exciting cars.
              <br /> Carefully checked & honestly presented
            </XYAnim>
          ) : (
            <XYAnim dis={30} dur={1} key={anim_render}>
              Your Dream Car.
              <br />
              From Anywhere to Your Door Step
            </XYAnim>
          )}
        </h1>
        <FullBuyerBtn />
      </div>
    </section>
  );
}

export default Hero;
