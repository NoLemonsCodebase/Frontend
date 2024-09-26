import { useEffect } from "react";

export default function useDisableScroll() {
  useEffect(() => {
    // Disable scroll when the component is rendered
    const disableScroll = () => {
      document.body.style.overflow = "hidden";
    };

    // Enable scroll when the component is unmounted
    const enableScroll = () => {
      document.body.style.overflow = "auto";
    };

    disableScroll(); // Disable scroll on mount
    return () => {
      enableScroll(); // Enable scroll on unmount
    };
  }, []);
}
