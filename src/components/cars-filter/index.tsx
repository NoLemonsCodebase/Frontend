"use client";
import Image from "next/image";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const categories = [
  {
    name: "All",
    value: "all",
    // img: "/images/filter-images/car.png",
  },
  { name: "UAE", value: "uae", img: "/images/filter-images/uae.png" },
  {
    name: "Import A Car",
    value: "import-a-car",
    img: "/images/filter-images/world-globe.png",
  },
];

export default function CarsFilter() {
  const search_params = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const curr_active = search_params.get("cat") ?? "uae";
  const is_search =
    search_params.has("query") && search_params.get("cat") == "all";

  function handleFilter(val: string) {
    const params = new URLSearchParams(search_params);
    params.set("cat", val);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    const params = new URLSearchParams(search_params);

    if (!params.has("cat")) {
      params.set("cat", "uae");
      replace(`${pathname}?${params.toString()}`);
    }
  }, []);

  return (
    <div className=" flex gap-4 ">
      {categories.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilter(filter.value)}
          className={` px-3 py-1.5 gap-2 shadow-md transition-colors duration-500 flex items-center rounded-md ${
            curr_active == filter.value ? " bg-[#262626]" : ""
          } ${
            is_search &&
            (filter.value == "uae" || filter.value == "import-a-car")
              ? "opacity-40 cursor-not-allowed"
              : ""
          }`}
        >
          {filter.img && (
            <div className=" max-w-[20px]">
              <Image
                src={filter.img}
                width={500}
                height={500}
                alt={filter.name}
                priority
              />
            </div>
          )}
          <span
            className={`transition-colors duration-500  ${
              curr_active == filter.value ? " text-white" : ""
            }`}
          >
            {filter.name}
          </span>
        </button>
      ))}{" "}
    </div>
  );
}
