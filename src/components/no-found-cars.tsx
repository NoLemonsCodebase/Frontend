import Link from "next/link";
import { LuSearchX } from "react-icons/lu";
// We couldn't find any result that matches your search.
// Request your dream car here.
export default function NoFoundCars() {
  return (
    <div className="mt-auto flex h-full flex-col items-center pt-8 pb-40 ">
      <LuSearchX className="moveUpRotate mb-4 text-8xl text-gray-600 md:text-9xl" />

      <p className="text-center text-gray-500 md:text-xl">
        We couldn&apos;t find any result that matches your search. <br />{" "}
        Request your dream car here.
      </p>

      <Link
        href="/request-a-car"
        className=" bg-green-500 hover:bg-green-700 transition-colors duration-300 text-white p-2 rounded-md mt-4 md:w-56 w-52 text-center md:text-xl"
      >
        Request a car
      </Link>
    </div>
  );
}
