import { useEffect, useState } from "react";

export default function useScrollY() {
  const [scrollYMore400, setScrollYMore400] = useState<boolean>(false);

  function handleScroll() {
    if (window.scrollY > 350) {
      setScrollYMore400(true);
    } else {
      setScrollYMore400(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollYMore400;
}
