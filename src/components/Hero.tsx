import { RiArrowDropRightLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useSearchParams } from "next/navigation";
// import { FlipWords } from "./ui/flip-words";
const wordsRender: string[] = [
  "Global Shipping",
  "Aftersales Support",
  "Fully Inspected",
  "Detailed Vehicle History",
  "Professional Photoshoots",
];

function Hero() {
  // const search_params = useSearchParams();
  // const curr_active = search_params.get("cat") ?? "uae";

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <h1 className=" mb-7  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Exciting cars.
          <br /> Carefully checked & honestly presented{" "}
          {/* {curr_active == "uae"
            ? "honestly presented"
            : curr_active == "import-a-car"
            ? "honestly import a car"
            : "private sale"}{" "} */}
        </h1>
        {/* <FlipWords
          words={wordsRender}
          className="md:text-4xl text-2xl font-bold text-[#455e8b]"
        /> */}
        <a
          href="https://nolemons.help/buyer-protection"
          className=" mb-4 inline-flex items-center justify-between rounded-full bg-gray-100 px-4 py-2 pr-4 text-sm text-gray-700 hover:bg-gray-200"
          role="alert"
        >
          <MdOutlineVerifiedUser className="text-xl md:text-3xl mr-3" />

          <span className="font-small text-sm">Full Buyer Protection</span>
          <RiArrowDropRightLine className="text-3xl" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
