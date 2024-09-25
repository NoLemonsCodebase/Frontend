"use client";

import useScrollDegree from "@/lib/hooks/use-scroll-degree";
import useScrollY from "@/lib/hooks/use-scroll-y";
import { HiArrowNarrowUp } from "react-icons/hi";

function UpButton() {
  const scrollYMore400 = useScrollY();
  const { scrollDegree } = useScrollDegree();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {scrollYMore400 && (
        <div
          style={{
            backgroundImage: `conic-gradient(#00000061 ${scrollDegree}deg, transparent ${scrollDegree}deg)`,
          }}
          onClick={scrollToTop}
          className="group/btn fixed bottom-10 right-4 z-20 h-12 w-12 cursor-pointer overflow-hidden rounded-full transition-all duration-300"
        >
          <span className="absolute left-1/2 top-1/2 h-[85%] w-[85%] translate-x-[-50%] translate-y-[-50%] rounded-full bg-white shadow-md"></span>
          <div className="absolute top-0 flex h-full w-full items-center justify-center transition-all duration-300 group-hover/btn:top-[-100%]">
            <HiArrowNarrowUp className="text-xl text-gray-700" />
          </div>
          <div className="absolute top-full flex h-full w-full items-center justify-center transition-all duration-300 group-hover/btn:top-0">
            <HiArrowNarrowUp className="text-xl text-gray-700" />
          </div>
        </div>
      )}
    </>
  );
}

export default UpButton;
