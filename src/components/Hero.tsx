import { RiArrowDropRightLine } from "react-icons/ri";
import { MdOutlineVerifiedUser } from "react-icons/md";
const wordsRender: string[] = [
  "Global Shipping",
  "Aftersales Support",
  "Fully Inspected",
  "Detailed Vehicle History",
  "Professional Photoshoots",
];

function Hero() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <a
          href="https://nolemons.help/buyer-protection"
          className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-4 py-2 pr-4 text-sm text-gray-700 hover:bg-gray-200"
          role="alert"
        >
          <MdOutlineVerifiedUser className="text-xl md:text-3xl mr-3" />

          <span className="font-small text-sm">Full Buyer Protection</span>
          <RiArrowDropRightLine className="text-3xl" />
        </a>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          Exciting cars.
          <br /> Carefully checked & honestly presented.
        </h1>
        {/* <FlipWords
          words={wordsRender}
          className="md:text-4xl text-2xl font-bold text-[#455e8b]"
        /> */}
      </div>
    </section>
  );
}

export default Hero;
