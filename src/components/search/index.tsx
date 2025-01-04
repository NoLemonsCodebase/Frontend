"use client";

import useDebounce from "@/lib/hooks/use-debounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

export default function Search() {
  //======================== COMPONENT LOGIC ============================
  const [value, setValue] = useState<string>("");
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (debouncedValue) {
      params.set("query", debouncedValue);
      params.set("cat", "all");
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [debouncedValue, replace, pathname, searchParams]);

  const addQuery = (e: ChangeEvent<HTMLInputElement>): void =>
    setValue(e.target.value);

  //======================== JSX COMPONENT ============================
  return (
    <div className="relative text-white basis-full md:basis-auto">
      <input
        value={value}
        onChange={addQuery}
        className=" w-full text-gray-800 rounded-md py-2 pl-10 outline-none ring-gray-700/50 transition-all duration-300 focus:ring-2 md:py-2 md:pl-14 search-shadow"
        placeholder="search for a car..."
      />
      <BiSearch className="absolute left-3 text-gray-700 top-1/2 -translate-y-1/2 md:left-4 md:text-2xl" />
    </div>
  );
}
