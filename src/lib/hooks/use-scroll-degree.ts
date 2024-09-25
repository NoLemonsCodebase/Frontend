import { useEffect, useState } from "react";

export default function useScrollDegree() {
  const [scrollDegree, setScrollDegree] = useState<number>(0);

  function handleScroll() {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = totalScroll / windowHeight;
    const scrollInDegree = 360 * scroll;
    setScrollDegree(scrollInDegree);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollDegree };
}
